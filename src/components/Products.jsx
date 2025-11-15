import { useContext, useEffect, useState } from "react"
import { AiOutlineBars } from "react-icons/ai"
import { FaCaretDown, FaCaretUp } from "react-icons/fa"
import { FiPlus } from "react-icons/fi"
import { IoAppsSharp } from "react-icons/io5"
import Post from "./Post"
import Pagination from "./Pagination"
import { Apidata } from "./ContextApi"

const Products = () => {
  let info = useContext(Apidata)
  let [show, SetShow] = useState(false)
  let [showOne, setShowTwo] = useState(false)
  let [perPage, setPerpage] = useState(10)
  let [currentPage, setCurrenPage] = useState(1)
  let [Category, setCategory] = useState([])
  let [filterCate, setFilterCate] = useState([])
  let [brand, setBrand] = useState([])
  let [active, setActive] = useState(false)
  let [low, setLow] = useState({})
  let [high, setHigh] = useState({})

  let lastPage = perPage * currentPage
  let firstPage = lastPage - perPage
  let allPage = info.slice(firstPage, lastPage)

  let pageNumber = []
  for (let i = 1; i <= Math.ceil(info.length / perPage); i++) {
    pageNumber.push(i)
  }

  let paginate = (index) => {
    setCurrenPage(index + 1)
  }

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrenPage((state) => state + 1)
    }
  }
  let prev = () => {
    if (currentPage > 1) {
      setCurrenPage((state) => state - 1)
    }
  }

  let handlePageNum = (e) => {
    setPerpage(e.target.value)
  }

  useEffect(() => {
    setCategory([...new Set(info.map((item) => item.category))])
    setBrand([...new Set(info.map((item) => item.brand))])
  }, [info])

  let handleCategory = (cItem) => {
    let filterItem = info.filter((item) => item.category == cItem)
    setFilterCate(filterItem)
  }

  let handleAllPro = () => {
    setFilterCate("")
  }

  let handleList = () => {
    setActive(!active)
  }

  let handleBrand = (bItem) => {
    let filterBrand = info.filter((item) => item.brand == bItem)
    setFilterCate(filterBrand)
  }

  let handlePrice = (value) => {
    setLow(value.low)
    setHigh(value.high)
    let filterPrice = info.filter(
      (item) => item.price > value.low && item.price < value.high
    )
    setFilterCate(filterPrice)
  }

  return (
    <>
      <div className="lg:py-[100px] py-[50px]">
        <div className="lg:w-10/12 mx-auto w-11/12">
          {/* TITLE */}
          <div className="w-full">
            <p className="text-[#262626] text-[32px] md:text-[49px] font-bold font-dm">
              Products
            </p>
            <p className="text-[#767676] text-[12px] font-dm font-normal">
              Home / Products
            </p>
          </div>

          {/* MAIN WRAPPER */}
          <div className="flex flex-col lg:flex-row mt-[40px] lg:mt-[90px] gap-10">

            {/* SIDEBAR */}
            <div className="w-full lg:w-3/12">
              <div>
                {/* Category */}
                <p className="text-[#262626] text-[20px] font-dm font-bold">
                  Shop by Category
                </p>

                <div className="mt-8">
                  <div
                    onClick={handleAllPro}
                    className="flex justify-between items-center border-b pb-2 cursor-pointer"
                  >
                    <p className="text-[#767676] text-[16px] font-dm pt-2">
                      All Product
                    </p>
                    <FiPlus />
                  </div>

                  {Category.map((item) => (
                    <div
                      onClick={() => handleCategory(item)}
                      className="flex justify-between items-center border-b pb-2 cursor-pointer"
                    >
                      <p className="text-[#767676] text-[16px] font-dm pt-2">
                        {item}
                      </p>
                      <FiPlus />
                    </div>
                  ))}
                </div>

                {/* COLOR */}
                <div className="mt-10">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => SetShow(!show)}
                  >
                    <h2 className="text-[#262626] text-[20px] font-dm font-bold">
                      Shop by Color
                    </h2>
                    {show ? <FaCaretUp /> : <FaCaretDown />}
                  </div>

                  <div className={`mt-8 ${show ? "block" : "hidden"}`}>
                    <div className="border-b pb-3 flex items-center">
                      <div className="bg-[#000] h-[11px] w-[11px] rounded-full"></div>
                      <p className="text-[#767676] text-[16px] pl-5">Color 1</p>
                    </div>

                    <div className="border-b pb-3 pt-3 flex items-center">
                      <div className="bg-[#FF8686] h-[11px] w-[11px] rounded-full"></div>
                      <p className="text-[#767676] text-[16px] pl-5">Color 2</p>
                    </div>

                    <div className="border-b pb-3 pt-3 flex items-center">
                      <div className="bg-[#7ED321] h-[11px] w-[11px] rounded-full"></div>
                      <p className="text-[#767676] text-[16px] pl-5">Color 3</p>
                    </div>

                    <div className="border-b pb-3 pt-3 flex items-center">
                      <div className="bg-[#B6B6B6] h-[11px] w-[11px] rounded-full"></div>
                      <p className="text-[#767676] text-[16px] pl-5">Color 4</p>
                    </div>

                    <div className="border-b pb-3 pt-3 flex items-center">
                      <div className="bg-[#15CBA5] h-[11px] w-[11px] rounded-full"></div>
                      <p className="text-[#767676] text-[16px] pl-5">Color 5</p>
                    </div>
                  </div>
                </div>

                {/* BRAND */}
                <div className="mt-10">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setShowTwo(!showOne)}
                  >
                    <h2 className="text-[#262626] text-[20px] font-dm font-bold">
                      Shop by Brand
                    </h2>
                    {showOne ? <FaCaretUp /> : <FaCaretDown />}
                  </div>

                  <div className={`mt-8 ${showOne ? "block" : "hidden"}`}>
                    {brand.map((item) => (
                      <div
                        className="border-b pb-2 cursor-pointer"
                        onClick={() => handleBrand(item)}
                      >
                        <p className="text-[#767676] text-[16px] pt-2">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PRICE */}
                <div className="mt-10">
                  <h2 className="text-[#262626] text-[20px] font-dm font-bold">
                    Shop by Price
                  </h2>

                  <div className="mt-8">
                    <div
                      className="border-b pb-3 cursor-pointer"
                      onClick={() => handlePrice({ low: 0, high: 9.99 })}
                    >
                      <p className="text-[#767676] text-[16px]">
                        $0.00 - $9.99
                      </p>
                    </div>

                    <div
                      className="border-b pb-3 pt-3 cursor-pointer"
                      onClick={() => handlePrice({ low: 10, high: 19.99 })}
                    >
                      <p className="text-[#767676] text-[16px]">
                        $10.00 - $19.99
                      </p>
                    </div>

                    <div
                      className="border-b pb-3 pt-3 cursor-pointer"
                      onClick={() => handlePrice({ low: 20, high: 29.99 })}
                    >
                      <p className="text-[#767676] text-[16px]">
                        $20.00 - $29.99
                      </p>
                    </div>

                    <div
                      className="border-b pb-3 pt-3 cursor-pointer"
                      onClick={() => handlePrice({ low: 30, high: 39.99 })}
                    >
                      <p className="text-[#767676] text-[16px]">
                        $30.00 - $39.99
                      </p>
                    </div>

                    <div
                      className="border-b pb-3 pt-3 cursor-pointer"
                      onClick={() => handlePrice({ low: 40, high: 69.99 })}
                    >
                      <p className="text-[#767676] text-[16px]">
                        $40.00 - $69.99
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE AREA */}
            <div className="w-full lg:w-9/12 lg:ml-10">
              {/* TOP BAR */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">

                {/* ICON BUTTONS */}
                <div className="flex">
                  <IoAppsSharp
                    onClick={handleList}
                    className={`${
                      active
                        ? "cursor-pointer border border-[#737373] w-[30px] h-[30px] p-1 text-[25px] ml-4"
                        : "cursor-pointer bg-[#262626] text-white border border-[#737373] w-[30px] h-[30px] p-1 ml-4"
                    }`}
                  />

                  <AiOutlineBars
                    onClick={handleList}
                    className={`${
                      active
                        ? "cursor-pointer bg-[#262626] text-white border border-[#737373] w-[30px] h-[30px] p-1 ml-4"
                        : "cursor-pointer border border-[#737373] w-[30px] h-[30px] p-1 ml-4"
                    }`}
                  />
                </div>

                {/* SORT AND SHOW */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex items-center">
                    <label className="text-[#767676] text-[16px] font-dm">
                      Sort by:
                    </label>
                    <input
                      type="text"
                      className="border px-1 ml-2 outline-0"
                    />
                  </div>

                  <div className="flex items-center">
                    <p className="text-[#767676] text-[16px] font-dm">
                      Show:
                    </p>
                    <select
                      className="border px-1 w-[120px] ml-2 outline-0"
                      onClick={handlePageNum}
                    >
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* PRODUCTS */}
              <div>
                <Post
                  allPage={allPage}
                  filterCate={filterCate}
                  active={active}
                />
              </div>

              {/* PAGINATION */}
              <div className="mt-7">
                <Pagination
                  pageNumber={pageNumber}
                  paginate={paginate}
                  next={next}
                  prev={prev}
                  currentPage={currentPage}
                  filterCate={filterCate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
