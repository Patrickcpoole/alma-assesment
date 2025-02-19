import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import { useAuthContext } from "@/common/hooks/context/useAuthContext";
const AuthNav = () => {
  const { logout } = useAuthContext();
  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <span className="text-4xl font-bold">almă</span>
          </Link>
          <div className="flex space-x-8">
            <Button href="/leads" size="lg">
              Go to Dashboard
              <ArrowRightIcon width="22" height="22" />
            </Button>
            <Button
              onClick={() => {
                logout();
              }}
              size="lg"
              variant="outline"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthNav;
