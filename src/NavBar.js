const NavBar = (() => {
    const bar = document.querySelector("#navBar");
    const siteTitle = "Mikhail Joseph T. Agudo";

    const render = () => {
        // Add content to .navbar
        initHome();
    }

    const initHome = () => {
        let aboutButton = addButton();
        aboutButton.textContent = "About";

        let skillsButton = addButton();
        skillsButton.textContent = "Skills";

        bar.appendChild(aboutButton);
        bar.appendChild(skillsButton);
    }

    const addDiv = () => {
        let newDiv = document.createElement("div");
        return newDiv;
    }

    const addButton = () => {
        let newButton = document.createElement("a");

        newButton.classList.add("nav-button");
        newButton.classList.add("remove-button-defaults");
        newButton.classList.add("secondary-text-color");
        newButton.classList.add("nav-font-size");

        return newButton;
    }

    return {
        render
    }
})();

export {
    NavBar
}