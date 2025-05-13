/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { publicApi } from "..";

const postData = async ({ url, payload }: { url: string; payload: any }) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch(`${publicApi}/${url}`, {
      method: "POST",
      signal: controller.signal,
      headers:
        payload instanceof FormData
          ? {}
          : {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
            },
      body: payload instanceof FormData ? payload : JSON.stringify(payload),
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Network error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`API post error for ${url}:`, error.message);
      throw error;
    }
    throw new Error("Unknown error occurred during API post");
  }
};

const usePostRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postData,
    onSuccess: (data: any, variables) => {
      toast.success(data?.message || "Operation completed successfully");

      // Invalidate relevant queries based on the URL pattern
      const url = variables.url;
      if (url.includes("testimonials")) {
        queryClient.invalidateQueries({ queryKey: ["getTestimonials"] });
      } else if (url.includes("articles") || url.includes("news")) {
        queryClient.invalidateQueries({ queryKey: ["getArticles"] });
      } else if (url.includes("team") || url.includes("member")) {
        queryClient.invalidateQueries({ queryKey: ["getTeamMembers"] });
        queryClient.invalidateQueries({ queryKey: ["getBoardDirectors"] });
      } else if (url.includes("report")) {
        queryClient.invalidateQueries({ queryKey: ["getReports"] });
      }
    },
    onError: (error: any) => {
      const errorMessage =
        error?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
      console.error("Mutation error:", error);
    },
  });
};

export default usePostRequest;
// "Content-Type": "multipart/form-data"
