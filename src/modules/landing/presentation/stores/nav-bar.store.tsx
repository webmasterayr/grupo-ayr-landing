'use client';
import { create } from 'zustand';

type NabvarStore = {
  isOpenMobileMenu: boolean;
  setIsOpenMobileMenu: (isOpen: boolean) => void;
};

export const useLandingNavStore = create<NabvarStore>((set) => ({
  isOpenMobileMenu: false,
  setIsOpenMobileMenu: (isOpen) => set({ isOpenMobileMenu: isOpen })
}));
