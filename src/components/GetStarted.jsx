import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] 
    rounded-full bg-blue-gradient p-1 cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full
      rounded-full`}>

        <div className={`${styles.flexStart} flex-row`}>  
          <p className="font-poppins font-medium 
          font-[18px] leading-[23px] text-gradient mr-1">
            Get
          </p>
          <img src={arrowUp} alt="arrow" 
          className="w-[23px] h-[23px] object-contain" />
        </div>

        <p className="font-poppins font-medium 
        font-[18px] leading-[23px] text-gradient">
          Started
        </p>

      </div>
    </div>
  )
}

export default GetStarted;