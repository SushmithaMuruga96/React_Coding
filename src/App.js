import { Provider } from "react-redux";
import store from "./Redux/store";
import ProjectRoutes from "./Router/ProjectRoutes";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "20px", fontWeight: 500 }}>
          React Coding
        </h1>
        <ProjectRoutes />
      </div>
    </Provider>
  );
}

export default App;
