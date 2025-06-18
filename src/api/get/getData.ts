import { useQuery } from "@tanstack/react-query";
import { publicApi } from "..";
import axios from "axios";

const getData = async ({ url }: { url: string }) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

    const response = await axios.get(`${publicApi}/${url}`, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    });

    clearTimeout(timeoutId);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`API fetch error for ${url}:`, error.message);
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Unknown error occurred during API fetch");
  }
};

export const useGetTestimonials = (url: string) => {
  return useQuery({
    queryKey: ["getTestimonials", url],
    queryFn: () => getData({ url }),
  });
};

export const useGetTeamMembers = (url: string) => {
  return useQuery({
    queryKey: ["getTeamMembers", url],
    queryFn: () => getData({ url: `${url}?designation_id=8` }),
  });
};

export const useGetBoardDirectors = (url: string) => {
  return useQuery({
    queryKey: ["getBoardDirectors", url],
    queryFn: () => getData({ url: `${url}?designation_id=7` }),
  });
};

export const useGetReports = (url: string) => {
  return useQuery({
    queryKey: ["getReports", url],
    queryFn: () => getData({ url }),
  });
};

export const useGetArticles = (url: string) => {
  return useQuery({
    queryKey: ["getArticles", url],
    queryFn: () => getData({ url }),
  });
};
