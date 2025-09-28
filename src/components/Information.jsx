import { MdLocalShipping } from "react-icons/md"
import { TbReload } from "react-icons/tb"


const Information = () => {
  return (
    <>
      <div className="lg:py-7 py-3 border-b-2 border-[#F0F0F0]">
        <div className="lg:w-10/12 mx-auto w-11/12">
          <div className="flex items-center">
            <div className="lg:w-2/8 w-[30%]">
               <div className="">
                <span className="text-[#262626] lg:text-[20px] text-[15px] font-bold">2</span><span className="text-[#6D6D6D] lg:text-[16px] text-[14px] font-dm font-[400] lg:pl-3 pl-1">Two years warranty</span>
               </div>
            </div>
            <div className="lg:w-4/8 w-[32%]">
              <div className="flex items-center justify-center">
                <MdLocalShipping/>
                <p className="text-[#6D6D6D] lg:text-[16px] text-[14px] font-dm font-[400] lg:pl-3 pl-1">Free shipping</p>
              </div>
            </div>
            <div className="lg:w-2/8 w-[38%]">
              <div className="flex items-center justify-end">
                <TbReload/>
                <p className="text-[#6D6D6D] lg:text-[16px] text-[14px]  font-dm font-[400] lg:pl-3 pl-1">Return policy in 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Information