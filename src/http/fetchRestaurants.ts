import { authentication, createDirectus, rest, readFiles, readFile, readItems } from '@directus/sdk';
const client1 = createDirectus('http://app.kibrito.com:8054').with(rest());


export const getRest = async () => {
	let response = await client1.request(() => ({
		path: `/items/restaurants?fields=translations.*`,
		method: 'GET',
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`
		}
	}));
	return response
}