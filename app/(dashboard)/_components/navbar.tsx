"use client";

import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="flex items-center p-5 gap-x-4">
      <div className="hidden lg:flex lg:flex-1">{/* TODO: Add Search */}</div>
      <UserButton />
    </div>
  );
};
