import { RxCross2 } from "react-icons/rx"
import { FiMinus } from "react-icons/fi"
import { GoPlus } from "react-icons/go"
import { useDispatch, useSelector } from "react-redux"
import { cartRemove ,incrementQty , decrementQty} from "./slice/ProductSlice"


const Cart = () => {

  let cartData = useSelector((state)=>state.product.cardItem)
  let dispatch = useDispatch()
  let hendleRemove =(item)=>{
    dispatch(cartRemove(item))
  }

  let grandTotal = cartData.reduce((acc, item) => {
  let discountPrice = (item.price - (item.price * item.discountPercentage / 100))
  return acc + (discountPrice * item.qun)
  }, 0)

  return (
    <>
     <div className="py-[80px]">
        <div className="w-10/12 mx-auto">
          <div className="w-full">
            <h1 className="text-[#262626] text-[49px] font-dm font-bold">Cart</h1>
            <span className="cursor-pointer font-dm text-[12px] text-[#6D6D60]">Home Cart </span>
          </div>
          <div className="w-full mt-[80px]">
            <div className="py-[30px] px-[20px] bg-[#F5F5F3]">
               <div className="flex justify-between">
                  <div className="w-3/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">Product</h1>
                  </div>
                  <div className="w-3/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">Price</h1>
                  </div>
                  <div className="w-3/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">Quantity</h1>
                  </div>
                  <div className="w-1/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">Total</h1>
                  </div>
               </div>
            </div>
            <div className="w-full px-[20px] py-[5px]  border-b-1 border-[#F0F0F0]">
              {cartData.length > 0? 
               cartData.map((item)=>(
                <div className="flex justify-between items-center">
                  <div className="w-3/10">
                    <div className="flex items-center gap-x-5">
                        <RxCross2 className="cursor-pointer" onClick={()=>hendleRemove(item)}/>
                        <img src={item.thumbnail} alt="" className="w-[100px]" />
                        <p className="text-[16px] font-dm text-[#262626] font-bold">{item.title}</p>
                    </div>
                  </div>
                  <div className="w-3/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">$ { (item.price - (item.price * item.discountPercentage / 100)).toFixed(2) }</h1>
                  </div>
                  <div className="w-3/10">
                  <div className="w-2/9">
                    <div className="flex items-center gap-x-4 border-1 border-[#F0F0F0] px-3">
                        <button className="cursor-pointer" onClick={() => dispatch(decrementQty(item))}><FiMinus /></button>
                         <p>{item.qun}</p>
                         <button className="cursor-pointer" onClick={() => dispatch(incrementQty(item))}><GoPlus /></button>
                    </div>
                  </div>
                  </div>
                  <div className="w-1/10">
                    <h1 className="text-[16px] font-dm text-[#262626] font-bold">${((item.price - (item.price * item.discountPercentage / 100)) * item.qun).toFixed(2)}</h1>
                  </div>
               </div>
               ))
              :
               <h2>no product</h2>
              }
            </div>
            <div className="mt-[60px] w-10/10">
              <div className="flex items-center border-[1px] border-[#F0F0F0]  px-[20px] w-2/10">
                <div className="border-r-2 border-[#F0F0F0] py-[17px]">
                  <h1 className="font-dm font-bold text-[16px] text-[#262626] pr-[110px]">Total</h1>
                </div>
                <div className="">
                  <h1 className="font-dm font-bold text-[16px] text-[#262626] pl-[20px]">${grandTotal.toFixed(2)}</h1>
                </div>
              </div>
              <div className="mt-[50px]">
                  <a className="py-[16px] px-[25px] text-white bg-[#262626] font-bold font-dm cursor-pointer hover:bg-[#3a3737]">Proceed to Checkout</a>
                </div>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Cart