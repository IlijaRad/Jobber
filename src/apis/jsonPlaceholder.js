export default params => {
    return fetch('https://morning-refuge-16267.herokuapp.com/https://jobs.github.com/positions.json?' + new URLSearchParams({
        location: params,
        type: "",
        description: "",
    }))
}