
import './App.scss';
import 'macro-css'

function App() {
  return (
    <div className="wrapper clear">

      <div className='overlay'>
        <div className='driwer'>
          <h2 className='d-flex justify-between '>Корзина <img className='removeBtn cu-p' src='/img/btn-remove.svg' alt='Remove' /></h2>


          <div className='items'>

            <div className='cartItem  mt-30 p-20 '>
              <img className='mr-20 ' width={80} height={70} src='/sneakers/1.jpg' alt='foot1' />
              <div className='mr-20'>
                <p className='mt-10'>Мужские кроссовки
                  Nike Blazer Mid Suede
                </p>
                <b>12 999 руб</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
            </div>

            <div className='cartItem  mt-30 p-20 '>
              <img className='mr-20 ' width={80} height={70} src='/sneakers/2.jpg' alt='foot2' />
              <div className='mr-20'>
                <p className='mt-10'>Мужские кроссовки
                  Nike Air Man
                </p>
                <b>14 999 руб</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
            </div>
          </div>

          <div className='cartTotalBlock'>
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21498 руб</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб</b>
              </li>
            </ul>
            <button className='greenButton'>
              Оформить заказ<img src='/img/arrow.svg' alt='Arrow' />
            </button>
            <div>
              <img src='' alt='' />
            </div>
          </div>



        </div>
      </div>


      <header>
        <div className='headerLeft'>
          <img width={40} height={40} src="/img/logo.png" alt='logo' />
          <div className='headerInfo'>
            <h3>REACT SNEAKERS</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className='headerRight'>
          <li className='mr-30'>
            <img className='mr-5' width={18} height={18} src='/img/cart.svg' alt='Cart' />
            <span>1205 руб</span>
          </li>
          <li>
            <img className='mr-10' width={18} height={18} src='/img/heart.svg' alt='Heart' />
            <img width={18} height={18} src='/img/user.svg' alt='User' />
          </li>
        </ul>

      </header>

      <div className='content'>
        <div className='d-flex justify-between align-center mb-40'>
          <h1 className=''>Все кроссовки</h1>
          <div className=' d-flex search-block'>
            <img src='/img/search.svg' alt='Search' />
            <input className='cu-p' placeholder='Поиск:' type='text' />
          </div>
        </div>

        <div className='d-flex justify-between '>
          <div className='cart'>
            <div className='favority'>
              <img src='/img/liked.svg' alt='Liked' />
            </div>
            <img width={133} height={112} src='/sneakers/1.jpg' alt='foot1' />


            <h5>Мужские кроссовки
              Nike Blazer Mid Suede
            </h5>

            <div className='cartBottom d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>


              <img src='/img/btn-plus.svg' alt='plus' />

            </div>
          </div>
          <div className='cart'>
            <div className='favority'>
              <img src='/img/unliked.svg' alt='Unliked' />
            </div>
            <img width={133} height={112} src='/sneakers/2.jpg' alt='foot2' />


            <h5>Мужские кроссовки
              Nike Air Man
            </h5>

            <div className='cartBottom d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>14 999 руб</b>
              </div>

              <img src='/img/btn-plus.svg' alt='plus' />

            </div>
          </div>
          <div className='cart'>
            <div className='favority'>
              <img src='/img/unliked.svg' alt='Unliked' />
            </div>
            <img width={133} height={112} src='/sneakers/3.jpg' alt='foot3' />


            <h5>Мужские кроссовки
              Snake Blazer Mid
            </h5>

            <div className='cartBottom d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 780 руб</b>
              </div>


              <img src='/img/btn-plus.svg' alt='plus' />

            </div>
          </div>
          <div className='cart'>
            <div className='favority'>
              <img src='/img/unliked.svg' alt='Unliked' />
            </div>
            <img width={133} height={112} src='/sneakers/4.jpg' alt='foot4' />


            <h5>Мужские кроссовки
              Snake Suede Skope
            </h5>

            <div className='cartBottom d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>11 000 руб</b>
              </div>

              <img src='/img/btn-checked.svg' alt='plus' />

            </div>
          </div>
        </div>
      </div>


    </div>



  )
}

export default App;
