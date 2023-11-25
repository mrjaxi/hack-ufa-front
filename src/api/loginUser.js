import axios from "axios";
import ApiRoutes from "./ApiRoutes";

export const loginRequest = async (email, password) => {
    return await axios.post(ApiRoutes.BASE + ApiRoutes.LOGIN,
        {
            login: email,
            password: password
        },
        {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }
    ).then(r => r.value.token).catch(err => undefined)
}
