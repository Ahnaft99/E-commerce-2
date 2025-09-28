import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import logoF from '../assets/logo.png'


const Footer = () => {
  return (
    <>
      <div className="lg:py-[45px] py-[20px] bg-[#F5F5F3]">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="lg:flex flex flex-wrap">
                <div className="lg:w-2/12 w-2/10">
                    <div className="">
                        <h2 className="text-[#262626] text-[16px] font-dm font-bold">MENU</h2>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[18px] pt-2">Home</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Shop</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">About</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Contact</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Journal</p>
                    </div>
                </div>
                <div className="lg:w-2/12 w-2/10">
                    <div className="">
                        <h2 className="text-[#262626] text-[16px] font-dm font-bold">SHOP</h2>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[18px] pt-2">Category 1</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Category 2</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Category 3</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Category 4</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Category 5</p>
                    </div>
                </div>
                <div className="lg:w-2/12 w-3/10">
                    <div className="">
                        <h2 className="text-[#262626] text-[16px] font-dm font-bold">HELP</h2>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[18px] pt-2">Privacy Policy</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Terms & Conditions</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Special E-shop</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Shipping</p>
                        <p className="text-[#6D6D6D] text-[14px] font-dm font-normal lg:pt-[10px] pt-[5px]">Secure Payments</p>
                    </div>
                </div>
                <div className="lg:w-3/12 lg:pt-0 pt-4">
                     <div className="">
                        <p className="text-[#262626] lg:text-[16px] font-dm lg:font-bold">(052) 611-5711</p>
                        <p className="text-[#262626] lg:text-[16px] font-dm lg:font-bold">company@domain.com</p>
                     </div>
                </div>
                <div className="lg:w-3/12 lg:mt-0 mt-4 lg:pl-0 pl-10">
                  <div className="">
                    <img src={logoF} alt="" />
                  </div>
                </div>
          </div>
          <div className="flex justify-between lg:mt-[40px] mt-5">
            <div className="flex items-center gap-x-3">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
            <div className="">
                <p className='text-[#6D6D6D] lg:text-[14px] text-[12px] font-dm font-normal'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer