
import { authentication, createDirectus, rest, readFiles, readFile, readItems } from '@directus/sdk';
const client1 = createDirectus('http://app.kibrito.com:8054').with(rest());
const id = '5b0b3e9e-d048-42bd-83e8-4c2bfc7ddc82'
type ImageModel = {
    id: string,
    blurhash: string | null,
    width: number | null,
    height: number | null,
}
export const getImg = async (idImg) => {
	let response:ImageModel = await client1.request(() => ({
		path: `/assets/${id}`,
		method: 'GET',
		headers: {
			"Authorization": `Bearer ${localStorage.getItem('token')}`
		}
	}));
	return response
}
//message: "You don't have permission to access this."