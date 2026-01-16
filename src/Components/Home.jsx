import { useEffect, useState } from "react";
import "./home.css";

const Login = ({ setScreen }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        "https://dashboard.free.beeceptor.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(response);
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
      console.log("Login successful:", data);
      setScreen("dashboard");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <>
      <h1 className="align-center">Login</h1>
      <form onSubmit={onSubmitHandler} className="align-center">
        <div className="spacing">
          <label>Username*</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="spacing">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            required
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
      <div
        type="button"
        className="align-center margin-top"
        onClick={() => setScreen("register")}
      >
        Don't have account?
        <span className="underline">Sign Up</span>
      </div>
    </>
  );
};

const Register = ({ setScreen }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    country: "India",
    mobile: "",
    password: "",
    refferalId: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(
        "https://dashboard.free.beeceptor.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(response);
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }

    setScreen("login");
  };
  return (
    <>
      <h1 className="align-center">Register</h1>
      <form onSubmit={onSubmitHandler} className="align-center">
        <div className="spacing">
          <label>FullName*</label>

          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="spacing">
          <label>UserName*</label>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={onChangeHandler}
            maxLength={5}
            required
          />
        </div>
        <div className="spacing">
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="spacing">
          <label>Country*</label>
          <select
            name="country"
            value={formData.country}
            onChange={onChangeHandler}
            required
          >
            <option value="India">India</option>
            <option value="Dubai">Dubai</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="spacing">
          <label>Mobile*</label>

          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={onChangeHandler}
            required
            maxLength={10}
          />
        </div>
        <div className="spacing">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            maxLength={8}
            required
          />
        </div>
        <div className="spacing">
          <label>Referral Id</label>
          <input
            type="number"
            name="referral Id"
            value={formData.refferalId}
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit">REGISTER</button>
      </form>
    </>
  );
};

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://dashboard.free.beeceptor.com/users"
        );
        const data = await response.json();
        console.log("Fetched users:", data);
        setUsers([data]);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <h1 className="align-center">Dashboard Page</h1>
      <h2 className="align-center">User List</h2>
      <table className="">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Country</th>
            <th>Mobile</th>
            <th>Referral Id</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.country}</td>
              <td>{user.mobile}</td>
              <td>{user.referralId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Home = () => {
  const [screen, setScreen] = useState("login");
  return (
    <div>
      {screen === "login" ? (
        <Login setScreen={setScreen} />
      ) : screen === "register" ? (
        <Register setScreen={setScreen} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

export default Home;
