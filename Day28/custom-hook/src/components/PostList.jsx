import React from "react";

export default function PostList({ posts, onDelete }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          {post.title}
          <button onClick={() => onDelete(post.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
