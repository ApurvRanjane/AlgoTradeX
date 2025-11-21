import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/market-news").then((res) => {
      setNews(res.data.data || []);
    });
  }, []);

  return (
    <div>
      <h3 className="title">Market News</h3>

      {news.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        news.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "15px",
              marginBottom: "10px",
              background: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
            }}
          >
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noreferrer">
              Read More →
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default News;
