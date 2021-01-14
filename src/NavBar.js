const NavBar = (() => {
    const bar = document.querySelector(".navbar");
    const siteTitle = "Mikhail Joseph T. Agudo";

    const render = () => {
        // Add content to .navbar
        initHome();
    }

    const initHome = () => {
        let newButton = addButton();
        newButton.textContent = "Resume";

        bar.appendChild(newButton);

        newButton = addButton();
        newButton.textContent = "Test";

        bar.appendChild(newButton);
    }

    const addDiv = () => {
        let newDiv = document.createElement("div");
        return newDiv;
    }

    const addButton = () => {
        let newButton = document.createElement("button");

        newButton.classList.add("navButton");
        newButton.classList.add("remove-button-defaults");
        newButton.classList.add("secondary-color");
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