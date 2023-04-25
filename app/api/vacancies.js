import { API_HOST } from "@/utils/constants";

export async function getVacancies(count) {
  try {
    const res = await fetch(`${API_HOST}/vacancies`);

    return res.json();
  } catch (error) {
    return error;
  }
}

export async function getVacancy(id) {
  try {
    const res = await fetch(`${API_HOST}/vacancies/${id}`);

    return res.json();
  } catch (error) {
    return error;
  }
}
