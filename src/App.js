import "./App.css";
import Navigation from "./componets/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import DataProvider from "./contexts/DataContext";
import Cart from "./pages/Cart";
import Footer from "./componets/Footer";
import Admin from "./Admin/Admin";
import AdminUser from "./Admin/AdminUser";
import AdminProduct from "./Admin/AdminProduct";
import CreateUser from "./Admin/CreateUser";
import CreateProduct from "./Admin/CreateProduct";

// Template for pages without Navigation and Footer
const NoNavigationFooterTemplate = ({ children }) => <>{children}</>;

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/bestsellers"
            element={
              <>
                <Navigation />
                <Shop />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navigation />
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/bestsellers/:id"
            element={
              <>
                <Navigation />
                <SingleProduct />
                <Footer />
              </>
            }
          />
          <Route
            path="/admin-users"
            element={
              <NoNavigationFooterTemplate>
                <AdminUser/>
              </NoNavigationFooterTemplate>
            }
          />
          <Route
            path="/admin"
            element={
              <NoNavigationFooterTemplate>
                <Admin/>
              </NoNavigationFooterTemplate>
            }
          />
          <Route
            path="/admin-product"
            element={
              <NoNavigationFooterTemplate>
                <AdminProduct/>
              </NoNavigationFooterTemplate>
            }
          />
          <Route
            path="/create-user"
            element={
              <NoNavigationFooterTemplate>
                <CreateUser/>
              </NoNavigationFooterTemplate>
            }
          />
          <Route
            path="/create-product"
            element={
              <NoNavigationFooterTemplate>
                <CreateProduct/>
              </NoNavigationFooterTemplate>
            }
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
