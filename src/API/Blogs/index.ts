import axios from "axios";

import { API } from "../../Utils/constants";
import { validToken } from "../../Utils/common.utils";

export async function fetchAllBlogs() {
  const response = await axios
    .get(`${API.BLOGS_BASE_URL}/wp-json/wp/v2/posts/?_embed`, {
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
