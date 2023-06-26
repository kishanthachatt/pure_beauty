import axios from "axios";

import { API } from "../../Utils/constants";
import { LoginParams } from "./Login.interface";

export async function login(params: LoginParams) {
  const response = await axios
    .post(`${API.LOGIN_TOKEN_BASE_URL}/wp-json/api/v1/token`, {
      username: params.username,
      password: params.password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
  return response;
}
