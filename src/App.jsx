import { calculateTotals } from "./features/cart/cartSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem)

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItem])
  return (
    <div>
      <Navbar  /> 
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-detail" element={<Detail />} />
      </Routes>
    </Router>
    </div>

  )
}

export default App
