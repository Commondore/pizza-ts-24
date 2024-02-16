import CheckoutPage from "@pages/checkout/CheckoutPage";
import ContactDataPage from "@pages/checkout/ContactDataPage";
import PizzaPage from "@pages/PizzaPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PizzaPage />} />
        <Route path="/checkout" element={<CheckoutPage />}>
          <Route
            path="contact-data"
            element={<ContactDataPage />}
          />
        </Route>

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
