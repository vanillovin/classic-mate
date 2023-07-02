import React from 'react';

type TagsProps = {
  tags: string[];
  className: string;
};

function Tags({ tags, className }: TagsProps) {
  return (
    <ul className={`flex flex-wrap items-center gap-1`}>
      {tags.map(tag => (
        <li key={tag} className={`rounded-sm ${className}`}>{tag}</li>
      ))}
    </ul>
  );
}

export default Tags;