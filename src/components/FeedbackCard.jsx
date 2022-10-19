import { quotes } from "../assets";


const FeedbackCard = ({content, name, title, img}) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] 
    max-w-[370px] md:mr-10 sm:mr-5 mr-0 mt-5 feedback-card">
      <img src={ quotes } alt="double-quotes" className="w-[42px] h-[27px] object-contain" />

      <p className="font-normal font-poppins text-[18px] leading-8 text-white my-10">
        {content}
      </p>

      <div className="flex flex-row gap-4">
        <img src={ img } alt={ name } className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col">
          <h4 className="font-semibold font-poppins 
          text-[20px] leading-8 text-white">{ name }
          </h4>

          <p className="font-poppins font-normal text-[16px] leading-6 text-dimWhite">{ title }</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard;