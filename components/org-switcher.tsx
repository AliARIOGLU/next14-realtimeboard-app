import { OrganizationSwitcher } from "@clerk/nextjs";

interface OrganizationSwitcherComponentProps {
  maxWidth?: string;
}

export const OrganizationSwitcherComponent = ({
  maxWidth = "",
}: OrganizationSwitcherComponentProps) => {
  return (
    <OrganizationSwitcher
      hidePersonal
      appearance={{
        elements: {
          rootBox: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth,
          },
          organizationSwitcherTrigger: {
            padding: "6px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #E5E7EB",
            justifyContent: "space-between",
            backgroundColor: "white",
          },
        },
      }}
    />
  );
};
