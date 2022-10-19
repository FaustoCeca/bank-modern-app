import { card } from '../assets';
import styles, { layout } from '../styles';
import { CallToAction } from './';

const CardDeal = () => {
  return (
    <section className={ layout.section }>
      <div className={ layout.sectionInfo }>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className='sm:block hidden'/>
          in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mb-6'`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet 
          eget mauris tortor.c Aliquet ultrices ac, amatau.
        </p>

        <CallToAction styles={'mt-5'}/>
      </div>

      <div className={layout.sectionImg}>
        <img src={ card } alt='card' className='w-full h-full' />
      </div>
    </section>
  )
}

export default CardDeal;