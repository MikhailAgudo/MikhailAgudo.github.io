import { Structurer } from './../Structurer.js';

const NavBar = (() => {
    const bar = document.querySelector('#navBar');

    const renderButton = (text, link) => {
        // This method groups up all needed variables and
        // functions to render a button.

        let newButton = addButton(text, link);
        bar.appendChild(newButton);
    }

    const addButton = (text, link) => {
        // The element is 'a' because we need it to be a link
        // that lets us scroll down to each section.
        let newButton = document.createElement('a');

        newButton.textContent = text;
        newButton.href = link;
       
        Structurer.addClasses(newButton, [
            'nav-button',
            'remove-button-defaults',
            'secondary-text-color',
            'nav-font-size'
        ]);

        return newButton;
    }

    return {
        renderButton
    }
})();

export {
    NavBar
}