import axios from "axios";
import { API } from "../../Utils/constants";

export async function fetchAllProducts() {
  const response = await axios
    .get(`${API.BASE_URL}/wp-json/wc/v3/products`, {
      params: {
        consumer_key: API.CONSUMER_KEY,
        consumer_secret: API.CONSUMER_SECRET,
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
