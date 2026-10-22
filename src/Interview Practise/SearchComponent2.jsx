import { useEffect, useState } from "react";

//fetch dummy product api
// create an search input
// filter products in search auto complete
// shows filtered products as listitem
// onclick of item show the product details

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [filterSearchByName, setFilterSearchByName] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (e) => {
    const { value } = e.target;
    setSearchText(value);
    const searchByValue = fruits.filter((x) =>
      x.title.toLowerCase().includes(value.toLowerCase()),
    );
    setFilterSearchByName(searchByValue);
  };

  const handleOnClickItems = (product) => {
    console.log("product", product);
    setSearchResults([product]);
    setSearchText("");
  };

  useEffect(() => {
    console.log("Calling APi");
    const fetchFruits = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/groceries",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Promises");
        }

        console.log(response, "response");
        const data = await response.json();
        console.log(data, "data");

        setFruits(data?.products);
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    };
    fetchFruits();
  }, []);
  //create inputbox and search button
  //show list of items that matches the input
  //onClick of search button sent an API call and display list

  console.log(searchResults, "searchResults");

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <input
        style={{
          width: "500px",
          height: "25px",
          borderRadius: "5px",
          padding: "10px",
        }}
        type="text"
        name="search"
        placeholder="search for products..."
        value={searchText}
        onChange={updateSearchResults}
      />

      {searchResults.length == 0 && (
        <ul>
          {filterSearchByName.map((x) => (
            <li key={x.id}>
              <input
                type="button"
                onClick={() => handleOnClickItems(x)}
                value={` ${x.title} in  ${x.tags[0]}`}
              />
            </li>
          ))}
        </ul>
      )}

      {searchResults?.map((product) => (
        <div key={product.id}>
          <p>Search Results: </p>

          <div
            style={{
              border: "1px solid grey",
              width: "250px",
              margin: "0 auto",
              borderRadius: "5px",
              padding: "5px",
              textAlign: "center",
            }}
          >
            <img
              src={product.images[0]}
              alt=""
              height={250}
              width={250}
              style={{ objectFit: "contain", borderBottom: "1px solid grey" }}
            />
            <h3>
              {`${product.title} $: ${product.price}`}{" "}
              <span>{`Rating: ${product.rating}`}</span>
            </h3>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchComponent;
