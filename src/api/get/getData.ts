import { useQuery } from "@tanstack/react-query";
import { publicApi } from "..";

const getData = async ({ url }: { url: string }) => {
  const response = await fetch(`${publicApi}/${url}`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const useGetTestimonials = (url: string) => {
  return useQuery({
    queryKey: ["getTestimonials", url],
    queryFn: () => getData({ url }),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
export const useGetTeamMembers = (url: string) => {
  return useQuery({
    queryKey: ["getTeamMembers", url],
    queryFn: () => getData({ url: `${url}?designation_id=8` }),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
export const useGetBoardDirectors = (url: string) => {
  return useQuery({
    queryKey: ["getBoardDirectors ", url],
    queryFn: () => getData({ url: `${url}?designation_id=7` }),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useGetReports = (url: string) => {
  return useQuery({
    queryKey: ["getReports ", url],
    queryFn: () => getData({ url }),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
export const useGetArticles = (url: string) => {
  return useQuery({
    queryKey: ["getArticles ", url],
    queryFn: () => getData({ url }),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
