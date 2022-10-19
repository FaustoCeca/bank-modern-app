import styles from "../styles";

const CallToAction = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 
    bg-blue-gradient font-poppins font-medium text-[18px] text-primary
    outline-none rounded-lg ${styles}`}>
      Get Started
    </button>
  )
}

export default CallToAction;