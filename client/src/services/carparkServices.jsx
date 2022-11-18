import easyparkAPI from "../config/api";

export async function getCarparks() {
	const response = await easyparkAPI.get('/carparks');
	return response.data;
}

export async function addCarpark(newCarpark) {
	const response = await easyparkAPI.post('/carparks', newCarpark);
	console.log('received new booking from server: ', response.data);
	return response.data;
}

export async function deleteCarpark(id) {
	const response = await easyparkAPI.delete(`/carparks/${id}`);
	return response.data;
}

export async function updateCarparks(carpark) {
	const response = await easyparkAPI.patch(`/carparks/${carpark._id}`, carpark);
	console.log('received updated carpark from server: ', response.data);
	return response.data;
}