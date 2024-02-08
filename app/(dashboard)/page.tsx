"use client";

import { useOrganization } from "@clerk/nextjs";
import { BoardList } from "./_components/board-list";
import { EmptyScreen } from "@/components/empty-screen";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const DashboardPage = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyScreen
          image="/elements.svg"
          title="Welcome to board"
          label="Create an organization to get started"
          variant="org"
        />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DashboardPage;
