import { Project } from './Portfolio/Project.js';
import { ProjectDisplay } from './Portfolio/ProjectDisplay.js';
import { NavBar } from './NavBar.js';

const Resume = (() => {
    let projects = [];
    const render = () => {
        initiateProjects();
        renderProjects();
        NavBar.render();
    }

    const initiateProjects = () => {
        projects.push(Project(
            "Calculator",
            "This is a calculator that takes input from a string and solves it using MDAS.",
            "images/calculator.png",
            "https://github.com/MikhailAgudo/JS-Full-Stack-Practice/tree/master/calculator",
            "calculator/calculator.html"
        ));

        projects.push(Project(
            "Etch-A-Sketch",
            "A simple app that lets users draw in different hues from white to black, like a a real Etch a Sketch.",
            "images/sketch.png",
            "https://github.com/MikhailAgudo/JS-Full-Stack-Practice/tree/master/etch-a-sketch",
            "etch-a-sketch/sketch.html"
        ));

        projects.push(Project(
            "Tic-Tac-Toe",
            "Tic-Tac-Toe game where players click on the buttons to decide their move. Does not include AI.",
            "images/tictactoe.png",
            "",
            "tic-tac-toe/tictactoe.html"
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