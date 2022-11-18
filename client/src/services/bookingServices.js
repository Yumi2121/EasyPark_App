import easyparkAPI from "../config/api";

export async function getBookings() {
	const response = await easyparkAPI.get('/bookings');
	return response.data;
}

export async function addBooking(newBooking) {
	const response = await easyparkAPI.post('/bookings', newBooking);
	console.log('received new booking from server: ', response.data);
	return response.data;
}

export async function deleteBooking(id) {
	const response = await easyparkAPI.delete(`/bookings/${id}`);
	return response.data;
}

export async function updateBooking(booking) {
	const response = await easyparkAPI.patch(`/bookings/${booking._id}`, booking);
	console.log('received updated booking from server: ', response.data);
	return response.data;
}