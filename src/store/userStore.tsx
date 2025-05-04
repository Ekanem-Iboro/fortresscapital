// src/store/userStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  fullname: string;
  email: string;
  phoneNumber: string;
  password: string;
};

type TeamMember = {
  id: string;
  name: string;
  designation_id: string;
  meta_title: string;
  photo: string;
  banner: string;
  slug: string;
  detail: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  degree: string;
  practice_location: string;
  meta_description: string;
  meta_keyword: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  instagram: string;
  youtube: string;
  flickr: string;
  google_plus: string;
  status: string;
};

type News = {
  news_id: string;
  news_title: string;
  news_slug: string;
  news_content: string;
  news_content_short: string;
  news_date: string;
  photo: string;
  category_id: string;
  publisher: string;
  total_view: string;
  meta_title: string;
  meta_keyword: string;
  meta_description: string;
};

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  teamMember: TeamMember | null;
  setTeamMembers: (teamMember: TeamMember) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      teamMember: null,
      setTeamMembers: (teamMember) => set({ teamMember }),
    }),
    {
      name: "user", // name of the item in storage
    }
  )
);

type EducationStore = {
  education: News | null;
  addEducation: (education: News) => void;
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
