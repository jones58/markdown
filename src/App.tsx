import { useState } from "react";
import { marked } from "marked";
import { defaultMarkdown } from "./default-markdown";
marked.setOptions({
  breaks: true,
});

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
        />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(markdown),
          }}
        />
      </div>
    </div>
  );
}

export default App;
