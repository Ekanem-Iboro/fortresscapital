// src/store/userStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  fullname: string;
  email: string;
  phoneNumber: string;
  password: string;
};
type Education = {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  description: string;
};

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user", // name of the item in storage
    }
  )
);

type EducationStore = {
  education: Education | null;
  addEducation: (education: Education) => void;
};

export const useEducationStore = create<EducationStore>()(
  persist(
    (set) => ({
      education: null,
      addEducation: (education) => set({ education }),
    }),
    {
      name: "blog", // name of the item in storage
    }
  )
);
