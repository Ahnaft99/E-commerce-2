import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MdOutlineStarHalf, MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md"
import { GoDotFill, GoPlus } from "react-icons/go"
import { FiMinus } from "react-icons/fi"
import { Apidata } from "../components/ContextApi"
import { addToCart } from "../components/slice/ProductSlice"
import { useDispatch } from "react-redux"


const ProductDetails = () => {
let productId = useParams()
let dispatch = useDispatch()
let [singleProducts , setSingleproducts] = useState({})

let singleProduct = ()=>{
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((res)=>{
      setSingleproducts(res.data);
    })
}
useEffect(()=>{
   singleProduct()
},[])

let info = useContext(Apidata)
let [ show ,setShow] = useState(false)
let [ showOne , setShowOne] = useState(false)
let [shoTwo , setShowTwo] = useState(false)
let [show3 , setShow3] = useState(false)


let handleCart =(item)=>{
  dispatch(addToCart({...item , qun:1}))
}


let clientRating = Array.from({length:5},(_,index)=>{
  let number = index + 0.5
  return (
    singleProducts.rating > index + 1 ? (<MdOutlineStarPurple500 /> ): singleProducts.rating > number ? <MdOutlineStarHalf /> :(<MdOutlineStarOutline />) 
  );
})

let MainPrice = (singleProducts.price / 100) * singleProducts.discountPercentage;
let AccuratePrice = singleProducts.price - MainPrice

let [activeTab, setActiveTab] = useState("description")

  return (
    <>
    <div className="py-[80px]">
      <div className="lg:w-10/12 mx-auto">
        <div className="w-[50%]">
          <div className="">
            <img src={singleProducts.thumbnail} alt="" />
            <p className="text-[#262626] text-[16px] font-dm font-normal py-10">{singleProducts.title}</p>
          </div>
          <div className="flex items-center gap-x-4 mt-8">
            <div className="flex gap-x-3 text-amber-300">
              {clientRating}
            </div>
            <div className="">
              <p className="text-[#262626] font-dm font-normal">Review</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 mt-5 border-b-1 border-[#F0F0F0] pb-2">
            <del className="font-bold font-dm text-[#262626]">${singleProducts.price}</del>
            <p className="font-bold font-dm text-[#262626]">${AccuratePrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-x-3 mt-5">
            <div className="">
              <p className="font-dm font-bold text-[16px] text-[#262626]">COLOR:</p>
            </div>
            <div className="flex items-center gap-x-2">
              <GoDotFill className="text-[#979797] !w-[30px] h-[30px]" />
              <GoDotFill className="text-[#FF8686] !w-[30px] h-[30px]" />
              <GoDotFill className="text-[#979797] !w-[30px] h-[30px]" />
              <GoDotFill className="text-[#979797] !w-[30px] h-[30px]" />
              <GoDotFill className="text-[#15CBA5] !w-[30px] h-[30px]" />
            </div>
          </div>
          <div className="flex items-center mt-5 gap-x-3 border-b-1 pb-5 border-[#F0F0F0]">
          </div>
          <div className="flex items-center mt-5 gap-x-3 border-b-1 pb-5 border-[#F0F0F0]">
           <div className="">
            <p className="text-[#262626] font-bold font-dm text-[16px]">STATUS:</p>
           </div>
           <div className="">
            <p className="text-[#767676] font-dm font-normal text-[16px]">{singleProducts.availabilityStatus}</p>
           </div>
          </div>
          <div className="flex items-center mt-7 gap-x-3 border-b-1 pb-7 border-[#F0F0F0]">
            <div className="">
              <a className="text-[#262626] font-dm font-bold text-[16px] hover:text-[#FFFFFF] hover:bg-black border-1 border-black py-[16px] px-[40px] cursor-pointer">Add to Wish List</a>
            </div>
            <div className="">
              <a onClick={()=>handleCart(singleProducts)} className="text-[#262626] font-dm font-bold text-[16px] hover:text-[#FFFFFF] hover:bg-black border-1 border-black py-[16px] px-[40px] cursor-pointer">Add to Cart</a>
            </div>
          </div>
          <div className=" mt-5  border-b-1 pb-5 border-[#F0F0F0]">
            <div className="items-center justify-between flex cursor-pointer" onClick={()=>setShow(!show)}>
              <p className="font-dm text-[#262626] text-[16px] font-bold">FEATURES  & DETAILS</p>
              { show ?  <FiMinus />:<GoPlus />  }
             
            </div>
            <div className={`pt-4 ${show == true? "block" : "hidden"}`}>
              <p className="font-dm text-[#767676] text-[16px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
           <div className=" mt-5  border-b-1 pb-5 border-[#F0F0F0]">
            <div className="items-center justify-between flex cursor-pointer" onClick={()=>setShowOne(!showOne)}>
              <p className="font-dm text-[#262626] text-[16px] font-bold">SHIPPING & RETURNS</p>
              {showOne ? <FiMinus /> : <GoPlus /> }
            </div>
            <div className={`pt-4 ${showOne == true ? "block":"hidden"}`}>
              <p className="font-dm text-[#767676] text-[16px] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
     
            <div className="mt-5">
            <ul className="flex space-x-10 mt-5">
              <li>
                <button 
                  className={`inline-block font-bold text-[20px] font-dm ${activeTab === "description" ? "text-black" : "text-gray-500"}`}
                  onClick={()=>setActiveTab("description")}
                >
                  Description
                </button>
              </li>
              <li>
                <button 
                  className={`inline-block font-bold text-[20px] font-dm ${activeTab === "reviews" ? "text-black" : "text-gray-500"}`}
                  onClick={()=>setActiveTab("reviews")}
                >
                  Reviews
                </button>
              </li>
            </ul>

            <div className="p-2">
              {activeTab === "description" && (
                <div>{singleProducts.description}</div>
              )}
              {activeTab === "reviews" && (
                <div>
                  {singleProducts?.reviews?.map((item, index) => {
                    const commandRating = Array.from({ length: 5 }, (_, starIndex) => {
                        const number = starIndex + 0.5
                        if (item.rating > starIndex + 1) {
                            return (<MdOutlineStarPurple500 key={starIndex} />);
                        } else if (item.rating > number) {
                            return <MdOutlineStarHalf key={starIndex} />;
                        } else {
                            return (<MdOutlineStarOutline key={starIndex} />);
                        }
                    });

                    return (
                        <div key={index}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-x-5">
                                    <p className="text-[16px] font-dm text-[#262626] mt-5">{item.reviewerName}</p>
                                    <p className="flex gap-x-1 text-amber-300 mt-5">{commandRating}</p>
                                </div>
                                <p className="mt-5 text-[#767676] text-[16px] font-dm font-normal">
                                  {new Date(item.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                                </p>
                            </div>
                            <div className="mt-2 border-b-1 pb-5 border-[#F0F0F0]">
                                <p className="text-[#767676] text-[16px] font-dm font-normal">{item.comment}</p>
                            </div>
                        </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
    </>

  )
}

export default ProductDetails