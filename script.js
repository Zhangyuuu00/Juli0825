// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initPortfolio();
    initAIChat();
    initCustomCursor();
    initSmoothScrolling();
    initAnimations();
    initHeroCarousel();
});

// 导航功能
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 滚动时导航栏样式变化
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 汉堡菜单切换
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // 导航链接点击
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // 使用更快的滚动方式
                const targetPosition = targetSection.offsetTop - 80; // 减去导航栏高度
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'auto' // 使用即时滚动而不是平滑滚动
                });
            }

            // 移动端关闭菜单
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // 当前页面导航高亮
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// 作品集功能
function initPortfolio() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    const modalContent = document.querySelector('.modal-content');
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    // 分类筛选功能
    function filterPortfolio(category) {
        portfolioItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.6s ease forwards';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    // 分类按钮事件监听
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有按钮的active状态
            categoryBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮的active状态
            btn.classList.add('active');
            
            // 获取分类并筛选
            const category = btn.getAttribute('data-category');
            filterPortfolio(category);
        });
    });

    // 项目数据
    const projects = {
        project1: {
            title: '文化中心设计',
            type: '文化建筑 · 概念设计',
            location: '北京',
            date: '2024',
            role: '主创设计',
            description: '这是一个融合传统与现代的文化中心设计项目。设计灵感来源于中国传统建筑的空间序列和现代建筑的开放性，通过创新的空间组织和材料运用，创造了一个既具有文化底蕴又充满现代感的公共空间。',
            software: 'Rhino, Grasshopper, AutoCAD, Lumion',
            images: [
                'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop'
            ]
        },
        project2: {
            title: '现代住宅',
            type: '住宅设计 · 可持续建筑',
            location: '上海',
            date: '2023',
            role: '概念发展',
            description: '这个现代住宅项目注重可持续性和居住体验的平衡。通过被动式设计策略、绿色建材的选择和智能系统的集成，创造了一个既环保又舒适的居住环境。',
            software: 'SketchUp, AutoCAD, Lumion, Photoshop',
            images: [
                'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop'
            ]
        },
        project3: {
            title: '城市更新方案',
            type: '城市规划 · 社区设计',
            location: '深圳',
            date: '2023',
            role: '总体规划',
            description: '这是一个城市更新项目，旨在通过空间重构和功能重组，激活老城区的活力。设计注重历史文脉的延续和现代生活需求的满足，创造了一个充满活力的社区空间。',
            software: 'Rhino, Grasshopper, AutoCAD, Illustrator',
            images: [
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop'
            ]
        },
        project4: {
            title: '博物馆设计',
            type: '文化建筑 · 空间叙事',
            location: '成都',
            date: '2024',
            role: '主创设计',
            description: '博物馆设计以"空间叙事"为核心理念，通过建筑空间的序列组织和光影设计，为参观者创造沉浸式的文化体验。建筑形态呼应了当地的地域特色和文化内涵。',
            software: 'Rhino, Grasshopper, AutoCAD, Lumion, Photoshop',
            images: [
                'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop'
            ]
        },
        project5: {
            title: '商业综合体',
            type: '商业建筑 · 功能整合',
            location: '广州',
            date: '2023',
            role: '功能规划',
            description: '商业综合体项目注重功能的有机整合和空间的灵活运用。通过创新的空间组织和流线设计，创造了一个既满足商业需求又具有城市公共空间价值的建筑综合体。',
            software: 'SketchUp, AutoCAD, Lumion, Photoshop',
            images: [
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop'
            ]
        },
        project6: {
            title: '校园规划',
            type: '建筑与设计 · 教育建筑',
            location: '杭州',
            date: '2024',
            role: '总体规划',
            description: '校园规划项目以"学习社区"为理念，通过空间的有机组织和环境的精心营造，创造了一个促进学习、交流和创新的校园环境。设计注重可持续性和人文关怀。',
            software: 'Rhino, AutoCAD, Lumion, Illustrator',
            images: [
                'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop'
            ]
        },
        
        // 家具与产品设计项目
        project7: {
            title: '现代家具设计',
            type: '家具与产品设计 · 现代家具',
            location: '上海',
            date: '2024',
            role: '产品设计',
            description: '现代家具设计项目注重功能性与美学的和谐统一。通过人体工程学的研究和材料特性的探索，创造了一系列既实用又美观的家具产品。',
            software: 'Rhino, Keyshot, AutoCAD, Illustrator',
            images: [
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop'
            ]
        },
        
        project8: {
            title: '智能产品设计',
            type: '家具与产品设计 · 智能产品',
            location: '深圳',
            date: '2024',
            role: '产品设计',
            description: '智能产品设计项目探索科技与人文的完美融合。通过用户研究和技术创新，设计了一系列既智能又人性化的产品，提升用户的生活品质。',
            software: 'Figma, Sketch, Principle, After Effects',
            images: [
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
            ]
        },
        
        project9: {
            title: '可持续家具',
            type: '家具与产品设计 · 环保家具',
            location: '杭州',
            date: '2023',
            role: '产品设计',
            description: '可持续家具项目强调环保材料与创新工艺的结合。通过材料研究和工艺创新，创造了一系列既环保又美观的家具产品，体现了可持续发展的设计理念。',
            software: 'Rhino, Keyshot, AutoCAD, Photoshop',
            images: [
                'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
            ]
        }
    };

    // 点击作品集项目
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project');
            const project = projects[projectId];
            
            if (project) {
                openProjectModal(project);
            }
        });
    });

    // 关闭模态框
    closeBtn.addEventListener('click', closeProjectModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });

    function openProjectModal(project) {
        // 填充项目信息
        document.getElementById('projectTitle').textContent = project.title;
        document.getElementById('projectType').textContent = project.type;
        document.getElementById('projectLocation').textContent = project.location;
        document.getElementById('projectDate').textContent = project.date;
        document.getElementById('projectRole').textContent = project.role;
        document.getElementById('projectDescription').textContent = project.description;
        document.getElementById('projectSoftware').textContent = project.software;

        // 设置主图片
        const mainImage = document.getElementById('mainImage');
        mainImage.src = project.images[0];
        mainImage.alt = project.title;

        // 生成缩略图
        const thumbnailsContainer = document.getElementById('galleryThumbnails');
        thumbnailsContainer.innerHTML = '';
        
        project.images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `${project.title} - 图片${index + 1}`;
            thumbnail.addEventListener('click', () => {
                mainImage.src = image;
                // 高亮选中的缩略图
                thumbnailsContainer.querySelectorAll('img').forEach(img => img.classList.remove('active'));
                thumbnail.classList.add('active');
            });
            thumbnailsContainer.appendChild(thumbnail);
        });

        // 显示模态框
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// AI对话功能
function initAIChat() {
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');
    const chatSidebar = document.getElementById('chatSidebar');
    const chatOverlay = document.getElementById('chatOverlay');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const historyToggle = document.getElementById('historyToggle');
    const historyList = document.getElementById('historyList');
    const searchInput = document.getElementById('searchInput');
    const clearHistory = document.getElementById('clearHistory');
    const newChat = document.getElementById('newChat');
    
    let chatHistory = [];
    let currentConversation = [];
    let conversations = [];
    
    // 从localStorage加载历史记录
    function loadHistory() {
        const saved = localStorage.getItem('aiChatHistory');
        if (saved) {
            conversations = JSON.parse(saved);
            renderHistoryList();
        }
    }
    
    // 保存历史记录到localStorage
    function saveHistory() {
        localStorage.setItem('aiChatHistory', JSON.stringify(conversations));
    }
    
    // 渲染历史记录列表
    function renderHistoryList() {
        historyList.innerHTML = '';
        
        conversations.forEach((conversation, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.dataset.index = index;
            
            const title = document.createElement('div');
            title.className = 'history-item-title';
            title.textContent = conversation.title || '对话 ' + (index + 1);
            
            const preview = document.createElement('div');
            preview.className = 'history-item-preview';
            preview.textContent = conversation.messages[0]?.content || '无内容';
            
            const time = document.createElement('div');
            time.className = 'history-item-time';
            time.textContent = formatTime(conversation.timestamp);
            
            historyItem.appendChild(title);
            historyItem.appendChild(preview);
            historyItem.appendChild(time);
            
            historyItem.addEventListener('click', () => loadConversation(index));
            historyList.appendChild(historyItem);
        });
    }
    
    // 格式化时间
    function formatTime(timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        if (diff < 60000) return '刚刚';
        if (diff < 3600000) return Math.floor(diff / 60000) + '分钟前';
        if (diff < 86400000) return Math.floor(diff / 3600000) + '小时前';
        return date.toLocaleDateString();
    }
    
    // 加载对话
    function loadConversation(index) {
        const conversation = conversations[index];
        if (conversation) {
            currentConversation = [...conversation.messages];
            chatMessages.innerHTML = '';
            
            conversation.messages.forEach(message => {
                addMessage(message.content, message.type === 'ai', false);
            });
            
            // 更新历史记录项的激活状态
            document.querySelectorAll('.history-item').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelector(`[data-index="${index}"]`).classList.add('active');
        }
    }
    
    // 开始新对话
    function startNewChat() {
        currentConversation = [];
        chatMessages.innerHTML = '';
        
        // 添加欢迎消息
        addMessage("你好！我是AI设计师助手，很高兴为你介绍Juli的作品和理念。你可以问我任何关于建筑设计、作品集或者设计师背景的问题。", true, false);
        
        // 清除历史记录项的激活状态
        document.querySelectorAll('.history-item').forEach(item => {
            item.classList.remove('active');
        });
    }
    
    // 搜索历史记录
    function searchHistory(query) {
        const filtered = conversations.filter(conversation => 
            conversation.messages.some(message => 
                message.content.toLowerCase().includes(query.toLowerCase())
            )
        );
        
        renderFilteredHistory(filtered);
    }
    
    // 渲染过滤后的历史记录
    function renderFilteredHistory(filteredConversations) {
        historyList.innerHTML = '';
        
        filteredConversations.forEach((conversation, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.dataset.index = conversations.indexOf(conversation);
            
            const title = document.createElement('div');
            title.className = 'history-item-title';
            title.textContent = conversation.title || '对话 ' + (conversations.indexOf(conversation) + 1);
            
            const preview = document.createElement('div');
            preview.className = 'history-item-preview';
            preview.textContent = conversation.messages[0]?.content || '无内容';
            
            const time = document.createElement('div');
            time.className = 'history-item-time';
            time.textContent = formatTime(conversation.timestamp);
            
            historyItem.appendChild(title);
            historyItem.appendChild(preview);
            historyItem.appendChild(time);
            
            historyItem.addEventListener('click', () => loadConversation(conversations.indexOf(conversation)));
            historyList.appendChild(historyItem);
        });
    }
    
    // 高亮显示最新的对话
    function highlightLatestConversation() {
        // 移除所有高亮
        document.querySelectorAll('.history-item').forEach(item => {
            item.classList.remove('active', 'latest');
        });
        
        // 高亮最新的对话
        const latestItem = document.querySelector('.history-item[data-index="0"]');
        if (latestItem) {
            latestItem.classList.add('latest');
            // 滚动到最新对话
            latestItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
    
    // 实时更新当前对话的预览
    function updateCurrentConversationPreview() {
        if (currentConversation.length > 0) {
            // 查找当前对话在历史记录中的位置
            const currentIndex = conversations.findIndex(conv => 
                conv.messages.length === currentConversation.length &&
                conv.messages.every((msg, i) => 
                    msg.content === currentConversation[i].content &&
                    msg.type === currentConversation[i].type
                )
            );
            
            if (currentIndex !== -1) {
                // 更新现有对话的预览
                const historyItem = document.querySelector(`[data-index="${currentIndex}"]`);
                if (historyItem) {
                    const preview = historyItem.querySelector('.history-item-preview');
                    if (preview) {
                        preview.textContent = currentConversation[currentConversation.length - 1].content;
                    }
                }
            } else {
                // 创建新的当前对话预览
                createCurrentConversationPreview();
            }
        }
    }
    
    // 创建当前对话的预览
    function createCurrentConversationPreview() {
        // 移除现有的当前对话预览
        const existingPreview = document.querySelector('.history-item.current-preview');
        if (existingPreview) {
            existingPreview.remove();
        }
        
        if (currentConversation.length > 0) {
            const previewItem = document.createElement('div');
            previewItem.className = 'history-item current-preview';
            
            const title = document.createElement('div');
            title.className = 'history-item-title';
            title.textContent = '当前对话 (进行中)';
            
            const preview = document.createElement('div');
            preview.className = 'history-item-preview';
            preview.textContent = currentConversation[currentConversation.length - 1].content;
            
            const time = document.createElement('div');
            time.className = 'history-item-time';
            time.textContent = '刚刚';
            
            previewItem.appendChild(title);
            previewItem.appendChild(preview);
            previewItem.appendChild(time);
            
            // 将当前对话预览插入到列表顶部
            historyList.insertBefore(previewItem, historyList.firstChild);
        }
    }
    
    // 实时更新历史记录列表
    function updateHistoryListInRealTime() {
        // 更新当前对话预览
        updateCurrentConversationPreview();
        
        // 如果有新的对话完成，更新历史记录
        if (currentConversation.length > 0 && conversations.length > 0) {
            const latestConversation = conversations[0];
            if (latestConversation && latestConversation.messages.length !== currentConversation.length) {
                // 更新最新对话的预览
                const latestItem = document.querySelector('.history-item[data-index="0"]');
                if (latestItem) {
                    const preview = latestItem.querySelector('.history-item-preview');
                    if (preview) {
                        preview.textContent = currentConversation[currentConversation.length - 1].content;
                    }
                }
            }
        }
    }
    
    function addMessage(content, isAI = false, saveToHistory = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isAI ? 'ai-message' : 'user-message'}`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = isAI ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        // 根据内容长度添加相应的CSS类
        const contentLength = content.length;
        const lineCount = content.split('\n').length;
        
        if (contentLength <= 20) {
            messageContent.classList.add('ultra-short', 'single-line');
        } else if (contentLength <= 50) {
            messageContent.classList.add('short', 'single-line');
        } else if (contentLength <= 200) {
            messageContent.classList.add('medium');
            if (lineCount > 1) {
                messageContent.classList.add('multi-line');
            } else {
                messageContent.classList.add('single-line');
            }
        } else if (contentLength <= 500) {
            messageContent.classList.add('long', 'multi-line');
        } else {
            messageContent.classList.add('very-long', 'multi-line');
        }
        
        messageContent.innerHTML = `<p>${content}</p>`;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        
        // 滚动到底部
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // 保存到当前对话
        if (saveToHistory) {
            currentConversation.push({
                type: isAI ? 'ai' : 'user',
                content: content,
                timestamp: new Date()
            });
            
            // 实时更新当前对话的预览（如果侧边栏是打开的）
            if (chatSidebar.classList.contains('show')) {
                updateCurrentConversationPreview();
            }
            
            // 如果侧边栏是打开的，实时更新历史记录列表
            if (chatSidebar.classList.contains('show') && currentConversation.length > 1) {
                // 延迟一点时间更新，确保消息完全显示
                setTimeout(() => {
                    updateHistoryListInRealTime();
                }, 100);
            }
        }
    }
    
    function getAIResponse(userMessage) {
        // 模拟AI响应
        const responses = [
            "这是一个很有趣的问题！在建筑设计中，空间感是非常重要的概念...",
            "根据我的了解，Juli的设计理念强调可持续性和人文关怀...",
            "从作品集来看，这个项目展现了很好的参数化设计能力...",
            "建筑不仅仅是功能的容器，更是情感和记忆的载体...",
            "在可持续建筑设计方面，材料选择和能源效率是关键考虑因素..."
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    function handleSendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, false);
            chatInput.value = '';
            
            // 模拟AI思考时间
            setTimeout(() => {
                const aiResponse = getAIResponse(message);
                addMessage(aiResponse, true);
                
                // 保存对话到历史记录
                if (currentConversation.length > 0) {
                    const conversation = {
                        title: message.substring(0, 30) + (message.length > 30 ? '...' : ''),
                        messages: [...currentConversation],
                        timestamp: new Date()
                    };
                    
                    conversations.unshift(conversation);
                    if (conversations.length > 50) {
                        conversations = conversations.slice(0, 50);
                    }
                    
                    saveHistory();
                    // 实时更新历史记录列表
                    renderHistoryList();
                    
                    // 如果侧边栏是打开的，高亮显示最新的对话
                    if (chatSidebar.classList.contains('show')) {
                        highlightLatestConversation();
                    }
                }
            }, 1000);
        }
    }
    
    // 事件监听器
    sendButton.addEventListener('click', handleSendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
    
    // 侧边栏切换
    sidebarToggle.addEventListener('click', () => {
        chatSidebar.classList.remove('show');
        chatOverlay.classList.remove('show');
    });
    
    historyToggle.addEventListener('click', () => {
        console.log('历史记录按钮被点击');
        console.log('侧边栏元素:', chatSidebar);
        console.log('侧边栏当前样式:', window.getComputedStyle(chatSidebar).transform);
        
        const isVisible = chatSidebar.classList.contains('show');
        if (isVisible) {
            chatSidebar.classList.remove('show');
            chatOverlay.classList.remove('show');
        } else {
            chatSidebar.classList.add('show');
            chatOverlay.classList.add('show');
            
            // 侧边栏打开时，立即更新历史记录并显示当前对话预览
            renderHistoryList();
            if (currentConversation.length > 0) {
                createCurrentConversationPreview();
            }
        }
        
        console.log('侧边栏状态:', chatSidebar.classList.contains('show'));
        console.log('遮罩层状态:', chatOverlay.classList.contains('show'));
        console.log('侧边栏新样式:', window.getComputedStyle(chatSidebar).transform);
    });
    
    // 点击遮罩层关闭侧边栏
    chatOverlay.addEventListener('click', () => {
        chatSidebar.classList.remove('show');
        chatOverlay.classList.remove('show');
    });
    
    // 搜索功能
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query) {
            searchHistory(query);
        } else {
            renderHistoryList();
        }
    });
    
    // 清空历史记录
    clearHistory.addEventListener('click', () => {
        if (confirm('确定要清空所有对话历史吗？此操作不可恢复。')) {
            conversations = [];
            currentConversation = [];
            saveHistory();
            renderHistoryList();
            chatMessages.innerHTML = '';
            addMessage("你好！我是AI设计师助手，很高兴为你介绍Juli的作品和理念。你可以问我任何关于建筑设计、作品集或者设计师背景的问题。", true, false);
        }
    });
    
    // 新对话
    newChat.addEventListener('click', startNewChat);
    
    // 初始化
    loadHistory();
    startNewChat();
}

// 自定义光标
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // 光标跟随鼠标
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 悬停效果
    const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .nav-link');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

    // 点击效果
    document.addEventListener('click', () => {
        cursor.style.transform = 'scale(0.8)';
        setTimeout(() => {
            cursor.style.transform = '';
        }, 100);
    });
}

// 平滑滚动
function initSmoothScrolling() {
    // 快速滚动到指定元素
    function smoothScrollTo(element, duration = 100) { // 减少到300ms
        const targetPosition = element.offsetTop - 80; // 考虑导航栏高度
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // 为所有锚点链接添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScrollTo(target);
            }
        });
    });
}

// 动画效果
function initAnimations() {
    // 观察器选项
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // 创建观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.portfolio-item, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 视差滚动效果
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// 响应式导航菜单
function initResponsiveMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

// 图片懒加载
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 窗口大小改变时的处理
window.addEventListener('resize', debounce(() => {
    // 重新初始化响应式功能
    initResponsiveMenu();
}, 250));

// 页面可见性变化时的处理
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // 页面隐藏时的处理
        document.title = '建筑设计作品集 | 回来看看吧';
    } else {
        // 页面显示时的处理
        document.title = '建筑设计作品集 | Portfolio';
    }
});

// 首页轮播图功能
function initHeroCarousel() {
    const carousel = document.getElementById('heroCarousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentIndex = 0;
    let autoplayInterval;
    
    // 切换到指定幻灯片
    function goToSlide(index) {
        // 移除当前活动状态
        slides[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        
        // 更新索引
        currentIndex = index;
        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        
        // 激活新的幻灯片
        slides[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }
    
    // 下一张幻灯片
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    // 上一张幻灯片
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // 自动播放
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000); // 5秒切换一次
    }
    
    // 停止自动播放
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }
    
    // 事件监听器
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoplay();
            startAutoplay(); // 重新开始自动播放
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoplay();
            startAutoplay(); // 重新开始自动播放
        });
    }
    
    // 指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            stopAutoplay();
            startAutoplay(); // 重新开始自动播放
        });
    });
    
    // 鼠标悬停时停止自动播放
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // 触摸事件支持
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 向左滑动，下一张
                nextSlide();
            } else {
                // 向右滑动，上一张
                prevSlide();
            }
            stopAutoplay();
            startAutoplay();
        }
    }
    
    // 键盘事件支持
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoplay();
            startAutoplay();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoplay();
            startAutoplay();
        }
    });
    
    // 开始自动播放
    startAutoplay();
}
