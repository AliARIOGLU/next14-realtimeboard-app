import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface EmptyScreenProps {
  image: string;
  label: string;
  title: string;
  variant?: "org" | "boards";
}

export const EmptyScreen = ({
  image,
  label,
  title,
  variant,
}: EmptyScreenProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={image}
        alt="empty"
        height={variant === "boards" ? 110 : 160}
        width={variant === "boards" ? 110 : 160}
      />
      {<h2 className="text-2xl font-semibold mt-6">{title}</h2>}
      <p className="text-muted-foreground text-sm mt-2">{label}</p>
      {variant == "org" && (
        <div className="mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Create organization</Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
              <CreateOrganization />
            </DialogContent>
          </Dialog>
        </div>
      )}
      {variant === "boards" && (
        <div className="mt-6">
          <Button size="lg">Create board</Button>
        </div>
      )}
    </div>
  );
};
