import React, { useState } from 'react';
import './App.css';

const articles = [
  {
  title:"Article 1: Understanding React Hooks",
  content:"React Hooks are functions that let you use state and other React features without writing a class."
  },
  {
  title:"Article 2: A Guide to JavaScript ES6",
  content:"ES6 introduced many new features to JavaScript, including arrow functions, classes, and template literals."
  },
  {
  title:"Article 3: CSS Flexbox and Grid Layouts",
  content:"Flexbox and Grid are powerful layout systems in CSS that help create responsive web designs."
  },
  {
  title:"Article 4: Building RESTful APIs with Node.js",
  content:"Node.js provides a robust platform for building RESTful APIs using frameworks like Express."
  },
  {
  title:"Article 5: Introduction to TypeScript not just for JavaScript developers",
  content:"TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, offering static typing and advanced features."
  }
];

function App() {
  const [query, setQuery] = useState('');

  //Hoighlight matched keyword in article titles
  const highlightText = (text, keyword) => {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  //Filter articles based on search query
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
        <div className='container'>
        <h1>Article Search</h1>
        <input
          type="text"
          placeholder="Search articles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <p className="match-count">
            Found in <strong>{filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}</strong>. 
          </p>)}

        <div className="articles">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => {
              const combinedHTML = `<h2>${highlightText(article.title, query)}</h2><p>${highlightText(article.content, query)}</p>`;
              return (
                <div key={index} className="article" dangerouslySetInnerHTML={{ __html: combinedHTML }}></div>
              );
            })
          ) : (
            <p>No articles found.</p>
          )}
      </div>
    </div>
    </div>
  );
}

export default App;
