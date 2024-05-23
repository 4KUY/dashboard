
import { authentication, createDirectus, rest, readFiles} from '@directus/sdk';

type AuthResponse = {
	data: {
		access_token: string;
		refresh_token: string;
		expires: number; 
	};
};
const client = createDirectus<AuthResponse>('http://app.kibrito.com:8054').with(authentication('json')).with(rest());
export const manualResult = async (email: string, password: string) => {
	let response = await client.login(email, password);
	localStorage.setItem('token', response.access_token)
}
const client1 = createDirectus('http://app.kibrito.com:8054').with(rest());

export const manualResult1 = async () => {
	let response = await client1.request(() => ({
		path: `/users/me?fields=id&fields=first_name&fields=last_name&fields=avatar`,
		method: 'GET',
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`
		}
	}));
	return response
}


export const logoutAc = () => { 
	client.logout() 
	localStorage.removeItem("token");
}

export default manualResult


