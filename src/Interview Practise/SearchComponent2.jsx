import { useEffect, useMemo, useState } from "react";

// fetch dummy product api
// create an search input
// filter products in search auto complete
// shows filtered products as listitem
// onclick of item show the product details

const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const onChangeSearchHandler = (e) => {
    console.log("e.target.value", e.target.value);
    setSearchInput(e.target.value);
    setShowDropdown(true);
  };

  const normalizedProducts = useMemo(() => {
    console.log("Normalizing Products");
    return products.map((product) => ({
      ...product,
      normalizedTitle: product.title.toLowerCase(),
    }));
  }, [products]);

  const filteredProduct = useMemo(() => {
    console.log("Filtering Products");

    const query = searchInput.trim().toLowerCase();
    if (!query) {
      return [];
    }
    return normalizedProducts.filter((product) =>
      product.normalizedTitle.includes(query),
    );
  }, [normalizedProducts, searchInput]);

  const handleSelectedProduct = (product) => {
    setSelectedProduct(product);
    setSearchInput("");
    setShowDropdown(false);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSelectedProduct(null);
    setShowDropdown(false);
  };

  useEffect(() => {
    console.log("Calling APi");
    const fetchProducts = async () => {
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

        setProducts(data?.products ?? []);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

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
        value={searchInput}
        onChange={onChangeSearchHandler}
      />
      <button
        style={{
          borderRadius: "5px",
          padding: "13px",
          margin: "10px",
          width: "40px",
          cursor: "pointer",
          backgroundColor: "green",
          color: "white",
        }}
        onClick={handleClearSearch}
      >
        {" "}
        X
      </button>

      {showDropdown &&
        searchInput.trim() &&
        (filteredProduct.length > 0 ? (
          filteredProduct.map((product) => (
            <div
              key={product.id}
              onClick={() => handleSelectedProduct(product)}
            >
              {product.title}
            </div>
          ))
        ) : (
          <p>No Products Found</p>
        ))}

      {selectedProduct && (
        <div key={selectedProduct.id}>
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
              src={selectedProduct.images[0]}
              alt=""
              height={250}
              width={250}
              style={{ objectFit: "contain", borderBottom: "1px solid grey" }}
            />
            <h3>
              {`${selectedProduct.title} $: ${selectedProduct.price}`}{" "}
              <span>{`Rating: ${selectedProduct.rating}`}</span>
            </h3>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
