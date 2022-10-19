import { features } from '../constants';
import styles, { layout } from '../styles';
import { CallToAction, FeatureCard } from './';

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className='sm:block hidden'/> 
          we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>We provide a simple and secure way for you to accept payments from your customers.
          We also provide you with the tools to manage and grow your money online.
        </p>

        <CallToAction styles="mt-10"/>
      </div>

      <div className={`${ layout.sectionImg } flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature}/>
        ))}
      </div>
    </section>
  )
}

export default Business;