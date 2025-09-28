import { useContext, useEffect, useState } from "react"
import { AiOutlineBars } from "react-icons/ai"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { FiPlus } from "react-icons/fi"
import { IoAppsSharp } from "react-icons/io5"
import Post from "./Post"
import Pagination from "./Pagination"
import { Apidata } from "./ContextApi"

const Products = () => {
  let  info = useContext(Apidata)
  let [ show , SetShow] = useState(false)
  let [ showOne , setShowTwo] = useState(false)
  let [ perPage , setPerpage ] = useState(10)
  let [ currentPage , setCurrenPage] = useState(1)
  let [ Category , setCategory] = useState([])
  let [ filterCate , setFilterCate] = useState([])
  let [ brand , setBrand] = useState([])
  let [active,setActive] = useState(false)
  let [ low , setLow] = useState({})
  let [ high , setHigh] = useState({})
  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = info.slice(firstPage , lastPage)
  let pageNumber = []
  for( let i = 1; i <= Math.ceil( info.length / perPage); i++){
   pageNumber.push(i)
  }
  let paginate = (index)=>{
    setCurrenPage(index + 1)
  }
  let next = ()=>{
    if( currentPage < pageNumber.length){
      setCurrenPage((state)=> state +1)
    }
  }
  let prev = ()=>{ 
    if( currentPage > 1){
      setCurrenPage((state)=> state -1)
    }
  }
  let handlePageNum = (e)=>{
      setPerpage(e.target.value);
  }
  useEffect(()=>{
    setCategory([...new Set(info.map((item)=>item.category))]);
    setBrand([...new Set(info.map((item)=>item.brand))]);
  },[info])

  let handleCategory = (cItem)=>{
    let filterItem = info.filter((item)=>item.category == cItem)
    setFilterCate(filterItem);
  }
  let handleAllPro = ()=>{
   setFilterCate("");
  }
  let handleList = ()=>{
    if(active){
      setActive(false);
    }
    else{
      setActive(true);
    }
    
  }
  let handleBrand =(bItem)=>{
    let filterBrand = info.filter((item)=>item.brand == bItem)
    setFilterCate(filterBrand)
  }
  let handlePrice =(value)=>{
   setLow(value.low);
   setHigh(value.high);
   let filterPrice = info.filter((item)=> item.price >value.low && item.price < value.high )
   setFilterCate(filterPrice);
  }
 
  
 
  return (
    <>
      <div className="lg:py-[100px]">
        <div className="lg:w-10/12 mx-auto w-11/12">
          <div className="w-full">
            <div className="">
                <p className="text-[#262626] text-[49px] font-bold font-dm">Products</p>
                <p className="text-[#767676] text-[12px] font-dm font-normal">Home Products</p>
            </div>
          </div>
          <div className="flex mt-[90px]">
            <div className="w-3/12">
              <div className="">
                <p className="text-[#262626] text-[20px] font-dm font-bold">Shop by Category</p>
                <div className="mt-8">
                  <>
                  <div  onClick={handleAllPro} className="flex justify-between items-center border-b-[1px] border-[#F0F0F0] pb-2 cursor-pointer">
                    <p  className="text-[#767676] text-[16px] font-dm font-normal pt-2">All Product</p>
                    <FiPlus />
                  </div>
                    {Category.map((item)=>(
                      <div onClick={()=>handleCategory(item)} className="flex justify-between items-center border-b-[1px] border-[#F0F0F0] pb-2 cursor-pointer">
                          <p  className="text-[#767676] text-[16px] font-dm font-normal pt-2">{item}</p>
                          <FiPlus />
                      </div>
                    ))}
                  </>
                </div>
                <div className="mt-10 ">
                    <div className="flex justify-between items-center cursor-pointer" onClick={()=>SetShow(!show)}>
                        <h2 className="text-[#262626] text-[20px] font-dm font-bold">Shop by Color</h2>
                        { show ? <FaCaretUp />:<FaCaretDown />}
                    </div>
                    <div className={`mt-8 ${ show ? "block":"hidden"}`}>
                        <div className="border-b-[1px] border-[#F0F0F0] pb-3 flex items-center">
                            <div className="bg-[#000000] h-[11px] w-[11px] rounded-full"></div>
                           <p className="text-[#767676] text-[16px] font-dm font-normal pl-5">Color 1</p>
                        </div>
                        <div className="border-b-[1px] border-[#F0F0F0] pb-3 flex items-center pt-3">
                            <div className="bg-[#FF8686] h-[11px] w-[11px] rounded-full"></div>
                           <p className="text-[#767676] text-[16px] font-dm font-normal pl-5">Color 2</p>
                        </div>
                        <div className="border-b-[1px] border-[#F0F0F0] pb-3 flex items-center pt-3">
                            <div className="bg-[#7ED321] h-[11px] w-[11px] rounded-full"></div>
                           <p className="text-[#767676] text-[16px] font-dm font-normal pl-5">Color 3</p>
                        </div>
                        <div className="border-b-[1px] border-[#F0F0F0] pb-3 flex items-center  pt-3">
                            <div className="bg-[#B6B6B6] h-[11px] w-[11px] rounded-full"></div>
                           <p className="text-[#767676] text-[16px] font-dm font-normal pl-5">Color 4</p>
                        </div>
                        <div className="border-b-[1px] border-[#F0F0F0] pb-3 flex items-center pt-3">
                            <div className="bg-[#15CBA5] h-[11px] w-[11px] rounded-full"></div>
                           <p className="text-[#767676] text-[16px] font-dm font-normal pl-5">Color 5</p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 ">
                    <div className="flex justify-between items-center cursor-pointer" onClick={()=>setShowTwo(!showOne)}>
                        <h2 className="text-[#262626] text-[20px] font-dm font-bold">Shop by Brand</h2>
                        { showOne ? <FaCaretUp />:<FaCaretDown />}
                   
                    </div>
                    <div className={`mt-8 ${ showOne ? "block":"hidden"}`}>
                      {brand.map((item)=>(
                        <div className="border-b-[1px] border-[#F0F0F0] pb-2" onClick={()=>handleBrand(item)}>
                           <p className="text-[#767676] text-[16px] font-dm font-normal pt-2 cursor-pointer">{item}</p>
                        </div>
                      ))}
                    </div>
                </div>
                <div className="mt-10 ">
                    <div className="flex justify-between items-center" >
                        <h2 className="text-[#262626] text-[20px] font-dm font-bold">Shop by Price</h2>
                    </div>
                    <div className='mt-8'>
                        <div className="border-b-[1px] border-[#F0F0F0] pb-3 cursor-pointer" onClick={()=>handlePrice({ low:0 , high:9.99 })}>
                           <p className="text-[#767676] text-[16px] font-dm font-normal">$0.00 - $9.99</p>
                        </div>
                         <div className="border-b-[1px] border-[#F0F0F0] pb-3 pt-3 cursor-pointer" onClick={()=>handlePrice({ low:10 , high:19.99 })}>
                           <p className="text-[#767676] text-[16px] font-dm font-normal">$10.00 - $19.99</p>
                        </div>
                         <div className="border-b-[1px] border-[#F0F0F0] pb-3 pt-3 cursor-pointer" onClick={()=>handlePrice({ low:20 , high:29.99 })}>
                           <p className="text-[#767676] text-[16px] font-dm font-normal">$20.00 - $29.99</p>
                        </div>
                         <div className="border-b-[1px] border-[#F0F0F0] pb-3 pt-3 cursor-pointer" onClick={()=>handlePrice({ low:30 , high:39.99 })}>
                           <p className="text-[#767676] text-[16px] font-dm font-normal">$30.00 - $39.99</p>
                        </div>
                         <div className="border-b-[1px] border-[#F0F0F0] pb-3 pt-3 cursor-pointer" onClick={()=>handlePrice({ low:40 , high:69.99 })}>
                           <p className="text-[#767676] text-[16px] font-dm font-normal">$40.00 - $69.99</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            {/* right part start */}
            <div className="w-9/12 lg:ml-10">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <IoAppsSharp onClick={handleList} className={`${active == true  ? "cursor-pointer border-[1px] border-[#737373] !w-[30px] !h-[30px] p-1 text-[25px] hover:bg-[#262626] hover:text-[#ffff] ml-4": "cursor-pointer bg-[#262626] text-[#ffff]  border-[1px] border-[#737373] !w-[30px] !h-[30px] p-1 text-[25px] hover:bg-[#262626] hover:text-[#ffff] ml-4" }`}/>

                  <AiOutlineBars onClick={handleList} className={`${active == true  ? "cursor-pointer bg-[#262626] text-[#ffff]  border-[1px] border-[#737373] !w-[30px] !h-[30px] p-1 text-[25px] hover:bg-[#262626] hover:text-[#ffff] ml-4" :"cursor-pointer border-[1px] border-[#737373] !w-[30px] !h-[30px] p-1 text-[25px] hover:bg-[#262626] hover:text-[#ffff] ml-4"}`}/>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                     <label for="fname" className="text-[#767676] text-[16px] font-dm font-normal">Sort by:</label>
                     <input type="text" className="border-[1px] border-[#F0F0F0] outline-0 px-1"></input>
                  </div>
                  <div className="ml-8 flex items-center gap-x-2">
                       <p  className="text-[#767676] text-[16px] font-dm font-normal">Show:</p>
                       <select name="" id="" className="border-[1px] border-[#F0F0F0] outline-0 px-1 w-[120px]" onClick={handlePageNum}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                       </select>
                  </div>
                </div>
              </div>
              <div >
               <Post allPage={allPage} filterCate={filterCate} active={active}></Post>
              </div>
              <div className="lg:mt-7">
               <Pagination pageNumber={pageNumber} paginate={paginate} next={next} prev={prev} currentPage ={currentPage} filterCate={filterCate}></Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products