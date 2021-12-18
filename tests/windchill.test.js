import { calculateWindchill } from '../src/utils/windchill.js'

const usMap = [
    { temperature: 41, windSpeed: 20, units: 'US', result: 32 },
    { temperature: 57, windSpeed: 13, units: 'US', result: 54 },
    { temperature: 28, windSpeed: 47, units: 'US', result: 9 },
    { temperature: 49, windSpeed: 4, units: 'US', result: 48 },
    { temperature: 80, windSpeed: 30, units: 'US', result: 83 },
]

const restMap = [
    { temperature: 25, windSpeed: 10, result: 28 },
    { temperature: 10, windSpeed: 27, result: 7 },
    { temperature: 0, windSpeed: 26, result: -6 },
    { temperature: -6, windSpeed: 9, result: -10 },
    { temperature: -20, windSpeed: 45, result: -36 },
    { temperature: -8, windSpeed: 45, result: -19 },
]

usMap.forEach(({ temperature, windSpeed, units, result }) => {
    test(`${temperature}°F with a wind of ${windSpeed}mph should be a windchill of: ${result}°F`, () => {
        expect(calculateWindchill(temperature, windSpeed, units)).toBe(result)
    })
})
restMap.forEach(({ temperature, windSpeed, units, result }) => {
    test(`${temperature}°C with a wind of ${windSpeed}km/h should be a windchill of: ${result}°C`, () => {
        expect(calculateWindchill(temperature, windSpeed)).toBe(result)
    })
})
