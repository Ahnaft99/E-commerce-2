

const Pagination = ({pageNumber , paginate,next,prev,currentPage,filterCate}) => {


    return (
        <>
            <nav aria-label="Page navigation example" className={`${filterCate.length > 0 ? "hidden": ""}`}>
                <ul class="inline-flex -space-x-px text-sm">
                    <li onClick={prev}>
                        <a class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">Previous</a>
                    </li>
                    {pageNumber.map((item , i)=>(
                    <li onClick={()=> paginate(i)}>
                        <a className={`${currentPage == i+1?"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-black border border-gray-300   dark:bg-[#FFFF] dark:border-gray-700 dark:text-black dark:hover:bg-gray-700  cursor-pointer" :"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer" }`}>
                            {item}
                        </a>
                    </li>
                    ))}
                    <li onClick={next}>
                        <a  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination