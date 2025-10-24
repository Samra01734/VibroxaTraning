import React, { useState, useMemo, useCallback } from "react";
import useFetch from "../hooks/useFetch";
import PostList from "../components/PostList";

export default function Posts() {
  const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () => posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase())),
    [posts, search]
  );

  const handleDelete = useCallback((id) => {
    alert(`Deleted post ${id}`);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <PostList posts={filtered} onDelete={handleDelete} />
    </div>
  );
}
