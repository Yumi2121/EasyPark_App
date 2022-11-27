import easyparkAPI from "../config/api";

export async function getBookings() {
	const response = await easyparkAPI.get('/bookings');
	return response.data;
}

export async function createBookings(params) {
	const response = await easyparkAPI.post('/bookings', params, {
		  headers: {
			"Content-Type": "application/json",     
		  },
		},);
	return response.data;
}

export async function getBookingById(id) {
	const response = await easyparkAPI.get(`/bookings/${id}`);
	return response.data;
}

export async function createBooking(newBooking) {
	const response = await easyparkAPI.post('/bookings', newBooking);
	console.log('received new booking from server: ', response.data);
	return response.data;
}

export async function deleteBookingById(id) {
	const response = await easyparkAPI.delete(`/bookings/${id}`);
	return response.data;
}

export async function updateBooking(booking) {
	const response = await easyparkAPI.patch(`/bookings/${booking._id}`, booking);
	console.log('received updated booking from server: ', response.data);
	return response.data;
}

export async function getBookingByUserId(userId) {
	const response = await easyparkAPI.get(`/bookings/${userId}}/all`);
	console.log('received specific user booking history from server: ', response.data);
	return response.data;
}