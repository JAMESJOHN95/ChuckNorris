import { commonApi } from "./CommonApi";
import { Server_Api } from "./ServerUrl";


export const registerApi = async (reqbody) => {
  return await commonApi("POST", `${Server_Api}/register`, reqbody)}

  export const getapi = async (reqbody) => {
    return await commonApi("get", `${Server_Api}/register`, reqbody)}