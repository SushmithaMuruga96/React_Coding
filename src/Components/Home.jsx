import React, { useState } from "react";
const Home = () => {
  const [searchList, setSearchList] = useState([]);
  const [openlist, setOpenList] = useState("");

  const List = ["apple", "Mango", "pineapple", "banana"];

  const handleSearch = (event) => {
    setOpenList(event.target.value);
    const slist = List.filter((item) =>
      item.toLowerCase().includes(event.target.value)
    );
    setSearchList(slist);
  };
  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        name="search"
        value={openlist}
        style={{ border: "1px solid black" }}
        onChange={handleSearch}
      />
      {openlist !== "" && (
        <ul style={{ border: "1px solid balck" }}>
          {searchList.map((item) => (
            <li key={`item-${item}`}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
