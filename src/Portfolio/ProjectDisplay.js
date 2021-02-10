import { Structurer } from './../Structurer.js';

const ProjectDisplay = (() => {
    const portfolioSection = document.querySelector('.portfolio-body');

    const render = (project) => {
        // render() will do each necessary function to put the project
        // in the UI.

        // Create the containers first, which all have their own
        // way of organizing content (some are horizontal, some vertical)
        let projectContainer = createContainer();
        let projectImage = createImage(project.imageLink);
        let detailsContainer = createDetailsContainer(project.name, project.tags, project.description, project.codeLink, project.liveLink);

        // Then append the details into one whole container
        Structurer.appendChildren(projectContainer, [projectImage, detailsContainer]);

        // Then append the project into the grid section
        portfolioSection.appendChild(projectContainer);
    }

    const createContainer = () => {
        // This method exists to contain the project image and details
        let projectContainer = document.createElement('div');

        projectContainer.classList.add('project-container');
        
        return projectContainer;
    }

    const createDetailsContainer = (name, tags, description, codeLink, liveLink) => {
        // createDetailsContainer() executes all of the other sub-functions
        // that create the actual elements needed to show the project
        // details. The subfunctions are arranged in order of how they
        // appear in the front-end, from top to bottom.

        let detailsContainer = document.createElement('div');
        let projectName = createName(name);

        let projectTags = createTagsContainer();
        createTags(projectTags, tags);

        let projectDescription = createDescription(description);

        let buttonsContainer = createButtonsContainer();
        let projectCode = createLink(codeLink, 'View Code');

        detailsContainer.classList.add('project-details-container');

        // Then, append all of them in order.

        Structurer.appendChildren(detailsContainer, [projectName, projectTags, projectDescription]);

        //detailsContainer.appendChild(projectName);
        //detailsContainer.appendChild(projectTags);
        //detailsContainer.appendChild(projectDescription);

        buttonsContainer.appendChild(projectCode);

        if (liveLink !== null) {
            // If there is a link for a live display, then make it
            // and append. This is the last so that the
            // function doesn't needlessly create $projectLive

            let projectLive = createLink(liveLink, 'See it Live');
            buttonsContainer.appendChild(projectLive);
        }

        detailsContainer.appendChild(buttonsContainer);

        return detailsContainer;
    }

    const createButtonsContainer = () => {
        let buttonsContainer = document.createElement('div');

        Structurer.addClasses(buttonsContainer, [
            'project-buttons-container',
            'project-padding'
        ]);

        return buttonsContainer;
    }

    const createTagsContainer = () => {
        let projectTags = document.createElement('div');

        projectTags.classList.add('project-tags-container');

        return projectTags;
    }

    const createName = (name) => {
        let projectName = document.createElement('h2');
        projectName.textContent = name;

        return projectName;
    }

    const createTags = (projectTags, tags) => {
        // A recursive function that adds all of the tags
        // from the array and makes them usable in the front-end
        let newTag = tags.shift();

        let newTagDiv = document.createElement('div');
        newTagDiv.textContent = newTag;

        Structurer.addClasses(newTagDiv, [
            'portfolio-tag',
            'fifth-background',
            'tertiary-text-color'
        ]);

        projectTags.appendChild(newTagDiv);

        if (tags.length === 0) {

        } else {
            createTags(projectTags, tags);
        }
    }

    const createDescription = (description) => {
        let projectDescription = document.createElement('p');
        projectDescription.textContent = description;

        projectDescription.classList.add('project-padding');

        return projectDescription;
    }

    const createLink = (codeLink, text) => {
        let projectCode = document.createElement('a');

        projectCode.href = codeLink;
        projectCode.textContent = text;

        Structurer.addClasses(projectCode, [
            'secondary-background',
            'secondary-text-color'
        ]);

        return projectCode;
    }

    const createImage = (imageLink) => {
        let projectImage = document.createElement('img');

        projectImage.src = imageLink;

        projectImage.classList.add('project-image');

        return projectImage;
    }

    return {
        render
    }
})();

export { ProjectDisplay }