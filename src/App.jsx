import styles from "./styles";

import { NavBar, Billing, Business, CTA, CallToAction, CardDeal, Clients, 
  FeedbackCard, Footer, Hero, Stats, Testimonials } from "./components";


const App = () => {
  return (
    <div className='bg-primary overflow-hidden w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />

          <Business />
          
          <Billing />

          <CardDeal />

          <Testimonials />

          <Clients />

          <CTA />
          
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App;