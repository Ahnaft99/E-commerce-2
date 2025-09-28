import addImg from '../assets/ad.png'
import addImg1 from '../assets/ad1.png'
import addImg2 from '../assets/ad2.png'

const Add = () => {
  return (
    <>
     <div className="lg:pt-[100px] pt-[50px] lg:pb-[60px] pb-[20px]">
      <div className="lg:w-10/12 mx-auto w-11/12">
       <div className="flex lg:gap-x-8 gap-x-3">
        <div className="w-2/4">
          <div className="">
            <img src={addImg} alt="" className='w-full'/>
          </div>
        </div>
        <div className="w-2/4">
          <div className="">
            <img src={addImg1} alt="" className='w-full'/>
            <img src={addImg2} alt="" className='w-full lg:pt-8 pt-3'/>
          </div>
        </div>
       </div>
      </div>
     </div>
    </>
  )
}

export default Add