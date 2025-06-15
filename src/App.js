
import React, { useState } from "react";
import { API } from "aws-amplify";
import "./App.css";

function App() {
  const [comment, setComment] = useState("");
  const [reply, setReply] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await API.post("aiapi", "/reply", {
      body: { comment },
    });
    setReply(response.reply);
  };

  return (
    <div className="App">
      <h1>Instagram Comment AI Responder</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter Instagram comment..."
        />
        <button type="submit">Generate Reply</button>
      </form>
      {reply && <p><strong>AI Reply:</strong> {reply}</p>}
    </div>
  );
}

export default App;
