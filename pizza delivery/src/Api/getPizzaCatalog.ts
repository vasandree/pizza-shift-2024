import axiosInstance from "./axiosInstance.ts";

export const getPizzaCatalog = async () => {
    try{
        let response = await axiosInstance.get("/pizza/catalog");

        console.log(response.data);

        if(response.data.success) {
            return response.data.catalog;
        }
        else{
            console.error(response.data.reason);
        }
    }
    catch(error){
        console.error(error);
    }
}