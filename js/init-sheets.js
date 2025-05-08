/**
 * Google Sheets Integration Initialization
 * 自动设置Google Sheets URL并初始化集成
 */

(function() {
    // 在页面加载时自动设置Google Sheets URL
    document.addEventListener('DOMContentLoaded', function() {
        const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycby7tw9JVDun2etghO-uQnpGMYY9cjm5RZzcjmF4_Dx1i9evSysrPa38oMvN_8d4gSJK2A/exec';
        
        // 只有当localStorage中没有设置URL时才设置
        if (!localStorage.getItem('googleSheetsUrl')) {
            localStorage.setItem('googleSheetsUrl', googleSheetsUrl);
            console.log('Google Sheets URL initialized:', googleSheetsUrl);
        } else {
            console.log('Using existing Google Sheets URL:', localStorage.getItem('googleSheetsUrl'));
        }
        
        // 添加快捷键显示当前Google Sheets URL (Ctrl+Shift+I)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                const currentUrl = localStorage.getItem('googleSheetsUrl');
                alert('当前Google Sheets URL: ' + (currentUrl || '未设置'));
            }
        });
        
        // 重置URL的快捷键 (Ctrl+Shift+R)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.key === 'R') {
                if (confirm('确定要重置Google Sheets URL吗？')) {
                    localStorage.setItem('googleSheetsUrl', googleSheetsUrl);
                    alert('Google Sheets URL已重置为: ' + googleSheetsUrl);
                }
            }
        });
        
        // 添加自定义URL的快捷键 (Ctrl+Shift+G)
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && e.key === 'G') {
                const newUrl = prompt('请输入新的Google Sheets URL:', localStorage.getItem('googleSheetsUrl') || '');
                if (newUrl) {
                    localStorage.setItem('googleSheetsUrl', newUrl);
                    alert('Google Sheets URL已更新为: ' + newUrl);
                }
            }
        });
    });
})(); 