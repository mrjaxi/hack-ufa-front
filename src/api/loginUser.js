import axios from "axios";
import ApiRoutes from "./ApiRoutes";

export const loginRequest = async (email, password) => {
    return await axios.post(ApiRoutes.BASE + ApiRoutes.LOGIN,
        {
            username: email,
            password: password
        }
    ).then(r => r.data.token).catch(err => undefined)
}
