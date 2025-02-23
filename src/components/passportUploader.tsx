"use client";

import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

const PassPaportUplod: React.FC = () => {
  const [passport, setPassport] = useState<string | null>(null);

  const methods = useForm();
  const { handleSubmit, reset, register } = methods;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPassport(imageUrl);

      // Create a FormData object to submit the file
      const formData = new FormData();
      formData.append("profile_picture", file);

      // Handle form submission
      handleSubmit((data) => {
        console.log("Form submitted with data:", data);
        // Optionally reset the form after submission
        reset();
      })(); // Calling handleSubmit directly
    }
  };

  return (
    <FormProvider {...methods}>
      <form>
        <div className="flex items-center gap-5 mt-6">
          <label htmlFor="profile-pic-input" className="cursor-pointer">
            <div className="relative w-[200px] h-[300px] rounded-md border border-gray-300 overflow-hidden">
              {passport ? (
                <img
                  src={passport}
                  alt="Profile"
                  className="w-[200px] h-[300px]  object-cover"
                />
              ) : (
                <div className="w-full h-full text-gray-400 flex justify-center items-center bg-gray-200  px-8 text-center">
                  Please Affix your passport photograph here.
                </div>
              )}
            </div>
            <input
              type="file"
              id="profile-pic-input"
              className="hidden"
              {...register("profile_picture")}
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </form>
    </FormProvider>
  );
};

export default PassPaportUplod;
