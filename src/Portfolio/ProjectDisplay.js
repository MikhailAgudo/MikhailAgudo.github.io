const ProjectDisplay = (() => {
    const portfolioSection = document.querySelector(".portfolio-section");

    const render = (project) => {
        let projectContainer = createContainer();
        let projectImage = createImage(project.imageLink);
        let detailsContainer = createDetailsContainer(project.name, project.description, project.codeLink, project.liveLink);

        appendProjectDetails(projectContainer, projectImage, detailsContainer);

        appendProject(projectContainer);
    }

    const appendProject = (projectContainer) => {
        portfolioSection.appendChild(projectContainer);
    }

    const appendProjectDetails = (projectContainer, projectImage, detailsContainer) => {
        projectContainer.appendChild(projectImage);
        projectContainer.appendChild(detailsContainer);
    }

    const createContainer = () => {
        let projectContainer = document.createElement("div");

        projectContainer.classList.add("project-container");
        
        return projectContainer;
    }

    const createDetailsContainer = (name, description, codeLink, liveLink) => {
        let detailsContainer = document.createElement("div");
        let projectName = createName(name);
        let projectDescription = createDescription(description);

        let buttonsContainer = createButtonsContainer();
        let projectCode = createLink(codeLink, "View Code");

        detailsContainer.classList.add("project-details-container");

        detailsContainer.appendChild(projectName);
        detailsContainer.appendChild(projectDescription);

        buttonsContainer.appendChild(projectCode);

        if (liveLink !== null) {
            let projectLive = createLink(liveLink, "See it Live");
            buttonsContainer.appendChild(projectLive);
        }

        detailsContainer.appendChild(buttonsContainer);

        return detailsContainer;
    }

    const createButtonsContainer = () => {
        let buttonsContainer = document.createElement("div");

        buttonsContainer.classList.add("project-buttons-container");
        buttonsContainer.classList.add("project-padding");

        return buttonsContainer;
    }

    const createName = (name) => {
        let projectName = document.createElement("h2");
        projectName.textContent = name;

        return projectName;
    }

    const createDescription = (description) => {
        let projectDescription = document.createElement("p");
        projectDescription.textContent = description;

        projectDescription.classList.add("project-padding");

        return projectDescription;
    }

    const createLink = (codeLink, text) => {
        let projectCode = document.createElement("a");

        projectCode.href = codeLink;
        projectCode.textContent = text;

        projectCode.classList.add("secondary-background");
        projectCode.classList.add("secondary-text-color");

        return projectCode;
    }

    const createImage = (imageLink) => {
        let projectImage = document.createElement("img");

        projectImage.src = imageLink;

        projectImage.classList.add("project-image");

        return projectImage;
    }

    return {
        render
    }
})();

export { ProjectDisplay }