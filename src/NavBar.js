const NavBar = (() => {
    const bar = document.querySelector("#navBar");
    const siteTitle = "Mikhail Joseph T. Agudo";

    const render = () => {
        // Add content to .navbar
        initHome();
    }

    const initHome = () => {
        let resumeButton = addButton();
        resumeButton.textContent = "Resume";

        let aboutButton = addButton();
        aboutButton.textContent = "About";

        bar.appendChild(resumeButton);
        bar.appendChild(aboutButton);
    }

    const addDiv = () => {
        let newDiv = document.createElement("div");
        return newDiv;
    }

    const addButton = () => {
        let newButton = document.createElement("button");

        newButton.classList.add("nav-button");
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