import axios from "axios";

let  Axios = axios.create({
  baseURL: "http://34.122.252.114:3000",
  responseType: "json"
});

export async function fetchData(url) {
  let response = await Axios.get(url);
  return response
}

export function addHeader({headerName, headerValue}) {
  Axios.defaults.headers.common[headerName] = headerValue;
}