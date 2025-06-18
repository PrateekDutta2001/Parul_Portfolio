// script.js
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll to top functionality
        const scrollTopBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Animation on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });

        // Profile photo upload functionality
        // document.getElementById('profilePhoto').addEventListener('click', function() {
        //     const input = document.createElement('input');
        //     input.type = 'file';
        //     input.accept = 'image/*';
        //     input.onchange = function(e) {
        //         const file = e.target.files[0];
        //         if (file) {
        //             const reader = new FileReader();
        //             reader.onload = function(e) {
        //                 document.getElementById('profilePhoto').src = e.target.result;
        //                 // Store in memory for this session
        //                 sessionStorage.setItem('profilePhoto', e.target.result);
        //             };
        //             reader.readAsDataURL(file);
        //         }
        //     };
        //     input.click();
        // });

        // // Load saved profile photo
        // const savedPhoto = sessionStorage.getItem('profilePhoto');
        // if (savedPhoto) {
        //     document.getElementById('profilePhoto').src = savedPhoto;
        // }

        // Download Resume functionality
        document.getElementById('downloadBtn').addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create resume content
            const resumeContent = `
PARUL GUPTA
Data Analyst & Business Intelligence Specialist

Contact Information:
Phone: +91 7888989929
Email: parulgupta00700@gmail.com
LinkedIn: https://www.linkedin.com/in/parul-gupta07

PROFESSIONAL SUMMARY
Analytically driven and results-oriented Business Analyst with hands-on experience in data analysis, dashboarding, and process optimization. Proficient in SQL, Excel, and Python, with a strong foundation in data visualization tools like Power BI and Streamlit. Demonstrated ability to build dashboards, analyze PnLs, identify trends, and deliver insights that drive business growth.

EDUCATION
University of Petroleum and Energy Studies (UPES) | 2024
B.Tech in Computer Science Engineering (AI & ML Specialization)
CGPA: 8.48 | Dehradun, India

Government Model Senior Secondary School | 2020
Class XII - CBSE | Percentage: 96.4% | Chandigarh, India

Sacred Heart Senior Secondary School | 2018
Class X - CBSE | Percentage: 93% | Chandigarh, India

PROFESSIONAL EXPERIENCE

KPMG | Data Analyst | Jan 2024 – Present
• Led Power Apps development and Power Automate flows to streamline internal operations and client workflows
• Built "Analytics.ai", an automated dashboard using Streamlit, FastAPI, HTML & CSS to visualize sanitized data
• Created a Text Miner Tool using Azure Cognitive Services (OCR) to extract text from images
• Designed Alteryx workflows for data analysis across P2P, O2C, Entertainment, and Toll sectors
• Built Power BI dashboards and automated recurring reports, enhancing visibility of key KPIs
• Conducted internal audits across cross-functional teams, identifying data issues and improving compliance

PwC | Engineering Trainee | Mar 2023 – Jul 2023
• Learned RDBMS, cloud technologies, and Python scripting

PROJECTS

Azure AI Vision App | Python, Azure Cognitive Services, NLP
• Developed an OCR-based document processing tool using Python, Azure Cognitive Services, and NLP
• Enabled automated text extraction from scanned documents and images, improving data accuracy

Analytics.ai | Streamlit, FastAPI, Python, HTML, CSS
• Built an automated, interactive data dashboard to analyze and visualize large-scale datasets
• Implemented robust data sanitization processes to ensure clean, reliable input for analytics
• Integrated visualizations including heatmaps, trend charts, and summary metrics

TECHNICAL SKILLS
Languages: C++, Python, SQL, HTML, CSS
Tools: Power Apps, Power Automate, Alteryx, Power BI, Azure, SharePoint
Data: Data Analysis, Visualization, Business Intelligence, Statistical Analysis
Soft Skills: Communication, Leadership, Team Collaboration

CERTIFICATIONS & ACHIEVEMENTS
• Received a Spot Award (H2'24–25) at KPMG for outstanding performance and contribution
• Scored Gold Medal in All India Quiz by Britannia (2015–2016)
• Merit-based scholarships awarded in Sep 2020 and May 2021
• Member of Discipline Committee and Open Community (2022–2024)
            `;

            // Create and download the file
            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'Parul_Gupta_Resume.txt';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        });

        // Mobile menu functionality (if needed in future)
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        mobileMenuBtn.style.display = 'none';
        mobileMenuBtn.className = 'mobile-menu-btn';

        // Add some interactive effects
        document.querySelectorAll('.skill-tag').forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.2s ease';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });

        // Project cards hover effect
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
        });

        // Typing effect for hero text (optional enhancement)
        function typeWriter(element, text, speed = 50) {
            let i = 0;
            element.innerHTML = '';
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect on page load
        window.addEventListener('load', () => {
            const heroSubtext = document.querySelector('.hero-text p');
            if (heroSubtext) {
                const originalText = heroSubtext.textContent;
                typeWriter(heroSubtext, originalText, 30);
            }
        });

        // Contact form submission (if you want to add a contact form later)
        function handleContactForm(event) {
            event.preventDefault();
            // Add contact form handling logic here
            alert('Thank you for your message! I will get back to you soon.');
        }

        // Performance optimization - lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Add click effect to buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                let ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);

                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;

                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;

                setTimeout(() => {
                    ripple.remove();
                }, 300);
            });
        });