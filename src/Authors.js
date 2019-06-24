import React, { useState } from "react";
import Author from "./Author";
import Post from "./Post";

const Authors = ({ fetchAuthors, fetchPosts }) => {
  const [authors, setAuthors] = useState([]);
  const [activeAuthor, setActiveAuthor] = useState(null);
  const [posts, setPosts] = useState([]);

  // Load authors on start
  React.useEffect(() => {
    fetchAuthors().then(setAuthors);
  }, []);

  // Load Posts when author changes
  React.useEffect(() => {
    setPosts([]);

    if (activeAuthor) {
      fetchPosts(activeAuthor.id).then(setPosts);
    }
  }, [activeAuthor]);

  return (
    <div className="authors">
      <div className="author-options">
        <h3>Select an Author:</h3>
        {authors.map(author => (
          <Author
            key={author.id}
            author={author}
            activeAuthor={activeAuthor}
            onSelect={setActiveAuthor}
          />
        ))}
      </div>

      {activeAuthor && (
        <div className="posts">
          <h3>Posts by {activeAuthor.name}</h3>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Authors;
