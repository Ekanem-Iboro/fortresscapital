/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { publicApi } from "..";
import axios from "axios";

const postData = async ({ url, payload }: { url: string; payload: any }) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 30 second timeout

    const config = {
      signal: controller.signal,
      headers:
        payload instanceof FormData
          ? { "Content-Type": "multipart/form-data" }
          : {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache",
            },
    };

    const response = await axios.post(
      `${publicApi}/${url}`,
      payload instanceof FormData ? payload : payload,
      config
    );

    clearTimeout(timeoutId);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`API post error for ${url}:`, error.message);
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("Unknown error occurred during API post");
  }
};

// General post request (for other cases)
export const usePostRequest = () => {
  return useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      toast.success(data?.message || "Operation completed successfully");
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
