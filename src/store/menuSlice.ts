import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { menu } from "@/data/menu";
import { MenuItem } from "@/types";

interface MenuState {
  items: MenuItem[];
  filteredItems: MenuItem[];
  selectedCategory: string;
  searchQuery: string;
  loading: boolean;
}

const initialState: MenuState = {
  items: menu,
  filteredItems: menu,
  selectedCategory: "all",
  searchQuery: "",
  loading: false,
};

const menuSlice = createSlice({
  name: "menu",

  initialState,

  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.selectedCategory = action.payload;

      state.filteredItems = state.items.filter((item) => {
        const categoryMatch =
          action.payload === "all" ||
          item.categoryId === action.payload;

        const searchMatch = item.name
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase());

        return categoryMatch && searchMatch;
      });
    },

    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;

      state.filteredItems = state.items.filter((item) => {
        const categoryMatch =
          state.selectedCategory === "all" ||
          item.categoryId === state.selectedCategory;

        const searchMatch = item.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());

        return categoryMatch && searchMatch;
      });
    },

    resetFilters(state) {
      state.selectedCategory = "all";
      state.searchQuery = "";
      state.filteredItems = state.items;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const {
  setCategory,
  setSearchQuery,
  resetFilters,
  setLoading,
} = menuSlice.actions;

export default menuSlice.reducer;
