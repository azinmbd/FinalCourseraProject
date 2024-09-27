import { updateTimes, initializeTimes } from './Comps/Main'

describe('Main', () => {
    test('initializeTimes returns a non-empty array', () => {
        const times = initializeTimes()
        expect(times.length).not.toBe(0)
    })

    test('updateTimes returns a non-empty array', () => {
        const times = updateTimes(null, { date: new Date() })
        expect(times.length).not.toBe(0)
    })
})