import React from "react";

const Author = ({ author, activeAuthor, onSelect }) => {
  const isActive = activeAuthor && author.id === activeAuthor.id;
  return (
    <div className={isActive ? "author author--active" : "author"}>
      <button onClick={() => onSelect(author)}>{author.name}</button>
    </div>
  );
};

export default Author;
