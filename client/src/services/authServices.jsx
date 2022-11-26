import easyparkAPI from "../config/api";

export async function loginUser(userData) {
	const response = await easyparkAPI.post('/auth/login', userData);
	console.log('User data received: ', response);
	return response.data;
}

export async function logoutUser() {
	return easyparkAPI.get('/auth/logout');
}

export async function registerUser(userInfo) {
	const response = await easyparkAPI.post('/users/register', userInfo);
	console.log('Got new user back from server', response);
	return response.data;
}

// Get loggedInUser from sessionStorage
export function getLoggedInUser() {
	return sessionStorage.getItem('loggedInUser');
}
export function getAdminUser() {
	return sessionStorage.getItem('adminUser');
}

// Store loggedInUser username in local storage
export function setLoggedInUser(user) {
	console.log('setting user: ', user);
	user
		? sessionStorage.setItem('loggedInUser', user)
		: sessionStorage.removeItem('loggedInUser');
}

export function setAdminUser(admin) {
	console.log('setting admin: ', admin);
	admin
		? sessionStorage.setItem('adminUser', admin)
		: sessionStorage.removeItem('adminUser');
}