
        // Toggle Dark Theme
        const themeToggle = document.querySelector('.theme-toggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });

        // Show Skill Metrics on Header Click
        const headers = document.querySelectorAll('h2');
        const skillSection = document.getElementById('skillMetrics');

        headers.forEach(header => {
            header.addEventListener('click', () => {
                if (header.textContent.includes('Learning Journey')) {
                    skillSection.classList.toggle('visible');
                    
                    // Animate progress bars when visible
                    if (skillSection.classList.contains('visible')) {
                        const progressBars = skillSection.querySelectorAll('.progress');
                        progressBars.forEach(bar => {
                            const width = bar.style.width;
                            bar.style.width = '0';
                            setTimeout(() => {
                                bar.style.width = width;
                            }, 100);
                        });
                    }
                }
            });
        });

        // Add scroll-to-top functionality
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                if (!document.querySelector('.scroll-top')) {
                    const scrollButton = document.createElement('button');
                    scrollButton.innerHTML = '↑';
                    scrollButton.className = 'scroll-top';
                    scrollButton.style.cssText = `
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        padding: 10px 15px;
                        background: #0066cc;
                        color: white;
                        border: none;
                        border-radius: 50%;
                        cursor: pointer;
                        display: block;
                    `;
                    scrollButton.addEventListener('click', () => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    });
                    document.body.appendChild(scrollButton);
                }
            } else {
                const scrollButton = document.querySelector('.scroll-top');
                if (scrollButton) {
                    scrollButton.remove();
                }
            }
        });
