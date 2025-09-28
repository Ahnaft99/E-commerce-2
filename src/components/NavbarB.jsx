import categoryIcon from '../assets/categoryIcon.png'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { useEffect, useRef, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const NavbarB = () => {
    let cateref = useRef()
    let accateref = useRef()
    let accTwoateref = useRef()
    let [cate, setCeta] = useState(false)
    let [accate, setacCeta] = useState(false)
    let [accateTwo, setacCetaTwo] = useState(false)
    let cartData = useSelector((state)=>state.product.cardItem)
    // console.log(cartData.product.cardItem);
    
    
    useEffect(()=>{
        document.addEventListener("click", (e) => {
            if (cateref.current.contains(e.target) == true) {
                setCeta(!cate)
            } else {
                setCeta(false)
            }
            if (accateref.current.contains(e.target) == true) {
                setacCeta(!accate)
            } else {
                setacCeta(false)
            }
            if (accTwoateref.current.contains(e.target) == true) {
                setacCetaTwo(!accateTwo)
            } else {
                setacCetaTwo(false)
            }
        });
    })

    return (
        <>
            <div className="bg-[#F5F5F3] lg:py-[20px] py-3 z-99 sticky top-0  right-0 left-0">
                <div className="lg:w-10/12 mx-auto w-11/12">
                    <div className="flex items-center">
                        <div className="w-2/7 relative">
                            <div className="flex items-center " >
                                <img src={categoryIcon} alt="categoryIcon" className='lg:w-[22px] w-[12px]' />
                                <p className='text-[#262626] lg:text-[14px] text-[13px] font-dm font-normal pl-2 cursor-pointer' ref={cateref}>Shop by Category</p>
                            </div>
                            {cate &&
                                <div className={`absolute top-9 left-0 duration-200 ease-in-out z-99`}>
                                    <div className="bg-[#2D2D2D] pt-[16px] pl-[20px] pr-[23px]">
                                        <ul>
                                            <div className="flex items-center border-b-2 border-[#ffffff42] pb-3">
                                                <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Accesories</a>
                                                < FaCaretRight className='ml-[130px] text-[#FFFFFFB2]' />
                                            </div>
                                            <div className="flex items-center border-b-2 border-[#ffffff62] pb-3 pt-3">
                                                <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Furniture</a>
                                                < FaCaretRight className='ml-[143px] text-[#FFFFFFB2]' />
                                            </div>
                                            <div className="flex items-center border-b-2 border-[#ffffff62] pb-3 pt-3">
                                                <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Electronics</a>
                                                < FaCaretRight className='ml-[130px] text-[#FFFFFFB2]' />
                                            </div>
                                            <div className="flex items-center border-b-2 border-[#ffffff62] pb-3 pt-3">
                                                <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Clothes</a>
                                                < FaCaretRight className='ml-[152px] text-[#FFFFFFB2]' />
                                            </div>
                                            <div className="flex items-center border-b-2 border-[#ffffff62] pb-3 pt-3">
                                                <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Bags</a>
                                                < FaCaretRight className='ml-[167px] text-[#FFFFFFB2]' />
                                            </div>
                                            <div className="flex items-center border-b-2 border-[#ffffff62] pb-3 pt-3">
                                                <a href="" className='text-[#FFFFFFB2] text-[14px] font-dm font-normal hover:font-bold hover:text-[#FFFFFF]'>Home appliances</a>
                                                < FaCaretRight className='ml-[91px] text-[#FFFFFFB2]' />
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="w-4/7">
                            <div className="flex">
                                <div className="relative">
                                    <form action="#" className=''>
                                        <input type="text" placeholder='Search Products' className='border-none bg-white lg:py-4 py-3 lg:pl-5 pl-2 pr-10 lg:w-[560px] w-[250px] outline-0' />
                                    </form>
                                    <IoSearch className='absolute top-4 right-3 lg:text-[24px]' />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/7">
                            <div className="flex justify-end">
                                <div className="relative">
                                    <FaUser className='cursor-pointer w-[60px]' ref={accateref} />
                                    {accate &&
                                        <div className=" absolute top-[22px] right-0 z-99">
                                            <div className="bg-black py-4 px-[59px] cursor-pointer">
                                                <p className='text-white text-[14px] font-dm font-bold w-[84px] '>My Account</p>
                                            </div>
                                            <div className="">
                                                <p className='text-black text-[14px] font-dm font-bold w-[-1px] text-center bg-white hover:bg-black hover:text-white py-4 px-[73px] cursor-pointer'>Log Out</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div className="relative">
                                    <Link to='cart'>
                                      <FaShoppingCart className='ml-7 cursor-pointer w-[60px]' ref={accTwoateref} />
                                    </Link>
                                    <div className="absolute top-[-20px] right-0 ">
                                        <h1 className='text-red-700 font-dm font-bold text-[14px] bg-green-500 py-[3px] px-[8px]  rounded-[50%]'>{cartData.length}</h1> 
                                    </div>
                                    {/* {accateTwo &&
                                        <div className="absolute top-8 lg:right-[-30px] right-[-20px] z-99">
                                            <div className="bg-[#F5F5F3] py-5 w-[358px] pl-5">
                                                <div className="flex items-center relative">
                                                    <div className="h-[80px] w-[80px] bg-[#979797]"></div>
                                                    <div className="pl-5">
                                                        <p className='text-[#262626] text-[14px] font-dm font-bold w-[131px]'>Black Smart Watch</p>
                                                        <p className='text-[#262626] text-[14px] font-dm font-bold'>$44.00</p>
                                                    </div>
                                                    <div className=""><RxCross2 className='absolute top-[40%] right-5 cursor-pointer' /></div>
                                                </div>
                                            </div>
                                            <div className="pt-[14px] w-[358px] pl-5 pb-[36px] bg-[#FFff]">
                                                <div className="">
                                                    <span className='text-[#767676] text-[16px] font-dm font-normal'>Subtotal:</span><span className='text-[#262626] text-[14px] font-dm font-bold'>$44.00</span>
                                                </div>
                                                <div className="flex items-center mt-[25px]">
                                                    <div className="">
                                                        <a href="#" className='px-10 border-2 py-4 text-[#262626] text-[14px] font-dm font-bold hover:bg-black hover:text-white'>View Cart</a>
                                                    </div>
                                                    <div className="ml-4">
                                                        <a href="#" className='px-10 border-2 py-4 text-[#262626] text-[14px] font-dm font-bold hover:bg-black hover:text-white'>Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    } */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarB