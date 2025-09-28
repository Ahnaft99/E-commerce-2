import { FaHeart, FaLongArrowAltLeft, FaLongArrowAltRight, FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import { FaCodeCompare } from "react-icons/fa6";
import addd2 from'../assets/addd2.png'
import { useContext } from "react";
import { Apidata } from "./ContextApi";
import { Link } from "react-router-dom";

const Arrivals = () => {
   const settings = {
    arrows:true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <FaLongArrowAltRight />,
    prevArrow: <FaLongArrowAltLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    )
  };
  let data = useContext(Apidata);
  // console.logs
  
  return (
    <>
     <div className="py-10">
       <div className="lg:w-10/12 mx-auto w-11/12">
       <div className="w-full">
        <p className="text-[#262626] text-[39px] font-semibold font-dm">New Arrivals</p>
       </div>
         <div className="w-full lg:mt-[40px]">
            <Slider {...settings} className="gap-3" >
                  {data.map((item)=>(
                  <div className=" !w-[90%] relative group">
                        <div className="w-full ">
                          <Link to='/shop'>
                            <img src={item.thumbnail} alt="" className="w-full cursor-pointer" />
                            </Link>
                        </div>
                        <div className="flex justify-between mt-5 z-10">
                            <p className="text-[#262626] text-[16px] font-dm font-bold">{item.title}</p>
                            <p className="text-[#767676] text-[16px] font-normal font-dm">${item.price}</p>
                        </div>
                        <div className="">
                            <p className="text-[#767676] text-[16px] font-dm font-normal pt-3">Black</p>
                        </div>
                        <div className="absolute top-2 left-2">
                          <p className="text-[#FFFFFF]  text-[14px] font-dm font-bold py-[7px] px-[28px] bg-black hover:bg-[#2e2b2b] cursor-pointer">New</p>
                        </div>
                        <div className="absolute !w-[100%] left-0 bottom-[62px]"> 
                          <div className=" h-[0px] group-hover:h-[130px] duration-300 ease-in-out bg-[#FFFFFF]">
                            <div className="pt-[26px] opacity-0 group-hover:opacity-95">
                              <div className="flex items-center justify-end mr-3">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Wish List</p>
                                 <FaHeart className="" />
                              </div>
                              <div className="flex items-center justify-end mr-3 mt-[16px]">
                                <FaCodeCompare className=""/>
                              </div>
                               <div className="flex items-center justify-end mr-3 mt-[16px]">
                                 <p className="text-[#262626] hover:text-[#767676] text-[15px] font-dm font-bold hover:font-normal pr-2 cursor-pointer">Add to Cart</p>
                                 <FaShoppingCart />
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                  ))}
            </Slider>
         </div>
       </div>
       <div className="lg:w-10/12 mx-auto w-11/12">
        <div className="lg:mt-[150px]">
            <div className="w-full">
              <div className="lg:mt-[100px]">
                <img src={addd2} alt="" className="w-full"/>
              </div>
            </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default Arrivals