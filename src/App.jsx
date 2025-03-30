import { calculateTotals } from "./features/cart/cartSlice"
import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"

function App() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItem)

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItem])


  return (
    <>
      <div>
        <Navbar />
        <div className="gap-8">
          <ProductList />
          <Cart />
        </div>
      </div>

    </>
  )
}

export default App
