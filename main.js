function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
    let themeButton = document.getElementById("theme-button");
    if (element.classList.contains("dark-mode")) {
        themeButton.classList.remove("fa-moon");
        themeButton.classList.add("fa-sun");
    } else {
        themeButton.classList.remove("fa-sun");
        themeButton.classList.add("fa-moon");
    }
} 
 