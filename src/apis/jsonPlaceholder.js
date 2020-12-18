const jsonPlaceholder = (location = '', id = undefined) => {
    return fetch('https://morning-refuge-16267.herokuapp.com/https://jobs.github.com/positions.json?' + new URLSearchParams({
        location,
        id,
        type: "",
        description: "",
    }))
}

export default jsonPlaceholder;