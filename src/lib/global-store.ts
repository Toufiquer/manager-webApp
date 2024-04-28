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
}));
