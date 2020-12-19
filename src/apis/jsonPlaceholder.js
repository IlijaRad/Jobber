const jsonPlaceholder = (location = "", id = undefined, description="") => {
    return fetch('https://morning-refuge-16267.herokuapp.com/https://jobs.github.com/positions.json?' + new URLSearchParams({
        location,
        id,
        title: "",
        type: "",
        description,
    }))
}

export default jsonPlaceholder;