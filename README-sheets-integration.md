# HyperMind AI - Google Sheets Integration

This document provides a summary of the Google Sheets integration issues and solutions for the HyperMind AI website.

## Overview

The website includes multiple forms that submit data to Google Sheets:
1. Newsletter modal form
2. Footer subscription form 
3. Contact form
4. Waitlist form

The data should be recorded in a Google Sheet using Google Apps Script as the backend.

## Key Issues Identified

1. **Google Apps Script Configuration**
   - The Apps Script URL may be incorrect or not properly deployed
   - The script may not have permission to access the Google Sheet
   - The deployment settings may not allow anonymous access

2. **CORS Limitations**
   - Browser security restrictions prevent direct cross-origin requests
   - The 'no-cors' mode allows requests but prevents seeing actual response data
   - Error handling is limited due to CORS restrictions

3. **Form Data Handling**
   - FormData objects are being sent but may not be processed correctly by the server
   - Google Apps Script handles form data differently than standard servers
   - Parameter extraction may be failing on the server side

4. **Debugging Challenges**
   - Limited visibility into what's happening on the server
   - No comprehensive logging to trace request flow
   - Browser hides actual response data due to CORS

## Solutions Implemented

1. **Enhanced Google Apps Script (`google_apps_script_fixed.js`)**
   - Added comprehensive logging to a dedicated "Debug Logs" sheet
   - Improved error handling and reporting
   - Added support for multiple data formats (FormData and JSON)
   - Implemented better sheet management with formatting

2. **Test Tools (`test_submission.html`)**
   - Created a dedicated testing page to isolate form submission issues
   - Allows testing different request modes (no-cors, cors)
   - Tests GET and POST methods with different data formats
   - Provides detailed client-side logging

3. **Troubleshooting Guide (`sheets_integration_troubleshooting.md`)**
   - Comprehensive guide for diagnosing and fixing common issues
   - Step-by-step debugging procedures
   - Explanation of CORS issues and workarounds
   - Common gotchas and solutions

## Deployment Instructions

For Google Apps Script:
1. Create a new Google Apps Script project at https://script.google.com/
2. Copy the code from `google_apps_script_fixed.js` into the script editor
3. Replace the `SPREADSHEET_ID` with your actual Google Sheet ID
4. Deploy as a web app:
   - Execute as: "Me" (your account)
   - Who has access: "Anyone, even anonymous"
5. Copy the web app URL for use in the website

For the Website:
1. Update the default Google Sheets URL in `js/init-sheets.js`
2. Make sure all forms use the correct form type identifiers
3. Test form submissions with the provided test tools
4. Check the Debug Logs sheet for any errors

## Form Types Used

| Form | Form Type Identifier |
|------|---------------------|
| Newsletter Modal | `newsletter_modal` |
| Footer Subscription | `newsletter_footer` |
| Contact Form | `contact_form` |
| Waitlist | `contact_waitlist` |
| Test Submissions | `test` |

## Debugging Tips

1. **Test the Google Apps Script URL directly**
   - Visit the URL in your browser - you should get a JSON response
   - This confirms the script is deployed and accessible

2. **Check Debug Logs**
   - After submitting a form, check the "Debug Logs" sheet
   - Look for error messages or unexpected data format issues

3. **Use Browser DevTools**
   - Monitor the Network tab when submitting forms
   - Check for any JavaScript errors in the Console tab

4. **Test with minimum code**
   - Use the `test_submission.html` tool to isolate form issues
   - Try both FormData and JSON submissions

## Common Pitfalls

1. **Redeployment Required**
   - Every time you change the Google Apps Script, you must create a NEW deployment
   - Simply saving the script is not enough - a new version must be deployed

2. **New Deployment = New URL**
   - Each new deployment gets a different URL
   - Update the URL in localStorage or in the code when redeploying

3. **CORS Mode Limitations**
   - When using `mode: 'no-cors'`, you cannot access the response
   - Successful submission appears the same as failed submission in code

4. **Google Sheet Access**
   - Make sure your Google account has edit access to the spreadsheet
   - The spreadsheet must exist before the script tries to use it

## Support

For ongoing issues, consider:
1. Checking Google Apps Script quotas and limitations
2. Reviewing execution logs in the Apps Script editor
3. Implementing a fallback server-side solution (like the PHP option)

# HyperMind 表单提交系统说明

这个文档解释了 HyperMind AI 网站上的表单提交系统如何工作，特别是对于中国用户的特殊处理。

## 表单提交系统架构

HyperMind AI 网站使用多层提交系统来确保表单数据（如联系表单、通讯订阅和等待列表注册）能够被可靠地收集：

1. **主要方法**：Google Sheets 集成
   - 使用 Google Apps Script Web 应用提供的 API 端点
   - 数据直接提交到指定的 Google 电子表格

2. **备用方法 1**：PHP 后端
   - 当 Google Sheets 不可用时自动切换
   - 数据存储在 MySQL 数据库中

3. **备用方法 2**：文件存储
   - 当数据库连接失败时使用
   - 数据以 JSON 格式保存在服务器文件中

## 针对中国用户的优化

我们已经对系统进行了特别优化，以解决中国大陆用户访问 Google 服务受限的问题：

### 自动检测中国用户

系统会通过以下方式自动检测可能来自中国的用户：

1. 浏览器语言设置为 `zh-CN` 或 `zh`
2. 时区为 `Asia/Shanghai`, `Asia/Chongqing`, `Asia/Harbin` 或 `Asia/Urumqi`

### 提交逻辑调整

对于检测到的中国用户：

1. **直接使用 PHP 后端**：系统会跳过 Google Sheets 提交尝试，直接使用 PHP 后端
2. **多重备份**：如果 PHP/数据库失败，会自动切换到文件存储方式
3. **失败通知**：如果所有方法都失败，会建议用户直接通过电子邮件联系

### 技术原理

```javascript
// 示例：检测可能来自中国的用户
const isLikelyFromChina = function() {
    // 检查浏览器语言
    const userLang = navigator.language || navigator.userLanguage;
    const isChinaLang = userLang.startsWith('zh-CN') || userLang === 'zh';
    
    // 检查时区
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const isChinaTZ = timezone.includes('Asia/Shanghai') || 
                      timezone.includes('Asia/Chongqing') || 
                      timezone.includes('Asia/Harbin') || 
                      timezone.includes('Asia/Urumqi');
    
    return isChinaLang || isChinaTZ;
};
```

## 管理员指南

作为网站管理员，您可以：

1. **查看所有提交**：
   - 通过 Google Sheets 查看在线提交
   - 通过管理员面板查看数据库中的提交
   - 检查服务器上的 `data/form_submissions.json` 文件获取备份提交

2. **合并数据**：
   - 我们提供了一个脚本来将文件存储的数据导入到数据库或 Google Sheets
   - 使用 `php/import_from_file.php` 来导入文件数据

## 潜在问题和解决方案

1. **Google 服务完全不可用**：
   - 系统会自动使用 PHP 后端和文件存储
   - 定期检查服务器上的备份文件

2. **表单提交失败**：
   - 检查服务器错误日志
   - 确保 PHP 和数据库配置正确
   - 验证 `data` 目录存在并可写入

## 联系支持

如有任何问题，请联系：
- 技术支持：support@hypermind-ai.com
- 管理员：admin@hypermind-ai.com 