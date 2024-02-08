"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

import { EmptyBoards } from "./empty-boards";
import { EmptyScreen } from "@/components/empty-screen";
import { BoardCard } from "./board-card";
import { NewBoardButton } from "./new-board-button";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const boards = useQuery(api.boards.get, { orgId, ...query });

  // in convex when data is undefined means pending state
  if (boards === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favorite boards" : "Team boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (boards?.length === 0 && query.search) {
    return (
      <EmptyScreen
        image="/empty-search.svg"
        title="No results found!"
        label="Try searching for something else"
      />
    );
  }

  if (boards?.length === 0 && query.favorites) {
    return (
      <EmptyScreen
        image="/empty-favorites.svg"
        title="No favorite boards!"
        label="Try favoriting a board"
      />
    );
  }

  if (boards?.length === 0) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorite boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {boards?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};
