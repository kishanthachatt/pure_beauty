import axios from "axios";

import { API } from "../../Utils/constants";
import { validToken } from "../../Utils/common.utils";

export async function fetchAllBlogs() {
  const response = await axios
    .get(`${API.BASE_URL}/wp-json/wp/v2/posts/?_embed`, {
      headers: {
        Authorization: "Bearer " + validToken(),
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
}

export async function fetchBlog(id: number) {
  const response = await axios
    .get(`${API.BASE_URL}/wp-json/wp/v2/posts/${id}/?_embed`, {
      headers: {
        Authorization: "Bearer " + validToken(),
      },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
}
