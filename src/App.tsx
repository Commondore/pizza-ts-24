import CheckoutPage from "@pages/CheckoutPage";
import PizzaPage from "@pages/PizzaPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PizzaPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
