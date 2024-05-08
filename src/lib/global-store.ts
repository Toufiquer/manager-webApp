/*
|-----------------------------------------
| setting up GlobalStore for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, April, 2024
|-----------------------------------------
*/

"use client";

import { create } from "zustand";

interface useGlobalStoreType {
  isRestaurant: boolean;
  setIsRestaurant: (payload: any) => void;
  currentItem: string;
  setCurrentItem: (payload: any) => void;
  apiData: any;
  setApiData: (payload: any) => void;
  mutationData: any;
  setMutationData: (payload: any) => void;
  dashboardData: any;
  setDashboardData: (payload: any) => void;
  boardTask: {
    data: {
      id: string;
      title: string;
      description?: string | undefined;
      status?: string;
      lstUpdate?: string | Date | "";
    }[];
    statusLst: { id: string; title: string; description?: string }[];
  };
  setBoardTask: (payload: any) => void;
}
export const useGlobalStore = create<useGlobalStoreType>((set) => ({
  isRestaurant: true,
  setIsRestaurant: (payload) => set(() => ({ isRestaurant: payload })),
  currentItem: "",
  setCurrentItem: (payload) => set(() => ({ currentItem: payload })),
  apiData: [],
  setApiData: (payload) => set(() => ({ apiData: payload })),
  mutationData: {},
  setMutationData: (payload) => set(() => ({ mutationData: payload })),
  dashboardData: {},
  setDashboardData: (payload) => set(() => ({ dashboardData: payload })),
  boardTask: {
    data: [],
    statusLst: [
      { id: "1", title: "Task" },
      { id: "2", title: "Inprogress" },
      { id: "3", title: "Done" },
    ],
  },
  setBoardTask: (payload) => set(() => ({ boardTask: payload })),
}));
