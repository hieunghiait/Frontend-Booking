//The function uses the axios library to make an HTTP POST request
import axios from '../axios'

/*
    Function: handleLoginApi
    Description: Calls an API to handle login with the provided userEmail and userPassword
    Parameters:
        - userEmail: The email of the user
        - userPassword: The password of the user
    Return:
        - Promise object representing the result of the HTTP request
*/
const handleLoginApi = (userEmail, userPassword) => {
    // Uses axios to make a post request to the login endpoint with the email and password as data
    return axios.post('/api/login', { email: userEmail, password: userPassword });
};
/*
    Function: getAllUsers
    Description: Calls an API to get all users with the provided inputId
    Parameter:
        - inputId: The id of the user
    Return:
        - Promise object representing the result of the HTTP request
*/
const getAllUsers = (inputId) => {
    //template string
    // Uses a template string to construct the URL with the inputId
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/create-new-user', data)
}
export { handleLoginApi, getAllUsers, createNewUserService }