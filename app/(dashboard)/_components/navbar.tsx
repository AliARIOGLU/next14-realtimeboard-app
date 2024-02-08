"use client";

import { UserButton, useOrganization } from "@clerk/nextjs";
import { SearchInput } from "./search-input";
import { OrganizationSwitcherComponent } from "@/components/org-switcher";
import { InviteButton } from "./invite-button";

export const Navbar = () => {
  const { organization } = useOrganization();

  return (
    <div className="flex items-center p-5 gap-x-4">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcherComponent maxWidth="376px" />
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
};
