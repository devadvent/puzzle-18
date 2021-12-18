import { calculateWindchill } from './utils/windchill.js'

const displayResult = (temp, speed, unit) => {
    if (unit === 'US') {
        const windchill = calculateWindchill(temp, speed, 'US')
        console.log(`Windchill for ${temp}°F at ${speed}mph is ${windchill}°F`)
    } else {
        const windchill = calculateWindchill(temp, speed)
        console.log(`Windchill for ${temp}°C at ${speed}km/h is ${windchill}°C`)
    }
}
displayResult(41, 20, 'US')
displayResult(57, 13, 'US')
displayResult(28, 47, 'US')
displayResult(49, 4, 'US')
displayResult(80, 30, 'US')
displayResult(25, 10)
displayResult(10, 27)
displayResult(0, 26)
displayResult(-6, 9)
displayResult(-20, 45)
displayResult(-8, 45)
