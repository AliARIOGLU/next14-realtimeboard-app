"use client";

import { EmptyBoards } from "./empty-boards";
import { EmptyScreen } from "@/components/empty-screen";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; //TODO: Api call

  if (data?.length === 0 && query.search) {
    return (
      <EmptyScreen
        image="/empty-search.svg"
        title="No results found!"
        label="Try searching for something else"
      />
    );
  }

  if (data?.length === 0 && query.favorites) {
    return (
      <EmptyScreen
        image="/empty-favorites.svg"
        title="No favorite boards!"
        label="Try favoriting a board"
      />
    );
  }

  if (data?.length === 0) {
    return <EmptyBoards />;
  }
};
