import { API_HOST } from "@/utils/constants";

export async function getVacancies(lng) {
  try {
    const res = await fetch(`${API_HOST}/vacancies?locale=${lng}`, {
      cache: "force-cache",
      headers: {
        "Accept-Language": `${lng}`,
      },
    });

    return res.json();
  } catch (error) {
    return error;
  }
}

export async function getVacancy(id, lng) {
  try {
    console.log(lng);

    const res = await fetch(`${API_HOST}/vacancies/${id}?locale=${lng}`, {
      cache: "force-cache",
      headers: {
        "Accept-Language": `${lng}`,
      },
    });

    console.log(res.body);

    return res.json();
  } catch (error) {
    return error;
  }
}
