/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { publicApi } from "..";

const postData = async ({ url, payload }: { url: string; payload: any }) => {
  const response = await fetch(`${publicApi}/${url}`, {
    method: "POST",
    headers:
      payload instanceof FormData ? {} : { "Content-Type": "application/json" },
    body: payload instanceof FormData ? payload : JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

const usePostRequest = () => {
  return useMutation({
    mutationFn: postData,
    onSuccess: (data: any) => {
      toast.success(data?.message);
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });
};

export default usePostRequest;
// "Content-Type": "multipart/form-data"
