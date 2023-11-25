import axios from "axios";
import ApiRoutes from "./ApiRoutes";

export const getAllCoursesRequest = async (token) => {
    return await axios.get(ApiRoutes.BASE + ApiRoutes.GET_ALL,
        {
            headers: {
                
                "Access-Control-Allow-Origin": "*",
                Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MDg2Y2ZjOGFjMDE0ZGU0OGMyOThmY2ViODhmMTA1NiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhbGJlcnQiLCJpZCI6IjMiLCJ1bmFtZSI6ImFsYmVydCIsIm5iZiI6MTcwMDg5NzI3NCwiZXhwIjoxNzAwOTgzNjc0LCJpc3MiOiJNeUF1dGhTZXJ2ZXIiLCJhdWQiOiJNeUF1dGhDbGllbnQifQ.pDlYwZ88v_sM-2zCxmD7iGMT-tjnZu1wV8Fgreujw4M"

            }
        }
    ).then(r => r.data.value).catch(err => undefined)
}
