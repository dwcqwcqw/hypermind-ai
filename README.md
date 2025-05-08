# HyperMind AI Website

这是一个基于Bootstrap框架复刻的[Strella.io](https://www.strella.io/)网站。它使用纯HTML, CSS和JavaScript实现，没有使用任何后端技术。

## 网站结构

- `index.html` - 主页面
- `css/styles.css` - 自定义样式
- `js/main.js` - 交互功能
- `images/` - 图像资源目录
  - `hypermind-logo.svg` - 网站标志
  - `hero-image.png` - 英雄区域图像
  - `interview-demo.png` - 面试演示图像
  - `case-study-1.png` - 案例研究图像1
  - `case-study-2.png` - 案例研究图像2
  - `case-study-3.png` - 案例研究图像3
  - `feature-synthesis.png` - 功能图像：实时分析
  - `feature-query.png` - 功能图像：查询洞察

## 技术栈

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome 图标
- Google Fonts (Inter)

## 如何运行

由于这是一个纯前端项目，你可以通过以下方法直接在浏览器中查看：

1. 使用任何本地服务器（如Live Server，http-server等）
2. 直接在浏览器中打开index.html文件

### 使用HTTP服务器运行（推荐）

```bash
# 如果你已安装Node.js，可以使用http-server
npm install -g http-server
cd strella-clone
http-server .

# 然后在浏览器中访问http://localhost:8080
```

或者使用Python内置的HTTP服务器：

```bash
# Python 3
cd strella-clone
python -m http.server

# 然后在浏览器中访问http://localhost:8000
```

## 功能

- 响应式设计，适配所有屏幕尺寸
- 平滑滚动和动画效果
- 交互式表单
- 模态对话框
- 在滚动时显示的动画元素
- 移动设备友好的导航

## 定制

你可以通过编辑以下文件来自定义网站：

- `css/styles.css` - 修改颜色、间距和其他样式
- `js/main.js` - 添加更多交互功能
- `index.html` - 更新内容和结构

## 颜色方案

- 主色：`#6366f1`（靛蓝色）
- 次要色：`#06b6d4`（青色）
- 强调色：`#ec4899`（粉色）
- 成功色：`#10b981`（绿色）
- 警告色：`#f59e0b`（橙色）
- 信息色：`#3b82f6`（蓝色）

## 许可

仅供学习和参考。不得用于商业目的。 