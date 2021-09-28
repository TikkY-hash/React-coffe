import axios from "axios";

export const getRequest = async <T>(http : string) : Promise<T> => {
   return axios.get(http).then(value => value.data)
}