import { render, screen, fireEvent } from '@testing-library/react'
import Reservation from './Reservation'

describe('Reservation form', () => {
    test('The Reservation heading is rendered', () => {
        render(<Reservation />)
        const headingElement = screen.getByText("Make a Reservation")
        expect(headingElement).toBeInTheDocument()
    })

    describe('HTML5 validation', () => {
        test("The date input is a date field", () => {
            render(<Reservation />)
            const dateInput = screen.getByLabelText("Date")
            expect(dateInput.getAttribute("type")).toBe("date")
        })

        test("The guests input has a min and a max", () => {
            render(<Reservation />)
            const guestsInput = screen.getByLabelText("Number of guests")
            expect(guestsInput).toHaveAttribute("min")
            expect(guestsInput).toHaveAttribute("max")
        })
    })

    describe("Client-side validation", () => {
        describe("Date input", () => {
            test("Shows a valid state when the input is valid", () => {
                render(<Reservation />)
                const dateInput = screen.getByLabelText("Date")
                fireEvent.change(dateInput, { target: { value: '2024-09-26' } })
                fireEvent.blur(dateInput)

                expect(dateInput).not.toHaveClass("invalid")

                const message = screen.queryByText("Please select a valid date.")
                expect(message).not.toBeInTheDocument()
            })

            test("Shows an invalid state when the input is invalid", () => {
                render(<Reservation />)
                const dateInput = screen.getByLabelText("Date")
                fireEvent.change(dateInput, { target: { value: '' } })
                fireEvent.blur(dateInput)

                expect(dateInput).toHaveClass("invalid")

                const message = screen.queryByText("Please select a valid date.")
                expect(message).toBeInTheDocument()
            })
        })

        describe("Time input", () => {
            test("Shows a valid state when the input is valid", () => {
                render(<Reservation />)
                const timeInput = screen.getByLabelText("Time")
                fireEvent.change(timeInput, { target: { value: '17:00' } })
                fireEvent.blur(timeInput)

                expect(timeInput).not.toHaveClass("invalid")

                const message = screen.queryByText("Please select a time.")
                expect(message).not.toBeInTheDocument()
            })

            test("Shows an invalid state when the input is invalid", () => {
                render(<Reservation />)
                const timeInput = screen.getByLabelText("Time")
                fireEvent.change(timeInput, { target: { value: '' } })
                fireEvent.blur(timeInput)

                expect(timeInput).toHaveClass("invalid")

                const message = screen.queryByText("Please select a time.")
                expect(message).toBeInTheDocument()
            })
        })

        describe("Guests input", () => {
            test("Shows a valid state when the input is valid", () => {
                render(<Reservation />)
                const guestsInput = screen.getByLabelText("Number of guests")
                fireEvent.change(guestsInput, { target: { value: '3' } })
                fireEvent.blur(guestsInput)

                expect(guestsInput).not.toHaveClass("invalid")

                const message = screen.queryByText("Please enter between 1 and 10 guests.")
                expect(message).not.toBeInTheDocument()
            })

            test("Shows an invalid state when the input is invalid", () => {
                render(<Reservation />)
                const guestsInput = screen.getByLabelText("Number of guests")
                fireEvent.change(guestsInput, { target: { value: '20' } })
                fireEvent.blur(guestsInput)

                expect(guestsInput).toHaveClass("invalid")

                const message = screen.queryByText("Please enter between 1 and 10 guests.")
                expect(message).toBeInTheDocument()
            })
        })

        describe("Form submission", () => {
            test("Submits the reservation when the input is valid", () => {
                const consoleSpy = jest.spyOn(console, 'log') // Spy on console.log for form submission
                render(<Reservation />)

                const dateInput = screen.getByLabelText("Date")
                const timeInput = screen.getByLabelText("Time")
                const guestsInput = screen.getByLabelText("Number of guests")

                fireEvent.change(dateInput, { target: { value: '2024-09-26' } })
                fireEvent.change(timeInput, { target: { value: '17:00' } })
                fireEvent.change(guestsInput, { target: { value: '3' } })

                const submitButton = screen.getByText("Make your reservation")
                fireEvent.click(submitButton)

                expect(consoleSpy).toHaveBeenCalledWith('Reservation Submitted:', {
                    resDate: '2024-09-26',
                    resTime: '17:00',
                    guests: '3',
                    occasion: ''
                })
            })

            test("Doesn't submit the reservation when the input is invalid", () => {
                const consoleSpy = jest.spyOn(console, 'log') // Spy on console.log to check if it was called
                render(<Reservation />)

                const dateInput = screen.getByLabelText("Date")
                const timeInput = screen.getByLabelText("Time")
                const guestsInput = screen.getByLabelText("Number of guests")

                fireEvent.change(dateInput, { target: { value: '' } })
                fireEvent.change(timeInput, { target: { value: '' } })
                fireEvent.change(guestsInput, { target: { value: '100' } })

                const submitButton = screen.getByText("Make your reservation")
                fireEvent.click(submitButton)

                expect(consoleSpy).not.toHaveBeenCalled()
            })
        })
    })
})
