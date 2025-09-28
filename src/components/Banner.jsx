import Slider from 'react-slick';
import bannerImg from '../assets/banner.png'
import { useSelector } from 'react-redux';

const Banner = () => {
    const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position:'absolute',
          top:'50%',
          left:'8%',
          transform:'translateY(-50%)',
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width:'30px',
          padding:'12px 0px',
          color: "transparent",
          borderRight:'3px solid #fff',
        }}
      >
        0{i + 1}
      </div>
    )
  };
  let data = useSelector((state)=>state.product.number)

  
  return (
    <>
      <div className="w-full">
        <Slider {...settings}>
        <div className="">
            <img src={bannerImg} alt="" />
        </div>
        <div className="">
            <img src={bannerImg} alt="" />
        </div>
        <div className="">
            <img src={bannerImg} alt="" />
        </div>
        </Slider>
      </div>
    </>
  )
}

export default Banner