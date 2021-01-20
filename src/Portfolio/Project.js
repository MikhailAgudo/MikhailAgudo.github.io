const Project = (name, description, imageLink, codeLink, liveLink) => {
    // $name and $description are strings, to be displayed
    // by ProjectDisplay.js
    // $imageLink has the same function.
    // $live is used to link for a live version of the
    // project. If the value is null, then ProjectDisplay.js
    // does not produce a button for it.

    return {
        name,
        description,
        imageLink,
        codeLink,
        liveLink
    }
}

export { Project }