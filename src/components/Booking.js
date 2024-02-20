import BookingForm from "./BookingForm";

function Booking(props) {

    return (
        <BookingForm availableTimes={props.availableTimes} />
    )
}

export default Booking;