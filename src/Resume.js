import { Project } from './Portfolio/Project.js';
import { ProjectDisplay } from './Portfolio/ProjectDisplay.js';
import { NavBar } from './NavBar.js';

const Resume = (() => {
    let projects = [];
    const render = () => {
        initiateProjects();
        NavBar.render();
    }

    const initiateProjects = () => {
        let calculator = Project(
            "Calculator",
            "",
            "",
            "",
            ""
        )
        
        projects.shift(calculator);
    }

    return {
        render
    }
})();

export { Resume }