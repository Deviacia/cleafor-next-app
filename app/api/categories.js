import { API_HOST } from "@/utils/constants";

export async function getCategories() {
  try {
    const res = await fetch(`${API_HOST}/categories`);

    return res.json();
  } catch (error) {
    return error;
  }
}

export async function getCategory(id) {
  try {
    const res = await fetch(`${API_HOST}/categories/${id}`);

    return res.json();
  } catch (error) {
    return error;
  }
}
