import axios from "axios";

export default class CarService {
    static async getAll() {
        const response = await axios.get('https://myfakeapi.com/api/cars/');
        return response.data.cars
    }
}