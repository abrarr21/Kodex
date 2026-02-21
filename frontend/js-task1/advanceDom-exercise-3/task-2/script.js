let button = document.querySelector("#light");
let main = document.querySelector("main");
let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    main.classList.add(savedTheme);
} else {
    main.classList.add("dark");
}

button.addEventListener("click", function () {
    let currentTheme = localStorage.getItem("theme");
    let newTheme;

    if (currentTheme === "light") {
        newTheme = "dark";
    } else {
        newTheme = "light";
    }

    main.classList.remove("light", "dark");
    main.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
});
