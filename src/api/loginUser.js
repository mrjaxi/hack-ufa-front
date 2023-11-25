import axios from "axios";
import ApiRoutes from "./ApiRoutes";

export const loginUser = async (email, password) => {
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
    ).then(r => r.data.value).catch(err => undefined)
}
