import { useEffect, useState } from "react";

const AdminPage = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const loginData = JSON.parse(localStorage.getItem("login") || "{}");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/users");
        if (!response?.ok) {
          throw new Error("Api falied");
        }
        const data = await response.json();
        console.log(data?.users);
        setUserList(data?.users);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <h1>Welcome {loginData?.email}</h1>
      {loading && <p>Loading ......</p>}
      {!loading &&
        (userList.length === 0 ? (
          <h1>No records found</h1>
        ) : (
          // <table>
          userList?.map((user) => (
            <div key={user.id}>
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>{user.email}</p>
            </div>
            // <tr>
            //   <thead>{user}</thead>
            // </tr>
          ))
          // </table>
        ))}
      {error && <p>{error}</p>}
    </>
  );
};
export default AdminPage;
