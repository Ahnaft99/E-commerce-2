import { RxCross2 } from "react-icons/rx"
import { FiMinus } from "react-icons/fi"
import { GoPlus } from "react-icons/go"
import { useDispatch, useSelector } from "react-redux"
import { cartRemove, incrementQty, decrementQty } from "./slice/ProductSlice"

const Cart = () => {
  let cartData = useSelector((state) => state.product.cardItem)
  let dispatch = useDispatch()

  let handleRemove = (item) => {
    dispatch(cartRemove(item))
  }

  let grandTotal = cartData.reduce((acc, item) => {
    let discountPrice = item.price - (item.price * item.discountPercentage) / 100
    return acc + discountPrice * item.qun
  }, 0)

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="w-11/12 md:w-10/12 mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-10">🛒 Your Shopping Cart</h1>

        {cartData.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border">
              {cartData.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b py-5 last:border-none"
                >
                  <div className="flex items-center gap-4 w-1/2">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-24 h-24 object-cover rounded-xl border"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
                      <p className="text-sm text-gray-500">
                        ${(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center border px-3 py-1 rounded-lg gap-3">
                    <button
                      className="cursor-pointer"
                      onClick={() => dispatch(decrementQty(item))}
                    >
                      <FiMinus />
                    </button>
                    <p className="font-medium">{item.qun}</p>
                    <button
                      className="cursor-pointer"
                      onClick={() => dispatch(incrementQty(item))}
                    >
                      <GoPlus />
                    </button>
                  </div>

                  {/* Total Price */}
                  <div className="text-right w-32">
                    <h3 className="text-lg font-semibold text-gray-700">
                      $
                      {(
                        (item.price - (item.price * item.discountPercentage) / 100) *
                        item.qun
                      ).toFixed(2)}
                    </h3>
                  </div>

                  {/* Remove */}
                  <RxCross2
                    className="text-gray-500 hover:text-red-500 cursor-pointer text-xl"
                    onClick={() => handleRemove(item)}
                  />
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border h-fit">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Order Summary</h2>

              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${grandTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">$10.00</span>
              </div>
              <div className="flex justify-between py-2 text-lg font-semibold">
                <span>Total</span>
                <span>${(grandTotal + 10).toFixed(2)}</span>
              </div>

              <button className="mt-6 w-full py-3 bg-gray-800 text-white font-bold rounded-xl hover:bg-gray-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-10 rounded-xl shadow-sm text-center">
            <h2 className="text-2xl font-semibold text-gray-600">Your cart is empty 😔</h2>
            <p className="text-gray-500 mt-2">Add some products to continue shopping.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
