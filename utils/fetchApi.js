import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': "b335d405dcmsh6cf38be529fa823p15aa99jsn033d9a20fbc6",
        },
    });

    return data;
}