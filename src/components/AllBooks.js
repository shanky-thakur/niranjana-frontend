import React from "react";
import { useState } from "react";
import BookComponent from "./BookComponent";

const AllBooks = () => {

  const [articles, setArticles] = useState([]);
  const [found, setFound] = useState("false");

  function updateFound() {
    if (found === "true") {
      setFound("false");
    } else {
      setFound("true");
    }
  }

  async function showBooks(e) {
    e.preventDefault();
    let result = await fetch("http://127.0.0.1:4500/book/showBooks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    try {
      var resp = await result.json();
      updateFound();
      resp.forEach(element => {
        articles.push(element);
      });
      setArticles(articles);
      console.log(articles);
    } catch {
      alert("some error occurred");
    }
  }

  return found === "false" ? (
    <>
      <div className="text-center" style={{ marginTop: "8%" }}>
        <h1 className="text-center" style={{ color: "white" }}>
          Get Started.....
        </h1>
        <button
          type="submit"
          onClick={showBooks}
          className="btn mb-3 text-center"
          style={{
            backgroundColor: "red",
            color: "white",
            border: "1px solid white",
          }}
        >
          get started
        </button>
      </div>
    </>
  ) : (
    <>
      <div>
        <h1 className="text-center" style={{ color: "white" ,marginBottom: "3%"}}>
          Collection
        </h1>
        <div
          className="container mx-1 my-1"
        >
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <BookComponent
                    title={element.title ? element.title : "anonymous"}
                    link={!element.link ? "unknown" : element.link}
                    tag={"collections"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;
