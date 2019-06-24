import React, { useState } from "react";

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
          <div id={author.id} key={author.id} className="author">
            <button onClick={() => setActiveAuthor(author)}>
              {author.name}
            </button>
          </div>
        ))}
        <button onClick={() => setActiveAuthor(null)}>None</button>
      </div>

      {activeAuthor && (
        <div className="posts">
          <h3>Posts by {activeAuthor.name}</h3>
          {posts.map(post => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Authors;
