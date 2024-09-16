import { Provider } from "react-redux";
import ProjectRoutes from "./Router/ProjectRoutes";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import TablesAndForms from "./Projects/TablesAndForms";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <TablesAndForms /> */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ProjectRoutes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
