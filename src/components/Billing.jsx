import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";


const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-full h-full relative z-[5]"/>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your billing <br className="sm:block hidden"/>
          and invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed faucibus turpis in eu mi bibendum neque.
          Egestas integer eget aliquet nibh praesent tristique magna sit amet.
          Nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus.
          Nunc sed blandit libero volutpat sed 
        </p>

        <div className="flex flex-row flex-wrap gap-8 sm:mt-10 mt-6">
          <img className="w-[128px] h-[42px] cursor-pointer" src={ apple } alt="app-store" />
          <img className="w-[128px] h-[42px] cursor-pointer" src={ google } alt="google-play" />
        </div>
      </div>
    </section>
  )
}

export default Billing;