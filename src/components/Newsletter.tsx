"use client";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import usePostRequest from "../api/post/postFormData";
import LoadingOverlay from "./OverlayLoader";

// Define the Zod schema
const newsletterSchema = z.object({
  email: z.string().min(1, "Field is required"),
});

// Define TypeScript type using Zod schema
export type NewsletterType = z.infer<typeof newsletterSchema>;

export default function Newsletter() {
  // Initialize useForm with Zod resolver
  const methods = useForm<NewsletterType>({
    resolver: zodResolver(newsletterSchema),
  });
  // Destructure methods from useForm
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = methods;

  // Define onSubmit handler
  const { mutate, isPending } = usePostRequest();

  const onSubmit: SubmitHandler<NewsletterType> = (data) => {
    mutate({ url: "subscribers.php", payload: data });

    reset();
  };

  // Log watched value

  return (
    // Wrap form in FormProvider to use methods
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Register input into the hook by invoking the "register" function */}
        <input
          {...register("email")}
          className="p-2 rounded-lg border-2 border-slate-200 outline-none w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-[14px] mt-1">
            {errors.email.message}
          </p>
        )}

        {/* Submit button */}
        <button className="w-full mt-3 text-white bg-[#692371] p-2 rounded-lg">
          {isPending ? <LoadingOverlay /> : "Subscribe"}
        </button>
      </form>
    </FormProvider>
  );
}
