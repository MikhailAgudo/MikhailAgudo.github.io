const Project = (name, tags, description, imageLink, codeLink, liveLink) => {
    // $name and $description are strings, to be displayed
    // by ProjectDisplay.js
    // $tags is needed for project tags, like programming languages etc.
    // $imageLink has the same function.
    // $live is used to link for a live version of the
    // project. If the value is null, then ProjectDisplay.js
    // does not produce a button for it.

    return {
        name,
        tags,
        description,
        imageLink,
        codeLink,
        liveLink
    }
}

export { Project }