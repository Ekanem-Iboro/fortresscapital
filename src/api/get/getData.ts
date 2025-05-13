import { useQuery } from "@tanstack/react-query";
import { publicApi } from "..";

const getData = async ({ url }: { url: string }) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch(`${publicApi}/${url}`, {
      method: "GET",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(
        `Network response error: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`API fetch error for ${url}:`, error.message);
      throw error;
    }
    throw new Error("Unknown error occurred during API fetch");
  }
};

// Common query options for better performance
const commonQueryOptions = {
  staleTime: 1000 * 60 * 60, // 1 hour
  gcTime: 1000 * 60 * 60 * 2, // 2 hours
  retry: 2,
  retryDelay: (attemptIndex: number) =>
    Math.min(1000 * 2 ** attemptIndex, 30000),
};

export const useGetTestimonials = (url: string) => {
  return useQuery({
    queryKey: ["getTestimonials", url],
    queryFn: () => getData({ url }),
    ...commonQueryOptions,
  });
};

export const useGetTeamMembers = (url: string) => {
  return useQuery({
    queryKey: ["getTeamMembers", url],
    queryFn: () => getData({ url: `${url}?designation_id=8` }),
    ...commonQueryOptions,
  });
};

export const useGetBoardDirectors = (url: string) => {
  return useQuery({
    queryKey: ["getBoardDirectors", url],
    queryFn: () => getData({ url: `${url}?designation_id=7` }),
    ...commonQueryOptions,
  });
};

export const useGetReports = (url: string) => {
  return useQuery({
    queryKey: ["getReports", url],
    queryFn: () => getData({ url }),
    ...commonQueryOptions,
  });
};

export const useGetArticles = (url: string) => {
  return useQuery({
    queryKey: ["getArticles", url],
    queryFn: () => getData({ url }),
    ...commonQueryOptions,
  });
};
