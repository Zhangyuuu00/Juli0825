# 建筑设计作品集网站

一个具有未来感、空间感和创意的个人建筑设计作品集网站，专为建筑设计师求职面试而设计。

## ✨ 特色功能

### 🎨 设计风格
- **未来感设计**：采用极简主义风格，大量留白，营造高级感
- **空间感体验**：通过视差滚动、微交互等效果创造沉浸式体验
- **创意交互**：自定义光标、悬停效果、平滑动画等微交互
- **响应式布局**：完美适配各种设备尺寸

### 🚀 核心功能
- **作品集展示**：瀑布流布局，点击查看详细项目信息
- **AI对话助手**：智能回答关于设计师和作品的问题
- **平滑导航**：固定导航栏，平滑滚动到各个章节
- **项目详情模态框**：全屏展示项目图片和信息
- **响应式设计**：移动端友好的汉堡菜单

## 🛠️ 技术栈

- **HTML5**：语义化标签，无障碍访问
- **CSS3**：现代CSS特性，动画和过渡效果
- **JavaScript ES6+**：模块化代码，现代浏览器API
- **响应式设计**：CSS Grid + Flexbox布局
- **性能优化**：懒加载、防抖、Intersection Observer

## 📁 文件结构

```
/
├── index.html          # 主页面文件
├── styles.css          # 样式文件
├── script.js           # JavaScript功能文件
└── README.md           # 说明文档
```

## 🚀 快速开始

1. **下载文件**：将所有文件下载到本地文件夹
2. **打开网站**：双击 `index.html` 文件在浏览器中打开
3. **本地服务器**（推荐）：使用Live Server等工具启动本地服务器

## 🎯 自定义指南

### 个人信息修改

#### 1. 修改姓名和标题
在 `index.html` 中搜索并替换：
```html
<!-- 导航栏Logo -->
<div class="nav-logo">
    <a href="#home">Your Name</a>
</div>

<!-- 首页标题 -->
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">建筑设计师 | 探索空间与形式的可能性</p>

<!-- 页脚版权 -->
<p>&copy; 2024 Your Name. Designed and Developed with ❤️</p>
```

#### 2. 修改联系信息
在 `index.html` 的联系方式部分：
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <a href="mailto:your.email@example.com">your.email@example.com</a>
</div>
<div class="contact-item">
    <i class="fab fa-weixin"></i>
    <span>WeChat: your_wechat</span>
</div>
<div class="contact-item">
    <i class="fas fa-mobile-alt"></i>
    <span>+86 138-0000-0000</span>
</div>
```

### 作品集项目修改

#### 1. 修改项目图片
在 `index.html` 中替换图片链接：
```html
<div class="portfolio-item" data-project="project1">
    <div class="portfolio-image">
        <img src="你的项目图片链接" alt="项目名称">
    </div>
    <!-- ... -->
</div>
```

#### 2. 修改项目信息
在 `script.js` 中的 `projects` 对象中修改：
```javascript
const projects = {
    project1: {
        title: '你的项目标题',
        type: '项目类型',
        location: '项目地点',
        date: '项目时间',
        role: '你的角色',
        description: '项目描述',
        software: '使用的软件',
        images: [
            '图片1链接',
            '图片2链接',
            '图片3链接'
        ]
    },
    // ... 其他项目
};
```

### 样式自定义

#### 1. 修改配色方案
在 `styles.css` 的 `:root` 部分：
```css
:root {
    --primary-white: #ffffff;
    --secondary-white: #fafafa;
    --accent-color: #8B7355; /* 主强调色 */
    --accent-hover: #A0522D; /* 悬停色 */
    /* ... 其他颜色变量 */
}
```

#### 2. 修改字体
在 `styles.css` 中：
```css
body {
    font-family: '你的字体', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

#### 3. 修改动画效果
在 `styles.css` 中调整过渡时间：
```css
:root {
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### AI对话功能自定义

在 `script.js` 中修改AI回复内容：
```javascript
const responses = {
    '你好': '你的自定义回复',
    '设计理念': '你的设计理念描述',
    // ... 添加更多关键词和回复
};
```

## 📱 响应式断点

- **桌面端**：1200px+
- **平板端**：768px - 1199px
- **移动端**：767px以下

## 🌟 性能优化特性

- **图片懒加载**：使用Intersection Observer API
- **防抖处理**：窗口大小改变时的性能优化
- **CSS动画**：使用transform和opacity实现硬件加速
- **平滑滚动**：原生scroll-behavior和自定义实现

## 🔧 浏览器兼容性

- **现代浏览器**：Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **移动浏览器**：iOS Safari 12+, Chrome Mobile 60+
- **不支持**：IE 11及以下版本

## 📝 使用建议

### 面试官体验优化
1. **加载速度**：确保图片文件大小适中，建议单张图片不超过2MB
2. **内容质量**：使用高质量的项目图片和专业的项目描述
3. **交互体验**：测试所有功能在不同设备上的表现

### SEO优化建议
1. **图片优化**：为所有图片添加有意义的alt属性
2. **标题优化**：使用描述性的页面标题
3. **内容结构**：使用语义化HTML标签

## 🚀 部署建议

### 静态托管服务
- **GitHub Pages**：免费，适合开源项目
- **Netlify**：免费，自动部署，CDN加速
- **Vercel**：免费，性能优秀，适合前端项目

### 自定义域名
1. 购买域名
2. 在托管服务中配置DNS
3. 更新网站中的相关链接

## 🤝 贡献与支持

如果你在使用过程中遇到问题或有改进建议，欢迎：

1. 提交Issue描述问题
2. 提交Pull Request贡献代码
3. 分享你的使用体验

## 📄 许可证

本项目采用MIT许可证，你可以自由使用、修改和分发。

## 🙏 致谢

- 感谢Unsplash提供的免费高质量图片
- 感谢Font Awesome提供的图标库
- 感谢Google Fonts提供的字体服务

---

**祝你求职顺利，设计事业蒸蒸日上！** 🎉
