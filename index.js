document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Hero SVG Image Slider Logic
    const illustrations = document.querySelectorAll('.hero-illustration');
    let currentImg = 0;
    
    if(illustrations.length > 0) {
        setInterval(() => {
            // Remove active class from current
            illustrations[currentImg].classList.remove('active');
            
            // Move to the next image, loop back to 0 if at the end
            currentImg = (currentImg + 1) % illustrations.length;
            
            // Add active class to the new current
            illustrations[currentImg].classList.add('active');
        }, 3500); // Crossfades every 3.5 seconds
    }

    // 2. Countdown Timer Logic for Today's Special
    const countdownElement = document.getElementById("countdown");
    
    if(countdownElement) {
        // Set an arbitrary future date (e.g., 6 days from now)
        const countDownDate = new Date().getTime() + (6 * 24 * 60 * 60 * 1000) + (5 * 60 * 60 * 1000); 

        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the results with padded zeros
            document.getElementById("days").innerText = days < 10 ? '0' + days : days;
            document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
            document.getElementById("mins").innerText = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById("secs").innerText = seconds < 10 ? '0' + seconds : seconds;

            // If the count down is over, clear interval
            if (distance < 0) {
                clearInterval(timer);
                countdownElement.innerHTML = "<h3 style='color:var(--primary-color)'>Offer Expired!</h3>";
            }
        }, 1000);
    }

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Remove active class from all links
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');

            // Scroll to the specific section
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. Mobile menu toggle (Basic setup)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '70px';
                navMenu.style.right = '5%';
                navMenu.style.background = 'rgba(255, 255, 255, 0.95)';
                navMenu.style.padding = '20px';
                navMenu.style.borderRadius = '15px';
                navMenu.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }
        });
    }
});