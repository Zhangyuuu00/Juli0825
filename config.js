// 网站配置文件
// 修改这个文件来快速自定义你的网站

const SITE_CONFIG = {
    // 个人信息
    personal: {
        name: "Your Name", // 你的姓名
        title: "建筑设计师 | 探索空间与形式的可能性", // 职业标题
        email: "your.email@example.com", // 邮箱
        wechat: "your_wechat", // 微信号
        phone: "+86 138-0000-0000", // 电话号码
        location: "北京", // 所在城市
        education: "XX大学 建筑设计专业", // 教育背景
        graduationYear: "2024", // 毕业年份
        awards: [ // 获奖经历
            "XX建筑设计竞赛 一等奖",
            "XX大学优秀毕业生"
        ],
        skills: [ // 技能专长
            "Rhino, Grasshopper, AutoCAD",
            "SketchUp, Lumion, Photoshop"
        ]
    },

    // 作品集项目
    projects: [
        {
            id: "project1",
            title: "文化中心设计",
            type: "文化建筑 · 概念设计",
            location: "北京",
            date: "2024",
            role: "主创设计",
            description: "这是一个融合传统与现代的文化中心设计项目。设计灵感来源于中国传统建筑的空间序列和现代建筑的开放性，通过创新的空间组织和材料运用，创造了一个既具有文化底蕴又充满现代感的公共空间。",
            software: "Rhino, Grasshopper, AutoCAD, Lumion",
            coverImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
            ]
        },
        {
            id: "project2",
            title: "现代住宅",
            type: "住宅设计 · 可持续建筑",
            location: "上海",
            date: "2023",
            role: "概念发展",
            description: "这个现代住宅项目注重可持续性和居住体验的平衡。通过被动式设计策略、绿色建材的选择和智能系统的集成，创造了一个既环保又舒适的居住环境。",
            software: "SketchUp, AutoCAD, Lumion, Photoshop",
            coverImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop"
            ]
        },
        {
            id: "project3",
            title: "城市更新方案",
            type: "城市规划 · 社区设计",
            location: "深圳",
            date: "2023",
            role: "总体规划",
            description: "这是一个城市更新项目，旨在通过空间重构和功能重组，激活老城区的活力。设计注重历史文脉的延续和现代生活需求的满足，创造了一个充满活力的社区空间。",
            software: "Rhino, Grasshopper, AutoCAD, Illustrator",
            coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop"
            ]
        },
        {
            id: "project4",
            title: "博物馆设计",
            type: "文化建筑 · 空间叙事",
            location: "成都",
            date: "2024",
            role: "主创设计",
            description: "博物馆设计以"空间叙事"为核心理念，通过建筑空间的序列组织和光影设计，为参观者创造沉浸式的文化体验。建筑形态呼应了当地的地域特色和文化内涵。",
            software: "Rhino, Grasshopper, AutoCAD, Lumion, Photoshop",
            coverImage: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop"
            ]
        },
        {
            id: "project5",
            title: "商业综合体",
            type: "商业建筑 · 功能整合",
            location: "广州",
            date: "2023",
            role: "功能规划",
            description: "商业综合体项目注重功能的有机整合和空间的灵活运用。通过创新的空间组织和流线设计，创造了一个既满足商业需求又具有城市公共空间价值的建筑综合体。",
            software: "SketchUp, AutoCAD, Lumion, Photoshop",
            coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop"
            ]
        },
        {
            id: "project6",
            title: "校园规划",
            type: "教育建筑 · 总体规划",
            location: "杭州",
            date: "2024",
            role: "总体规划",
            description: "校园规划项目以"学习社区"为理念，通过空间的有机组织和环境的精心营造，创造了一个促进学习、交流和创新的校园环境。设计注重可持续性和人文关怀。",
            software: "Rhino, AutoCAD, Lumion, Illustrator",
            coverImage: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop",
            images: [
                "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
            ]
        }
    ],

    // AI对话回复配置
    aiResponses: {
        '你好': '你好！很高兴认识你。我是一位AI助手，专门为这位建筑设计师工作。我可以回答你关于建筑设计、作品集或者设计师背景的任何问题。',
        '设计理念': '这位设计师的设计理念非常独特，他相信建筑不仅仅是功能的容器，更是情感和记忆的载体。他注重可持续性、人文关怀和空间体验，通过参数化设计、材料创新和空间叙事来创造作品。',
        '作品集': '作品集包含了6个精选项目，涵盖文化建筑、住宅设计、城市规划、博物馆设计、商业综合体和校园规划等多个领域。每个项目都体现了设计师的创新思维和专业技能。',
        '技能': '设计师精通多种建筑设计软件，包括Rhino、Grasshopper、AutoCAD、SketchUp、Lumion和Photoshop等。同时具备手绘、模型制作等传统技能。',
        '教育背景': '设计师毕业于XX大学建筑设计专业，在校期间表现优秀，曾获得XX建筑设计竞赛一等奖和优秀毕业生等荣誉。',
        '联系方式': '你可以通过邮箱、微信或电话联系设计师。建议直接发送邮件，这是最直接有效的联系方式。',
        'default': '这是一个很有趣的问题！这位设计师非常注重空间体验和人文关怀，他的作品总是能够平衡功能性和美学价值。如果你有具体的问题，我很乐意为你详细解答。'
    },

    // 社交媒体链接
    social: {
        linkedin: "#",
        behance: "#",
        instagram: "#",
        weibo: "#"
    },

    // 网站设置
    site: {
        title: "建筑设计作品集 | Portfolio",
        description: "个人建筑设计作品集网站，展示设计理念和项目作品",
        keywords: "建筑设计,作品集,建筑设计师,空间设计,城市规划",
        author: "Your Name"
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
} else {
    window.SITE_CONFIG = SITE_CONFIG;
}

