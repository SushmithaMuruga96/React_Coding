import { useEffect, useState } from "react";

const AdminPage = () => {
  const [userList, setUserList] = useState([]);
  const loginData = JSON.parse(localStorage.getItem("login") || "{}");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response?.ok) {
          throw new Error("APi falied");
        }
        const data = await response.json();
        console.log(data?.users);
        setUserList(data?.users);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <h1>
        Welcome {loginData?.fistname} {loginData?.lastName}{" "}
      </h1>
      {userList.length === 0 ? (
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
      )}
    </>
  );
};
export default AdminPage;
