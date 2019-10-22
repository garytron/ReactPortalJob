import axios from 'axios';

export const getCompanies = () => axios.get(`${process.env.API_URL}companies`);
export const getJobs = () => axios.get(`${process.env.API_URL}jobs`);
/*export const getCompanies = () => {
    const {data} = await axios.get('http://localhost:1337/companies');
    console.log(data);

    return data;
}*/


/*class Api {
    async getCompanies() {
        const {data} = await axios.get('http://localhost:1337/companies');
        return data;
    }
    async getMovies() {
        const query = await fetch(`${BASE_API}list_movies.json`);
        const {data} = await query.json();
        return data.movies;
    }
}

export default new Api();*/