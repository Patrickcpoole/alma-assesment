import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import ArrowRightIcon from "../icons/ArrowRightIcon";

const PublicNav = () => {
  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <span className="text-4xl font-bold">almă</span>
          </Link>
          <div className="flex space-x-8">
            <Button href="/assessment" size="lg">
              Get Assessment
              <ArrowRightIcon width="22" height="22" />
            </Button>
            <Button href="/login" size="lg" variant="outline">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNav;
