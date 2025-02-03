import "./App.css";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContextProvider } from "./contexts/ProductContext";
import ProductsContextProvider from "./contexts/ProductsContext";

const App = () => {
  return (
    <ProductContextProvider>
      <ProductsContextProvider>
        <Routes />
        <ToastContainer />
      </ProductsContextProvider>
    </ProductContextProvider>
  );
};

export default App;
