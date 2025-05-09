# Google Sheets 集成设置指南

本指南将帮助您设置 Google Sheets 集成，以便将网站上的表单提交数据直接保存到您的 Google Sheets 中。

## 步骤概览

1. 创建一个 Google 表格
2. 设置 Google Apps Script
3. 部署脚本为网络应用
4. 将 Apps Script URL 添加到网站

## 详细步骤

### 1. 创建 Google 表格

1. 打开 [Google Sheets](https://sheets.google.com/) 并登录您的 Google 账户
2. 创建一个新表格
3. 此表格将用于存储所有的表单提交数据
4. 记下表格的 ID，它显示在浏览器地址栏中：`https://docs.google.com/spreadsheets/d/<spreadsheet_id>/edit`

### 2. 设置 Google Apps Script

1. 在您的 Google 表格中，点击 **扩展功能** > **Apps Script**
2. 这将打开 Google Apps Script 编辑器
3. 删除编辑器中的所有默认代码
4. 复制 `google_apps_script.js` 文件中的全部代码并粘贴到编辑器中
5. 在代码中找到 `SPREADSHEET_ID` 常量，并将其值替换为您在步骤 1 中创建的 Google 表格 ID：

```javascript
// Spreadsheet ID - Replace with your own Google Sheet ID
const SPREADSHEET_ID = "YOUR_SPREADSHEET_ID_HERE";
```

6. 点击 **保存** 按钮并为项目命名（例如："HyperMind 表单数据收集器"）

### 3. 部署脚本为网络应用

1. 在 Apps Script 编辑器中，点击 **部署** > **新部署**
2. 选择 **Web 应用** 作为部署类型
3. 设置以下选项：
   - 执行身份：**我自己** (您的 Google 账户)
   - 访问权限：**任何人** (匿名用户)
4. 点击 **部署** 按钮
5. 系统会要求您授权应用程序。点击 **授权访问** 按钮并按照提示进行授权
6. 部署完成后，您将获得一个 Web 应用 URL。**复制并保存这个 URL**，它看起来像：`https://script.google.com/macros/s/XXXXXXXX/exec`

### 4. 将 Apps Script URL 添加到网站

有两种方法可以将 Google Sheets URL 添加到网站：

#### 方法 1：使用测试页面

1. 打开 `js_direct_sheets.html` 页面
2. 在 "Google Apps Script URL" 字段中粘贴您的 Web 应用 URL
3. 提交测试表单以确认一切正常工作

#### 方法 2：使用管理员快捷键

1. 在任何网站页面上按下 `Ctrl+Shift+G` 组合键
2. 在弹出的提示框中粘贴您的 Web 应用 URL
3. 点击确定保存 URL

## 验证设置

设置完成后，您可以测试集成是否正常工作：

1. 打开网站的联系页面并提交表单
2. 检查您的 Google 表格，确认数据已添加到相应的表单类型表格中

## 表单类型

此集成支持以下表单类型，数据将保存到相应的表格中：

1. **Contact Form Submissions** - 联系表单提交
2. **Newsletter Subscribers** - 新闻通讯订阅
3. **Waitlist Signups** - 等待名单注册
4. **Other Submissions** - 其他类型提交

## 故障排除

如果数据未能正确保存到 Google 表格中：

1. 确保脚本 URL 正确无误
2. 检查 Google Apps Script 授权是否完成
3. 确保您的 Google 表格未设置额外的访问限制
4. 尝试使用 `js_direct_sheets.html` 页面提交测试表单
5. 查看浏览器控制台是否有错误消息

## 安全注意事项

- 这种集成方法使用 `no-cors` 模式发送请求，这意味着我们无法获取详细的错误信息
- 网站上的所有表单会自动尝试将数据发送到配置的 Google 表格
- 如果您需要更改 Google 表格 ID 或应用其他修改，请编辑并重新部署 Google Apps Script 