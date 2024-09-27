import { render, screen, fireEvent } from '@testing-library/react'
import BookingForm from './Pages/BookingForm'

describe('Booking form', () => {
    test('The BookingForm heading is rendered', () => {
        render(<BookingForm />)
        const headingElement = screen.getByText("Reserve a table")
        expect(headingElement).toBeInTheDocument()
    })

    describe('HTML5 validation', () => {
        test("The date input is a date field", () => {
            render(<BookingForm />)
            const dateInput = screen.getByLabelText("Date")
            expect(dateInput.getAttribute("type")).toBe("date")
        })

        test("The guests input has a min and a max", () => {
            render(<BookingForm />)
            const guestsInput = screen.getByLabelText("Number of guests")
            expect(guestsInput).toHaveAttribute("min")
            expect(guestsInput).toHaveAttribute("max")
        })
    })

    describe("Client-side validation", () => {
        describe("Date input", () => {
            test("Shows a valid state when the input is valid", () => {
                render(<BookingForm resDate="2024-09-26" />)
                const dateInput = screen.getByLabelText("Date")
                fireEvent.blur(dateInput)

                expect(dateInput).not.toHaveClass("invalid")

                const message = screen.queryByText("Please select a valid date.")
                expect(message).not.toBeInTheDocument()
            })

            test("Shows an invalid state when the input is invalid", () => {
                render(<BookingForm resDate="" />)
                const dateInput = screen.getByLabelText("Date")
                fireEvent.blur(dateInput)

                expect(dateInput).toHaveClass("invalid")

                const message = screen.queryByText("Please select a valid date.")
                expect(message).toBeInTheDocument()
            })
        })

        describe("Time input", () => {
            test("Shows a valid state when the input is valid", () => {
                render(<BookingForm resTime="17:00" />)
                const timeInput = screen.getByLabelText("Time")
                fireEvent.blur(timeInput)

                expect(timeInput).not.toHaveClass("invalid")

                const message = screen.queryByText("Please select a time.")
                expect(message).not.toBeInTheDocument()
            })

            test("Shows an invalid state when the input is invalid", () => {
                render(<BookingForm resTime="" />)
                const timeInput = screen.getByLabelText("Time")
                fireEvent.blur(timeInput)

                expect(timeInput).toHaveClass("invalid")

                const message = screen.queryByText("Please select a time.")
                expect(message).toBeInTheDocument()
            })
        })

        describe("Guests input", () => {
            test("Shows a valid state when the input is valid", () => {
                render(<BookingForm guests="1" />)
                const guestsInput = screen.getByLabelText("Number of guests")
                fireEvent.blur(guestsInput)

                expect(guestsInput).not.toHaveClass("invalid")

                const message = screen.queryByText("Please enter between 1 and 10 guests.")
                expect(message).not.toBeInTheDocument()
            })

            test("Shows an invalid state when the input is invalid", () => {
                render(<BookingForm guests="100" />)
                const guestsInput = screen.getByLabelText("Number of guests")
                fireEvent.blur(guestsInput)

                expect(guestsInput).toHaveClass("invalid")

                const message = screen.queryByText("Please enter between 1 and 10 guests.")
                expect(message).toBeInTheDocument()
            })
        })

        describe("Form submission", () => {
            test("Submits the reservation when the input is valid", () => {
                const submitForm = jest.fn()
                render(<BookingForm
                    resTime="17:00"
                    resDate="2024-09-26"
                    guests="3"
                    submitForm={submitForm}
                />)

                const submitButton = screen.getByText("Make your reservation")
                fireEvent.click(submitButton)

                expect(submitForm).toHaveBeenCalled()
            })

            test("Doesn't submit the reservation when the input is invalid", () => {
                const submitForm = jest.fn()
                render(<BookingForm
                    resTime=""
                    resDate="224-09-26"
                    guests="300"
                    submitForm={submitForm}
                />)

                const submitButton = screen.getByText("Make your reservation")
                fireEvent.click(submitButton)

                expect(submitForm).not.toHaveBeenCalled()
            })
        })
    })
})

