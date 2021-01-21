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
        let calculator = Project(
            "Calculator",
            "This is a small project, to make a fairly capable calculator based on the Odin Project. The code does everything in the requirements and all the extra credits; save one. The project did not specify MDAS as a requirement, but this calculator will make use of it.",
            "images/calculator.png",
            "https://github.com/MikhailAgudo/JS-Full-Stack-Practice/tree/master/calculator",
            "https://github.com/MikhailAgudo/JS-Full-Stack-Practice/tree/master/calculator"
        )
        
        projects.push(calculator);
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