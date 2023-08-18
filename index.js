const energySocketInterface = require('./energySocketInterface')
const config = require('./config')

setInterval(() => {

    const date = new Date()
    const powerOn = date.getHours() >= 14 && date.getHours() <= 18

    energySocketInterface.setState(config.ip, {
        power_on: powerOn
    })
        .then(data => console.log(data))

}, config.interval)
