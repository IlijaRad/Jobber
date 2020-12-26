const jsonPlaceholder = (location = null, description= null, full_time=null, locationOverwrite = null) => {
    
    let obj = {
        location,
        description,
        full_time
    }
    
    if (locationOverwrite) obj.location = locationOverwrite;

    for (let key of Object.keys(obj)) {
        if (!obj[key]) delete obj[key];
      }
    return fetch('https://morning-refuge-16267.herokuapp.com/https://jobs.github.com/positions.json?' + new URLSearchParams(obj))
}

export default jsonPlaceholder;