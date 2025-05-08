// HyperMind Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips and popovers
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Initialize Custom Video Player
    initVideoPlayer();

    // Initialize Media Tabs
    initMediaTabs();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.8;
        
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerPoint) {
                element.classList.add('visible');
            }
        });
    }
    
    // Run once on load
    checkScroll();
    
    // Run on scroll
    window.addEventListener('scroll', checkScroll);

    // Toggle mobile menu
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target) && navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    }

    // Testimonial carousel setup
    initTestimonialCarousel();

    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Simulate form submission
                emailInput.value = '';
                showToast('Thanks for subscribing!');
                
                // In a real application, you would submit to backend here
                // submitFormToBackend(email);
            } else {
                showToast('Please enter a valid email address.', 'error');
            }
        });
    });

    // Show newsletter modal after 5 seconds
    setTimeout(() => {
        const hasSeenModal = sessionStorage.getItem('hasSeenModal');
        if (!hasSeenModal) {
            const newsletterModal = new bootstrap.Modal(document.getElementById('newsletterModal'));
            newsletterModal.show();
            sessionStorage.setItem('hasSeenModal', 'true');
        }
    }, 5000);

    // 垂直滚动面板的交互逻辑
    const panels = document.querySelectorAll('.scroll-panel');
    const verticalScrollSection = document.querySelector('.vertical-scroll-section');
    const htmlElement = document.documentElement;
    
    // 状态变量
    let isInScrollSection = false;
    let currentScrollPosition = 0;
    let panelHeight = 0;
    let sectionTop = 0;
    let sectionHeight = 0;
    let totalPanels = panels.length;
    let allPanelsViewed = false;
    
    // 初始化设置
    function initPanels() {
        if (!verticalScrollSection || !panels.length) return;
        
        // 获取滚动区域和面板尺寸
        panelHeight = window.innerHeight;
        sectionTop = verticalScrollSection.offsetTop;
        sectionHeight = panelHeight * totalPanels;
        
        // 设置滚动区域高度
        verticalScrollSection.style.height = `${sectionHeight}px`;
        
        // 初始化各个面板的位置
        panels.forEach((panel, index) => {
            panel.style.height = `${panelHeight}px`;
            panel.style.position = 'absolute';
            panel.style.top = `${index * panelHeight}px`;
            panel.style.transform = 'translateY(0)';
            panel.setAttribute('data-panel-index', index);
        });
    }
    
    // 处理滚动事件
    function handleScroll() {
        if (!verticalScrollSection || !panels.length) return;
        
        const scrollPosition = window.scrollY;
        currentScrollPosition = scrollPosition;
        
        // 检查是否在滚动区域内
        if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
            isInScrollSection = true;
            
            // 计算当前滚动的相对位置（相对于滚动区域顶部）
            const relativeScroll = scrollPosition - sectionTop;
            
            // 计算当前哪个面板是活跃的
            const activeIndex = Math.floor(relativeScroll / panelHeight);
            const nextIndex = activeIndex + 1;
            const scrollProgress = (relativeScroll % panelHeight) / panelHeight;
            
            // 更新面板位置
            panels.forEach((panel, index) => {
                if (index === activeIndex) {
                    // 当前活跃面板 - 向上滚动
                    const translateY = -scrollProgress * panelHeight;
                    panel.style.transform = `translateY(${translateY}px)`;
                    panel.style.zIndex = totalPanels;
                } else if (index === nextIndex && nextIndex < totalPanels) {
                    // 下一个面板 - 从下向上进入
                    const translateY = panelHeight - (scrollProgress * panelHeight);
                    panel.style.transform = `translateY(${translateY}px)`;
                    panel.style.zIndex = totalPanels - 1;
                } else if (index < activeIndex) {
                    // 已滚动过的面板
                    panel.style.transform = `translateY(-${panelHeight}px)`;
                    panel.style.zIndex = totalPanels - 2;
                } else if (index > nextIndex) {
                    // 尚未显示的面板
                    panel.style.transform = `translateY(${panelHeight}px)`;
                    panel.style.zIndex = totalPanels - 2;
                }
            });
            
            // 标记为已查看所有面板（如果已经滚动到最后）
            if (activeIndex >= totalPanels - 1) {
                allPanelsViewed = true;
            }
        } else {
            isInScrollSection = false;
        }
    }
    
    // 处理窗口大小变化
    function handleResize() {
        panelHeight = window.innerHeight;
        sectionTop = verticalScrollSection.offsetTop;
        sectionHeight = panelHeight * totalPanels;
        
        // 重新设置滚动区域高度
        verticalScrollSection.style.height = `${sectionHeight}px`;
        
        // 更新面板高度和位置
        panels.forEach((panel, index) => {
            panel.style.height = `${panelHeight}px`;
            panel.style.top = `${index * panelHeight}px`;
        });
        
        // 触发滚动处理函数来更新面板位置
        handleScroll();
    }
    
    // 初始化
    if (verticalScrollSection && panels.length) {
        // 初始化面板
        initPanels();
        
        // 监听滚动事件
        window.addEventListener('scroll', handleScroll);
        
        // 监听窗口大小变化
        window.addEventListener('resize', handleResize);
        
        // 初始运行一次以设置初始状态
        handleScroll();
    }

    // 继续按钮点击事件
    const continueButton = document.querySelector('.continue-button');
    if (continueButton) {
        continueButton.addEventListener('click', function(e) {
            // 允许用户点击继续按钮访问下一部分
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                e.preventDefault();
                // 平滑滚动到目标部分
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // How It Works section functionality
    const steps = document.querySelectorAll('.step');
    const imageContainers = document.querySelectorAll('.image-container');
    let activeStep = 1;
    let autoPlayInterval;

    // Initialize How It Works section
    function initHowItWorks() {
        if (!steps.length) return;
        
        // Add event listeners to all steps
        steps.forEach(step => {
            // Add hover functionality
            step.addEventListener('mouseenter', () => {
                const stepNumber = parseInt(step.getAttribute('data-step'));
                changeActiveStep(stepNumber);
                // Stop auto advance when user interacts
                clearInterval(autoPlayInterval);
            });
            
            // Resume auto advance when mouse leaves
            step.addEventListener('mouseleave', () => {
                startAutoAdvance();
            });
            
            // Add click functionality
            step.addEventListener('click', () => {
                const stepNumber = parseInt(step.getAttribute('data-step'));
                changeActiveStep(stepNumber);
                // Stop auto advance when user interacts
                clearInterval(autoPlayInterval);
                // Resume after a short delay
                setTimeout(startAutoAdvance, 5000);
            });
        });
        
        // Set first step as active
        changeActiveStep(1);
        
        // Start auto advancing
        startAutoAdvance();
    }
    
    // Change the active step
    function changeActiveStep(stepNumber) {
        activeStep = stepNumber;
        
        // Update steps UI
        steps.forEach(step => {
            const currentStep = parseInt(step.getAttribute('data-step'));
            if (currentStep === stepNumber) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
        
        // Update images UI
        imageContainers.forEach(container => {
            const currentStep = parseInt(container.getAttribute('data-step'));
            if (currentStep === stepNumber) {
                container.classList.add('active');
            } else {
                container.classList.remove('active');
            }
        });
    }
    
    // Start auto advancing through steps
    function startAutoAdvance() {
        // Clear any existing interval
        clearInterval(autoPlayInterval);
        
        // Set new interval
        autoPlayInterval = setInterval(() => {
            // Move to next step or back to first
            activeStep = activeStep < steps.length ? activeStep + 1 : 1;
            changeActiveStep(activeStep);
        }, 2000); // Change every 2 seconds
    }
    
    // Initialize the How It Works section when page loads
    initHowItWorks();

    // How It Works Interaction
    steps.forEach(step => {
        step.addEventListener('click', function() {
            // Remove active class from all steps
            steps.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked step
            this.classList.add('active');
            
            // Show corresponding image
            const stepNumber = this.getAttribute('data-step');
            
            // Hide all images
            imageContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            // Show the corresponding image
            document.querySelector(`.image-container[data-step="${stepNumber}"]`).classList.add('active');
        });
    });
    
    // Custom Video Player
    const video = document.getElementById('hero-video');
    const playButton = document.getElementById('play-button');
    const muteButton = document.getElementById('mute-button');
    const videoTime = document.getElementById('video-time');
    const videoProgress = document.getElementById('video-progress');
    const videoProgressFilled = document.getElementById('video-progress-filled');
    
    if (video) {
        // Auto play when the page loads (some browsers might block this)
        video.play().catch(e => console.log('Auto-play was prevented:', e));
        
        // Play/Pause button
        playButton.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                video.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
        
        // Mute/Unmute button
        muteButton.addEventListener('click', function() {
            video.muted = !video.muted;
            if (video.muted) {
                muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
            } else {
                muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
        });
        
        // Update progress bar and time
        video.addEventListener('timeupdate', function() {
            const percent = (video.currentTime / video.duration) * 100;
            videoProgressFilled.style.width = `${percent}%`;
            
            // Update time display
            const minutes = Math.floor(video.currentTime / 60);
            const seconds = Math.floor(video.currentTime % 60);
            const totalMinutes = Math.floor(video.duration / 60);
            const totalSeconds = Math.floor(video.duration % 60);
            
            videoTime.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds} / ${totalMinutes}:${totalSeconds < 10 ? '0' + totalSeconds : totalSeconds}`;
        });
        
        // Click on progress bar to seek
        videoProgress.addEventListener('click', function(e) {
            const pos = (e.pageX - this.offsetLeft) / this.offsetWidth;
            video.currentTime = pos * video.duration;
        });
    }
    
    // Media Tabs Interaction
    const mediaTabs = document.querySelectorAll('.media-tab');
    const mediaContents = document.querySelectorAll('.media-content');
    
    mediaTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const mediaType = this.getAttribute('data-media-type');
            
            // Remove active class from all tabs and content
            mediaTabs.forEach(t => t.classList.remove('active'));
            mediaContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to current tab and content
            this.classList.add('active');
            document.getElementById(`${mediaType}-content`).classList.add('active');
        });
    });

    // Initialize Testimonials Carousel
    initTestimonialsCarousel();

    console.log("所有模块初始化完成");
});

// Initialize testimonial carousel function
function initTestimonialCarousel() {
    // This would be implemented if using a carousel library
    // or custom carousel functionality
    console.log('Testimonial carousel initialized');
}

// Validate email format
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Show toast notification
function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.textContent = message;
    
    // Append to body
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Custom CSS for toast notifications
document.addEventListener('DOMContentLoaded', function() {
    // Create and append toast CSS
    const style = document.createElement('style');
    style.textContent = `
        .toast-notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 20px;
            background-color: rgba(16, 185, 129, 0.9);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 9999;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s, transform 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-weight: 500;
        }
        
        .toast-notification.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .toast-notification.error {
            background-color: rgba(239, 68, 68, 0.9);
        }
        
        .toast-notification.info {
            background-color: rgba(59, 130, 246, 0.9);
        }
        
        .marker.pulse {
            animation: markerPulse 1s infinite;
        }
        
        @keyframes markerPulse {
            0% {
                box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.7);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Custom Video Player Functionality
function initVideoPlayer() {
    const videoPlayer = document.getElementById('hero-video');
    if (!videoPlayer) return; // Exit if video element doesn't exist
    
    const playButton = document.getElementById('play-button');
    const muteButton = document.getElementById('mute-button');
    const progress = document.getElementById('video-progress');
    const progressFilled = document.getElementById('video-progress-filled');
    const timeDisplay = document.getElementById('video-time');
    
    // Start the video automatically but muted
    videoPlayer.autoplay = true;
    videoPlayer.muted = true;
    videoPlayer.loop = true; // Set to loop by default
    videoPlayer.play().catch(error => {
        console.log('Auto-play was prevented:', error);
        // Update UI to show paused state
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    });
    
    // Update play/pause button
    function updatePlayButton() {
        if (videoPlayer.paused) {
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        }
    }
    
    // Update mute button
    function updateMuteButton() {
        if (videoPlayer.muted) {
            muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    }
    
    // Format time as mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    // Update progress bar and time display
    function updateProgress() {
        if (!videoPlayer.duration) return;
        
        const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
        progressFilled.style.width = `${percent}%`;
        
        timeDisplay.textContent = `${formatTime(videoPlayer.currentTime)} / ${formatTime(videoPlayer.duration)}`;
    }
    
    // Handle play/pause button click
    playButton.addEventListener('click', () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    });
    
    // Handle mute button click
    muteButton.addEventListener('click', () => {
        videoPlayer.muted = !videoPlayer.muted;
        updateMuteButton();
    });
    
    // Handle progress bar click
    progress.addEventListener('click', (e) => {
        const progressRect = progress.getBoundingClientRect();
        const percent = (e.clientX - progressRect.left) / progressRect.width;
        videoPlayer.currentTime = percent * videoPlayer.duration;
    });
    
    // Update progress bar as video plays
    videoPlayer.addEventListener('timeupdate', updateProgress);
    
    // Update button state when video plays or pauses
    videoPlayer.addEventListener('play', updatePlayButton);
    videoPlayer.addEventListener('pause', updatePlayButton);
    
    // Initialize UI
    updatePlayButton();
    updateMuteButton();
    
    // Handle video metadata loaded (to get duration)
    videoPlayer.addEventListener('loadedmetadata', () => {
        timeDisplay.textContent = `0:00 / ${formatTime(videoPlayer.duration)}`;
    });
}

// Sample interview dialog functionality
document.addEventListener('DOMContentLoaded', function() {
    // 修复：使用原生JavaScript查找含有特定文本的元素
    const sampleInterviewButtons = Array.from(document.querySelectorAll('a[href="#"].btn'));
    const sampleInterviewButton = sampleInterviewButtons.find(button => 
        button.textContent.includes('Try a sample interview')
    );
    
    if (sampleInterviewButton) {
        sampleInterviewButton.addEventListener('click', function(e) {
            e.preventDefault();
            showSampleInterviewDialog();
        });
    }
});

function showSampleInterviewDialog() {
    // This would be implemented to show a sample interview dialog
    console.log('Sample interview dialog would open here');
    // In a real implementation, this might open a modal with an
    // interactive demo of the interview process
}

// Initialize Media Tabs
function initMediaTabs() {
    const mediaTabs = document.querySelectorAll('.media-tab');
    const mediaContents = document.querySelectorAll('.media-content');
    let currentIndex = 0;
    let slideInterval;
    
    // 确保DOM元素存在
    if (mediaTabs.length === 0 || mediaContents.length === 0) {
        console.error('Media tabs or contents not found');
        return;
    }
    
    // 显示指定索引的幻灯片
    function showSlide(index) {
        // 移除所有活动状态
        mediaTabs.forEach(tab => tab.classList.remove('active'));
        mediaContents.forEach(content => content.classList.remove('active'));
        
        // 设置当前幻灯片为活动状态
        mediaTabs[index].classList.add('active');
        mediaContents[index].classList.add('active');
        
        // 更新当前索引
        currentIndex = index;
    }
    
    // 切换到下一张幻灯片
    function nextSlide() {
        currentIndex = (currentIndex + 1) % mediaTabs.length;
        showSlide(currentIndex);
    }
    
    // 启动自动轮播
    function startSlideshow() {
        // 清除任何现有的计时器
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        // 设置新的计时器
        slideInterval = setInterval(nextSlide, 2000);
        console.log('Slideshow started');
    }
    
    // 停止自动轮播
    function stopSlideshow() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
            console.log('Slideshow stopped');
        }
    }
    
    // 为每个标签添加点击事件
    mediaTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            showSlide(index);
            // 重置计时器，让用户有足够时间查看当前选项
            stopSlideshow();
            startSlideshow();
        });
    });
    
    // 鼠标悬停时暂停自动轮播
    const mediaContainer = document.querySelector('.media-content-container');
    if (mediaContainer) {
        mediaContainer.addEventListener('mouseenter', stopSlideshow);
        mediaContainer.addEventListener('mouseleave', startSlideshow);
    }
    
    // 初始显示第一张幻灯片
    showSlide(0);
    
    // 启动自动轮播
    startSlideshow();
    
    // 为了调试，检查轮播是否正在工作
    console.log('Media tabs initialized with', mediaTabs.length, 'tabs');
    
    // 添加窗口焦点/失焦事件，当用户切换标签时暂停/继续轮播
    window.addEventListener('focus', startSlideshow);
    window.addEventListener('blur', stopSlideshow);
}

// Initialize Testimonials Carousel
function initTestimonialsCarousel() {
    console.log("Initializing customer testimonials carousel");
    
    const container = document.getElementById('testimonialsContainer');
    const slides = document.querySelectorAll('.testimonial-slide');
    
    if (!container || !slides.length) {
        console.error('Carousel elements not found');
        return;
    }
    
    console.log(`Found ${slides.length} customer testimonials`);
    
    // Make sure all testimonials are displayed properly
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'stretch';
    
    // Make all slides visible with equal width
    slides.forEach((slide, index) => {
        slide.style.opacity = '1';
        slide.style.flex = '1 0 auto';
        slide.style.maxWidth = '20%';

        // Add some animation to testimonials when they come into view
        setTimeout(() => {
            slide.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            slide.style.opacity = '1';
            slide.style.transform = 'translateY(0)';
        }, 100 * index);
    });

    // Adjust for smaller screens
    function adjustForScreenSize() {
        const windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            slides.forEach(slide => {
                slide.style.maxWidth = '85%';
                slide.style.flex = '0 0 85%';
            });
            container.style.overflowX = 'auto';
            container.style.justifyContent = 'flex-start';
            container.style.scrollBehavior = 'smooth';
            container.style.WebkitOverflowScrolling = 'touch';
            container.style.padding = '10px 0';
        } else if (windowWidth < 1200) {
            slides.forEach(slide => {
                slide.style.maxWidth = '33.333%';
                slide.style.flex = '0 0 33.333%';
            });
        } else {
            slides.forEach(slide => {
                slide.style.maxWidth = '20%';
                slide.style.flex = '0 0 20%';
            });
        }
    }

    // Call once and add event listener for window resize
    adjustForScreenSize();
    window.addEventListener('resize', adjustForScreenSize);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTestimonialsCarousel();
}); 