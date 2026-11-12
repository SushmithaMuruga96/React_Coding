import { useEffect, useId, useMemo, useState } from "react";
import "./Search.css";

// fetch dummy product api
// create an search input
// filter products in search auto complete
// shows filtered products as listitem
// onclick of item show the product details

const SearchComponent = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const listboxId = useId();
  const [activeIndex, setActiveIndex] = useState(-1);

  const onChangeSearchHandler = (e) => {
    setSearchInput(e.target.value);
    setShowDropdown(true);
  };

  const normalizedProducts = useMemo(() => {
    return products.map((product) => ({
      ...product,
      normalizedTitle: product.title.toLowerCase(),
    }));
  }, [products]);

  const filteredProducts = useMemo(() => {
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
  const handleKeyDown = (e) => {
    if (!filteredProducts.length) {
      console.log("Escape:");
      if (e.key === "Escape") {
        setShowDropdown(false);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setShowDropdown(true);
        setActiveIndex((prev) =>
          prev >= filteredProducts.length - 1 ? 0 : prev + 1,
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setShowDropdown(true);
        setActiveIndex((prev) =>
          prev <= 0 ? filteredProducts.length - 1 : prev - 1,
        );
        break;

      case "Enter":
        if (showDropdown && activeIndex >= 0) {
          e.preventDefault();
          handleSelectedProduct(filteredProducts[activeIndex]);
        }
        break;

      case "Escape":
        setShowDropdown(false);
        setActiveIndex(-1);
        break;

      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;

      case "End":
        e.preventDefault();
        setActiveIndex(filteredProducts.length - 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/groceries",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Promises");
        }
        const data = await response.json();
        setProducts(data?.products ?? []);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div
        className="search-container"
        style={{ textAlign: "center", padding: "10px" }}
      >
        <input
          type="text"
          placeholder="search for products..."
          value={searchInput}
          onChange={onChangeSearchHandler}
          role="combobox"
          aria-label="Search Products"
          aria-autocomplete="list"
          aria-expanded={showDropdown && searchInput.trim().length > 0}
          aria-controls={listboxId}
          aria-activedescendant={
            activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
          }
          onKeyDown={handleKeyDown}
        />
        {searchInput && (
          <button
            className="close"
            aria-label="Clear Search"
            onClick={handleClearSearch}
          >
            X
          </button>
        )}

        {showDropdown && searchInput.trim() && (
          <div id={listboxId} role="listbox" className="dropdown">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  id={`${listboxId}-option-${index}`}
                  role="option"
                  aria-selected={activeIndex === index}
                  className={activeIndex === index ? "active-option" : ""}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSelectedProduct(product)}
                >
                  {product.title}
                </div>
              ))
            ) : (
              <p role="status" aria-live="polite">
                No records found
              </p>
            )}
          </div>
        )}
      </div>
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
    </>
  );
};

export default SearchComponent;
