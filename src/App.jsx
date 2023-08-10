import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Purchases from "./pages/Purchases";
import ProductsDetail from "./pages/ProductsDetail";
import AppNav from "./components/AppNav";
import Loader from "./components/Loader";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./App.css";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux/es/hooks/useSelector";


function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <>
      <HashRouter>
        <AppNav />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:id" element={<ProductsDetail />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/purchases" element={<Purchases />} />
            </Route>
          </Routes>
        </Container>
        {isLoading && <Loader />}
        
      </HashRouter>
    </>
  );
}

export default App;
