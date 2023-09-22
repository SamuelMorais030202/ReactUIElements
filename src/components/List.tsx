import React from "react";

interface IListProps {
  items: string[];
}

const List = ({ items } : IListProps) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;