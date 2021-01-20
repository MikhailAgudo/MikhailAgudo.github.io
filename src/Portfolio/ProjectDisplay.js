const ProjectDisplay = (() => {
    const display = (project) => {
        let projectContainer = createContainer();
        let projectImage = createImage(project.imageLink);
        let detailsContainer = createDetailsContainer();
    }

    const createContainer = () => {
        let projectContainer = document.createElement("div");

        projectContainer.classList.add("project-container");
    }

    const createDetailsContainer = (name, description, codeLink, liveLink) => {
        let detailsContainer = document.createElement("div");
        let projectName = createName(name);
        let projectDescription = createDescription(description);
        let projectCode = createLink(codeLink);

        if (liveLink !== null) {
            let projectLive = createLink(liveLink);
        }

        detailsContainer.classList.add("project-details-container");
    }

    const createName = (name) => {
        let projectName = document.createElement("h2");

        return projectName;
    }

    const createDescription = (description) => {
        let projectDescription = document.createElement("p");

        return projectDescription;
    }

    const createLink = (codeLink) => {
        let projectCode = document.createElement("codeLink");

        return projectCode;
    }

    const createImage = (imageLink) => {
        let projectImage = document.createElement("img");

        projectImage.src = imageLink;
    }

    return {
        display
    }
})();

export { ProjectDisplay }