import axios from 'axios'

export default class CourseService {
    static async postLogin(data) {
        const response = await axios.post('http://192.168.1.105:5296/User/User/Login', data)
    }

    static async postSignUp(data) {
        const response = await axios.post('http://192.168.1.105:5296/User/User/SignUp', data)
    }
    
    static async postDelete(data) {
        const response = await axios.post('http://192.168.1.105:5296/User/User/Delete', data)
    }
}