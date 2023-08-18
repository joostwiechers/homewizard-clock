const energySocketInterface = {

    get: (ip) => fetch(`${ip}/api/v1/data`).then(response => response.json()),
    setState: (ip, data) => {
        return fetch(`${ip}/api/v1/state`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .catch(x => console.log(x))

    }

}

module.exports = energySocketInterface
