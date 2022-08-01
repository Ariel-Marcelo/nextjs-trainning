import React from "react";

type CardListProps = {
  children: JSX.Element | JSX.Element[];
}

const CardList = ({ children }: CardListProps) => {
  return <div className="card-list">{children}</div>;
}

export { CardList };