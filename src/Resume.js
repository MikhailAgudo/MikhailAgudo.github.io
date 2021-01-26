import { Project } from './Portfolio/Project.js';
import { ProjectDisplay } from './Portfolio/ProjectDisplay.js';
import { NavBar } from './NavBar/NavBar.js';

const Resume = (() => {
    let projects = [];
    const render = () => {
        initiateProjects();
        renderProjects();
        renderNavBar();
    }

    const renderNavBar = () => {
        NavBar.renderButton("About", "#header");
        NavBar.renderButton("Skills", "#skills");
        NavBar.renderButton("Portfolio", "#portfolio");
        NavBar.renderButton("Contact", "#contact");
    }

    const initiateProjects = () => {
        projects.push(Project(
            "Calculator",
            ["JavaScript", "HTML/CSS"],
            "This is a calculator that takes input from a string and solves it using MDAS.",
            "images/calculator.png",
            "https://github.com/MikhailAgudo/MikhailAgudo.github.io/tree/master/docs/calculator",
            "calculator/calculator.html"
        ));

        projects.push(Project(
            "Etch-A-Sketch",
            ["JavaScript", "HTML/CSS"],
            "A simple app that lets users draw in different hues from white to black, like a a real Etch a Sketch.",
            "images/sketch.png",
            "https://github.com/MikhailAgudo/MikhailAgudo.github.io/tree/master/docs/etch-a-sketch",
            "etch-a-sketch/sketch.html"
        ));

        projects.push(Project(
            "Tic-Tac-Toe",
            ["JavaScript", "HTML/CSS"],
            "Tic-Tac-Toe game where players click on the buttons to decide their move. Does not include AI.",
            "images/tictactoe.png",
            "https://github.com/MikhailAgudo/MikhailAgudo.github.io/tree/master/docs/tic-tac-toe",
            "tic-tac-toe/tictactoe.html"
        ));

        projects.push(Project(
            "Ironsworn Dice",
            ["Linux Bash"],
            "A linux script that rolls a six-sided die and two ten-sided dice, used for playing Ironsworn (by Shawn Tomkin)",
            "images/ironsworn-dice.png",
            "https://github.com/MikhailAgudo/Bash-Ironsworn-Dice",
            null
        ))
    }

    const renderProjects = () => {
        let newProject = projects.shift();
        ProjectDisplay.render(newProject);

        if (projects.length === 0) {
            
        } else {
            renderProjects();
        }
    }

    return {
        render
    }
})();

export { Resume }