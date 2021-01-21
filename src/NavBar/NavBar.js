const NavBar = (() => {
    const bar = document.querySelector("#navBar");
    const siteTitle = "Mikhail Joseph T. Agudo";

    const renderButton = (text, link) => {
        // Add content to .navbar
        let newButton = addButton(text, link);
        bar.appendChild(newButton);
    }

    const addButton = (text, link) => {
        let newButton = document.createElement("a");

        newButton.textContent = text;
        newButton.href = link;

        newButton.classList.add("nav-button");
        newButton.classList.add("remove-button-defaults");
        newButton.classList.add("secondary-text-color");
        newButton.classList.add("nav-font-size");

        return newButton;
    }

    return {
        renderButton
    }
})();

export {
    NavBar
}