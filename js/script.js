document.addEventListener('DOMContentLoaded', () => {
    const themeSwitchButton = document.getElementById('theme-switch');
    const themeIcon = document.getElementById('theme-icon');
    const LogoIcon = document.getElementById('logo-icon');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        themeIcon.src = savedTheme === 'dark-theme' ? './assets/dark-theme-icon.png' : './assets/light-theme-icon.png';
        LogoIcon.src = savedTheme === 'dark-theme' ? './assets/dark-logo.png' : './assets/light-logo.png';
    }

    themeSwitchButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
            themeIcon.src = './assets/dark-theme-icon.png';
            LogoIcon.src = './assets/dark-logo.png';
        } else {
            localStorage.removeItem('theme');
            themeIcon.src = './assets/light-theme-icon.png';
            LogoIcon.src = './assets/light-logo.png';
        }
    });
});