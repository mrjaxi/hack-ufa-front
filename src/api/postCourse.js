import axios from "axios";
import ApiRoutes from "./ApiRoutes";

export const loginRequest = async (title, description, subject, photoData, userId) => {
    return await axios.post(ApiRoutes.BASE + ApiRoutes.GET_ALL,
        {
            title: title,
            description: description,
            subject: subject,
            photoData: photoData,
            createdBy: userId
        }
    ).catch(err => undefined)
}
