"use client";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Footer from "../components/Footer";
import abouthero from "../assets/images/whoweare.jpg";
import usePostRequest from "../api/post/postFormData";
import { Mail, Phone, MapPin } from "lucide-react";
import LoadingOverlay from "../components/OverlayLoader";

const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required and should be at least 2 characters long",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message should be at least 10 characters long" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const { mutate, isPending } = usePostRequest();
  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    mutate({ url: "new_chat.php", payload: data });
    reset();
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {isPending && <LoadingOverlay />}
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <img
            src={abouthero}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let&apos;s Start a Conversation
              </h1>
              <p className="text-lg md:text-xl text-gray-100">
                We&apos;re here to help and answer any questions you might have
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info Section */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#f49d3f] mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-600">
                    Feel free to reach out to us through any of the following
                    methods:
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#f49d3f]/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-[#f49d3f]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Address
                      </h3>
                      <p className="text-gray-600 mt-1">
                        4th Floor ED Building, 47, Marina, Lagos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#f49d3f]/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-[#f49d3f]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Phone
                      </h3>
                      <p className="text-gray-600 mt-1">+2348099981121</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#f49d3f]/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-[#f49d3f]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Email
                      </h3>
                      <p className="text-gray-600 mt-1">
                        info@fortresscapitalng.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div>
                <h2 className="text-3xl font-bold text-[#f49d3f] mb-8">
                  Get in Touch
                </h2>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#692371] focus:border-transparent transition duration-200"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#692371] focus:border-transparent transition duration-200"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="block w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#692371] focus:border-transparent transition duration-200 resize-none h-[200px]"
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-600">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full py-3 px-6 text-white bg-[#692371] rounded-lg hover:bg-[#621f68] transition duration-200 font-medium shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isPending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-[450px] mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126817.31906379169!2d3.124872761549175!3d6.6418035918102225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d3d7eca2707%3A0x4f20cc6cb25f256a!2sED%20Building!5e0!3m2!1sen!2sus!4v1727350957956!5m2!1sen!2sus"
            className="w-full h-full border-none"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
