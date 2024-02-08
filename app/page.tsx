import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <p>This is a screen for authenticated</p>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
