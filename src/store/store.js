import { create } from "zustand";
import data from "../data.json";

const useDataStore = create((set) => ({
  data,
  languageFilters: [],
  addLanguages: (language) =>
    set((state) => ({
      languageFilters: [...state.languageFilters, language],
    })),
  removeLanguages: (language) =>
    set((state) => ({
      languageFilters: state.languageFilters?.filter((ele) => ele != language),
    })),
  clearLanguages: () =>
    set((state) => ({
      languageFilters: [],
    })),
}));

export default useDataStore;
