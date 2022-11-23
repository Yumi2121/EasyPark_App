import easyparkAPI from "../config/api";

export async function getBookings() {
	const response = await easyparkAPI.get('/api/bookings');
	return response.data;
}

export async function getBookingById() {
	const response = await easyparkAPI.get(`/api/bookings/${id}`);
	return response.data;
}

export async function createBooking(newBooking) {
	const response = await easyparkAPI.post('/api/bookings', newBooking);
	console.log('received new booking from server: ', response.data);
	return response.data;
}

export async function deleteBookingById(id) {
	const response = await easyparkAPI.delete(`/api/bookings/${id}`);
	return response.data;
}

export async function updateBooking(booking) {
	const response = await easyparkAPI.patch(`/api/bookings/${booking._id}`, booking);
	console.log('received updated booking from server: ', response.data);
	return response.data;
}

export async function getBookingByUserId(userId) {
	const response = await easyparkAPI.get(`/api/bookings/${userId}}/all`, booking);
	console.log('received specific user booking history from server: ', response.data);
	return response.data;
}