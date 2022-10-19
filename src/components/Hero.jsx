import styles from "../styles";
import { discount, robot } from "../assets";
import { GetStarted } from "./";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 ss:px-16 px-6`}>
        {/* Discount */}
        <div className="flex flex-row items-center py-[6px] px-4
        bg-discount-gradient rounded-[10px] mb-2">
          <img src={ discount } alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} mx-2`}>
            <span className="text-white">20%
            </span> Discount For {" "}
            <span className="text-white">3 Months
            </span> Account 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px]
          text-[45px] text-white ss:leading-[100px] leading-[70px]">
            The Next <br className="ss:block hidden"/> 
            {" "}
            <span className="text-gradient">Generation <br className="ss:block hidden"/> </span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h2 className="font-poppins font-semibold ss:text-[68px]
          text-[41px] text-white ss:leading-[100px] leading-[70px] w-full">
            Payment Method.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
          Our team of experts uses a methodology to identify the credit cards most likely
          to fit your needs.
          We examine annual fees, rewards, and other factors to find the best credit card
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={ robot } alt="robot" className="w-full h-full z-[5] sm:mt-0 mt-16"/>
      
        <div className="absolute z-[0] w-[40%] h-[35%]
        top-0 pink__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%]
        top-0 bottom-20 blue__gradient"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero;