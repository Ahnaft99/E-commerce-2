import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  MdOutlineStarHalf,
  MdOutlineStarOutline,
  MdOutlineStarPurple500,
} from "react-icons/md"
import { GoDotFill, GoPlus } from "react-icons/go"
import { FiMinus } from "react-icons/fi"
import { Apidata } from "../components/ContextApi"
import { addToCart } from "../components/slice/ProductSlice"
import { useDispatch } from "react-redux"

const ProductDetails = () => {
  let productId = useParams()
  let dispatch = useDispatch()
  let [singleProducts, setSingleproducts] = useState({})

  let singleProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((res) => {
        setSingleproducts(res.data)
      })
  }
  useEffect(() => {
    singleProduct()
  }, [])

  let info = useContext(Apidata)
  let [show, setShow] = useState(false)
  let [showOne, setShowOne] = useState(false)

  let handleCart = (item) => {
    dispatch(addToCart({ ...item, qun: 1 }))
  }

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    return singleProducts.rating > index + 1 ? (
      <MdOutlineStarPurple500 />
    ) : singleProducts.rating > number ? (
      <MdOutlineStarHalf />
    ) : (
      <MdOutlineStarOutline />
    )
  })

  let MainPrice =
    (singleProducts.price / 100) * singleProducts.discountPercentage
  let AccuratePrice = singleProducts.price - MainPrice

  let [activeTab, setActiveTab] = useState("description")

  return (
    <>
      <div className="py-[40px] md:py-[80px]">
        <div className="w-11/12 lg:w-10/12 mx-auto">

          {/* Responsive Image + Info Layout */}
          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT SIDE (Image + Info) */}
            <div className="w-full lg:w-1/2">

              {/* Image */}
              <div>
                <img
                  src={singleProducts.thumbnail}
                  alt=""
                  className="w-full h-auto rounded-md"
                />
                <p className="text-[#262626] text-[18px] font-dm font-normal py-5 md:py-10">
                  {singleProducts.title}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-x-4 mt-4">
                <div className="flex gap-x-3 text-amber-300">
                  {clientRating}
                </div>
                <p className="text-[#262626] font-dm font-normal">Review</p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-x-3 mt-5 border-b pb-2 border-[#F0F0F0]">
                <del className="font-bold text-[#262626]">
                  ${singleProducts.price}
                </del>
                <p className="font-bold text-[#262626]">
                  ${AccuratePrice.toFixed(2)}
                </p>
              </div>

              {/* Color */}
              <div className="flex items-center gap-x-3 mt-5">
                <p className="font-dm font-bold text-[16px]">COLOR:</p>
                <div className="flex items-center gap-x-2">
                  <GoDotFill className="text-[#979797] w-[30px] h-[30px]" />
                  <GoDotFill className="text-[#FF8686] w-[30px] h-[30px]" />
                  <GoDotFill className="text-[#979797] w-[30px] h-[30px]" />
                  <GoDotFill className="text-[#979797] w-[30px] h-[30px]" />
                  <GoDotFill className="text-[#15CBA5] w-[30px] h-[30px]" />
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center mt-5 gap-x-3 border-b pb-5 border-[#F0F0F0]">
                <p className="text-[#262626] font-bold">STATUS:</p>
                <p className="text-[#767676]">{singleProducts.availabilityStatus}</p>
              </div>

              {/* Add to Cart | Wishlist */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-7 border-b pb-7 border-[#F0F0F0]">

                <button className="text-[#262626] font-bold hover:text-white hover:bg-black border border-black py-3 px-10 transition">
                  Add to Wish List
                </button>

                <button
                  onClick={() => handleCart(singleProducts)}
                  className="text-[#262626] font-bold hover:text-white hover:bg-black border border-black py-3 px-10 transition"
                >
                  Add to Cart
                </button>
              </div>

              {/* Accordion 1 */}
              <div className="mt-5 border-b pb-5 border-[#F0F0F0]">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <p className="font-bold text-[16px]">FEATURES & DETAILS</p>
                  {show ? <FiMinus /> : <GoPlus />}
                </div>

                {show && (
                  <p className="pt-4 text-[#767676] text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                )}
              </div>

              {/* Accordion 2 */}
              <div className="mt-5 border-b pb-5 border-[#F0F0F0]">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setShowOne(!showOne)}
                >
                  <p className="font-bold text-[16px]">SHIPPING & RETURNS</p>
                  {showOne ? <FiMinus /> : <GoPlus />}
                </div>

                {showOne && (
                  <p className="pt-4 text-[#767676] text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                )}
              </div>

            </div>

            {/* RIGHT SIDE (TABS) */}
            <div className="w-full lg:w-1/2 mt-5">

              {/* Tabs */}
              <ul className="flex space-x-10">
                <li>
                  <button
                    className={`font-bold text-[20px] ${
                      activeTab === "description"
                        ? "text-black"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </button>
                </li>

                <li>
                  <button
                    className={`font-bold text-[20px] ${
                      activeTab === "reviews"
                        ? "text-black"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("reviews")}
                  >
                    Reviews
                  </button>
                </li>
              </ul>

              {/* Tab Content */}
              <div className="mt-5">

                {activeTab === "description" && (
                  <p className="text-[#767676]">{singleProducts.description}</p>
                )}

                {activeTab === "reviews" && (
                  <div>
                    {singleProducts?.reviews?.map((item, index) => {
                      const commandRating = Array.from(
                        { length: 5 },
                        (_, starIndex) => {
                          const number = starIndex + 0.5
                          if (item.rating > starIndex + 1) {
                            return <MdOutlineStarPurple500 key={starIndex} />
                          } else if (item.rating > number) {
                            return <MdOutlineStarHalf key={starIndex} />
                          }
                          return <MdOutlineStarOutline key={starIndex} />
                        }
                      )

                      return (
                        <div key={index} className="mt-5">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

                            <div className="flex items-center gap-x-5">
                              <p className="text-[16px] font-dm">
                                {item.reviewerName}
                              </p>

                              <div className="flex gap-x-1 text-amber-300">
                                {commandRating}
                              </div>
                            </div>

                            <p className="text-[#767676] text-[14px]">
                              {new Date(item.date).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>

                          <p className="mt-2 border-b pb-5 text-[#767676]">
                            {item.comment}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductDetails
