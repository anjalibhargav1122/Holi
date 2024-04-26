import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Lottie from 'react-lottie-player'
import lottieJson from './holi img/ani.json'

const Coffee = (props) => {
  
  

  const val = [{
    img: 'https://ideas.ted.com/wp-content/uploads/sites/3/2022/07/FINAL_Coffee.jpg',
    name: 'Kopi Luwak',
    price: '7,000/-',
    title: 'Costliest Coffee In The World',
    ig: 'https://t4.ftcdn.net/jpg/01/16/61/93/360_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg',
    nam: 'Black Ivory Coffee',
    pric: '3,700/-',
    titl: 'Naturally Refined By Elephants'
  },
  {
    img: 'https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg',
    name: 'Dark Roast',
    price: '398.17/-',
    title: 'Widely Available',
    ig: 'https://static.vecteezy.com/system/resources/thumbnails/023/010/450/small/the-cup-of-latte-coffee-with-heart-shaped-latte-art-and-ai-generated-free-photo.jpg',
    nam: ' Espresso',
    pric: '475/-',
    titl: 'Metabolism And Help Boost Mood'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROAezgtO97dXEDpHkn8StvZSSLBe9IPcbUX9V8HprgPHZcT4AOKAxF5FE6XBiRo-NrGYk&usqp=CAU',
    name: 'Latte Cold Coffee',
    price: '101/-',
    title: 'Smoother And Sweeter',
    ig: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EonDfyPg3nWmNiyz3Y5mcQ1U2zSMbXimhVmJwiPQ42im0wo9Mqh_1pm5coeSbyYE7L8&usqp=CAU',
    nam: 'Classic Frappe',
    pric: '240/-',
    titl: 'Contains Nearly No Oil'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcTUKeliimEAxfADncVnvQwTibAeBvtLmULDu1aJWDyjwaz8mNaxu3FlkHNZhuaswTsA&usqp=CAU',
    name: ' BRU Classic Cold Coffee',
    price: '100/-',
    title: 'Leaves Some Acidity',
    ig: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlYBAt6MIBwfH8mECGoHCQfIviF5krMr37iaQ0kRZpaO57RRInrHZXpah2Ve6iDNVw_Q&usqp=CAU',
    nam: 'Cappuccino',
    pric: '219/-',
    titl: 'The Exotic Texture Of The Beverage'
  }
  ]

  return (
    <div>

      <header>
        <Header />
      </header>
      <section>
        <div className='container-fluid bk mt-1 pt-5 pb-5'>  <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6'>   <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: '50%', height: '100%' }}
            /></div>
            <div className='col-sm-12 col-md-6 col-lg-6'>{props.cd()}</div>

          </div>
        </div></div>

      </section>
      <section>
        <div className='container-fluid bj'>  <h2 className='text-center fw-bold pt-5 box_so display-3 text-white  frt mb-5'>All Coffies</h2>
          {
            val.map((cad) => {
              return (
                <div className='container pb-5 '>
                  <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-6'><div className='row'>
                      <div className='col-sm-12 col-md-2 col-lg-2'></div>
                      <div className='col-sm-12 col-md-8 col-lg-8'>
                        <div className='card sc '>
                          <div className='card-header bg-white'><img className='w-100 h-25' src={cad.img} /></div>
                          <div className='card-body text-center'><h3 className='frt'>{cad.name}</h3><h4 className='fco'>&#8377;{cad.price}</h4><h6>{cad.title}</h6></div></div>
                      </div>

                      <div className='col-sm-12 col-md-2 col-lg-2'></div>

                    </div></div>
                    <div className='col-sm-12 col-md-6 col-lg-6'>
                      <div className='row'>
                        <div className='col-sm-12 col-md-2 col-lg-2'></div>
                        <div className='col-sm-12 col-md-8 col-lg-8'><div className='card sc '>
                          <div className='card-header bg-white'><img className='w-100 h-25' src={cad.ig} /></div>
                          <div className='card-body text-center'><h3 className='frt'>{cad.nam}</h3><h4 className='fco'>&#8377;{cad.pric}</h4><h6>{cad.titl}</h6></div></div>

                        </div>



                        <div className='col-sm-12 col-md-2 col-lg-2'></div>

                      </div></div>

                  </div>
                </div>
              )
            })
          }</div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Coffee