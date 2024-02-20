import Layout from "@components/Layout/Layout";
import CheckoutPage from "@pages/checkout/CheckoutPage";
import ContactDataPage from "@pages/checkout/ContactDataPage";
import OrdersPage from "@pages/OrdersPage";
import PizzaPage from "@pages/PizzaPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PizzaPage />} />
          <Route
            path="/checkout"
            element={<CheckoutPage />}
          >
            <Route
              path="contact-data"
              element={<ContactDataPage />}
            />
          </Route>
          <Route path="/orders" element={<OrdersPage />} />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
