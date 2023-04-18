//The function uses the axios library to make an HTTP POST request
import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}
export { handleLoginApi }