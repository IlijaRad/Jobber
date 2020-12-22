const jsonPlaceholder = (location = null, id = null, description= null, full_time=null) => {

    let obj = {
        location,
        id,
        description,
        full_time
    }

    for (let key of Object.keys(obj)) {
        if (!obj[key]) delete obj[key];
      }
    return fetch('https://morning-refuge-16267.herokuapp.com/https://jobs.github.com/positions.json?' + new URLSearchParams(obj))
}

export default jsonPlaceholder;