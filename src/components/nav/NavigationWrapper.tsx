"use client";

import { useAuthContext } from "@/common/hooks/context/useAuthContext";
import AuthNav from "./AuthNav";
import PublicNav from "./PublicNav";
import LoadingNav from "./LoadingNav";

export default function NavigationWrapper() {
  const { isAuthenticated } = useAuthContext();

  return (
    <>
      {isAuthenticated === null ? (
        <LoadingNav />
      ) : isAuthenticated ? (
        <AuthNav />
      ) : (
        <PublicNav />
      )}
    </>
  );
}
