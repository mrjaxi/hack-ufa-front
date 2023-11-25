import axios from 'axios'

export default class AuthorizationService {
    static async postLogin(data) {
        const response = await axios.post('http://192.168.1.105:5296/User/Login', data).then(item => item.data)
    }

    static async postSignUp(data) {
        const response = await axios.post('http://192.168.1.105:5296/User/SignUp', data)
    }
    
    static async postDelete(data) {
        const response = await axios.post('http://192.168.1.105:5296/User/Delete', data)
    }
}