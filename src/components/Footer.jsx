import { logo } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import styles from "../styles"

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} border-t-2 border-slate-800 flex flex-col`}>
      
      <div className={`${styles.flexStart} md:flex-row flex-col mb-6 w-full`}>
        
        <div className="flex-1 flex flex-col">
          <img src={ logo } alt="logo" className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make your payments ease, realiable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row
        justify-between flex-wrap md:mt-0 mt-10">
          { footerLinks.map((footerLink) => (
              <div key={footerLink.title} className="flex flex-col sm:my-0 my-4 min-w-[150px]">
                  <h4 className="font-poppins font-medium text-[19px] leading-7 text-white mb-2">
                    { footerLink.title }
                  </h4>
                  <ul className="flex flex-col gap-2">
                    { footerLink.links.map((link) => (
                      <li key={link.name} className={`font-poppins font-normal 
                      text-[17px] leading-6 text-dimWhite hover:text-secondary cursor-pointer`}>
                        { link.name }
                      </li>
                    ))}
                  </ul>
              </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
         <p className="font-poppins font-normal text-center text-[19px] leading-7 text-white">
          2021 HooBank. All Rights Reserved.
         </p>

         <div className="flex flex-row gap-6 items-center justify-center sm:mt-4 mt-8">
            { socialMedia.map(( social ) => (
                <img
                  key={ social.id } 
                  src={ social.icon } 
                  alt={ social.id } 
                  className={`w-[30px] h-[30px] object-contain 
                  cursor-pointer hover:opacity-80`}
                />
            ))}
         </div>
      </div>
    </footer>
  )
}

export default Footer;