import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "@/store";
import {
  resetFilters,
  setCategory,
  setLoading,
  setSearchQuery,
} from "@/store/menuSlice";

export const useMenu = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    items,
    filteredItems,
    selectedCategory,
    searchQuery,
    loading,
  } = useSelector((state: RootState) => state.menu);

  return {
    items,
    filteredItems,
    selectedCategory,
    searchQuery,
    loading,

    setCategory: (category: string) =>
      dispatch(setCategory(category)),

    setSearchQuery: (query: string) =>
      dispatch(setSearchQuery(query)),

    resetFilters: () =>
      dispatch(resetFilters()),

    setLoading: (value: boolean) =>
      dispatch(setLoading(value)),
  };
};
