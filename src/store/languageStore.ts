import { create } from 'zustand';

interface LanguageState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'es', // Default language
  setLanguage: (lang) => set({ language: lang }),
}));
