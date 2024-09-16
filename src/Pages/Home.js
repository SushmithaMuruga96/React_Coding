import React, { useState, useEffect } from "react";
import { useTheme } from "../Utils/ThemeContext";
// import axios from "axios";
import { setUser } from "../Redux/Slice/UserSlice";
import { useDispatch } from "react-redux";
import useFetch from "../Utils/Fetch";

export const Home = () => {
  const projectTheme = useTheme();
  const dispatch = useDispatch();
  const { data, loading, error, fetchData } = useFetch();
  //   const inputref = useRef(null);
  //   const textref = useRef(null);
  const [formData, setFormData] = useState({
    userName: "",
  });
  const [joke, setJoke] = useState(null);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(" submitted Successfully " + formData.userName);
    dispatch(setUser(formData.userName));
  };

  //   const handleRefSubmit = (event) => {
  //     event.preventDefault();
  //     alert(" submitted Successfully " + textref.current.value);
  //   };

  const getJoke = async () => {
    await fetchData("GET", "https://official-joke-api.appspot.com/random_joke");
    // const response = await axios.get();
    // console.log(response);
    setTimeout(() => {
      console.log(data, "data");
      setJoke({
        setup: data?.setup,
        punchline: data?.punchline,
      });
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("hello");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      style={
        projectTheme.theme === "dark"
          ? {
              backgroundColor: "black",
            }
          : {
              backgroundColor: "white",
            }
      }
    >
      <h3
        style={
          projectTheme.theme === "dark"
            ? {
                color: "white",
              }
            : {
                color: "black",
              }
        }
      >
        Home Page
      </h3>
      <form onSubmit={handleSubmit}>
        <label>
          UserName :{" "}
          <input
            type="text"
            value={formData.userName}
            name="userName"
            onChange={onChangeHandler}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
      {/* <form onSubmit={handleRefSubmit}>
        <label>
          UserName : <input type="text" ref={inputref} name="userName" />
        </label>
        <label>
          comments : <input ref={textref} type="textarea" name="userName" />
        </label>
        <input type="submit" value="submit" />
      </form> */}
      {loading && <div>Loading....</div>}
      {error && <div> {error.message}</div>}
      <br />
      <button onClick={getJoke}>click for Joke</button>

      {joke ? (
        <div>{`${joke?.setup}  ${joke?.punchline}  `}</div>
      ) : (
        <p>No jokes at the moment </p>
      )}
    </div>
  );
};
