document.getElementById('copy-btn').addEventListener('click', function() {
    const code = document.querySelector('pre code').innerText;
    navigator.clipboard.writeText(code).then(() => {
        this.innerText = 'تم النسخ!';
        this.style.backgroundColor = '#ffb700';
        
        setTimeout(() => {
            this.innerText = 'نسخ الكود';
            this.style.backgroundColor = '#00f2ff';
        }, 2000);
    }).catch(err => {
        console.error('فشل النسخ: ', err);
    });
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
