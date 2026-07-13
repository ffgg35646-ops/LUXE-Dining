import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "@/store";
import {
  login,
  logout,
  updateProfile,
  setLoading,
} from "@/store/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user, isAuthenticated, loading } = useSelector(
    (state: RootState) => state.auth
  );

  return {
    user,
    isAuthenticated,
    loading,

    login: (payload: Parameters<typeof login>[0]) =>
      dispatch(login(payload)),

    logout: () => dispatch(logout()),

    updateProfile: (
      payload: Parameters<typeof updateProfile>[0]
    ) => dispatch(updateProfile(payload)),

    setLoading: (value: boolean) =>
      dispatch(setLoading(value)),
  };
};
