
import './App.scss';
import 'macro-css'

function App() {
  return (
    <div className="wrapper clear">
      <header>
        <div className='headerLeft'>
          <img width={40} height={40} src="/img/logo.png" alt='logo' />
          <div className='headerInfo'>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className='headerRight'>
          <li className='mr-30'>
            <img className='mr-5' width={18} height={18} src='/img/cart.svg' alt='cart' />
            <span>1205 руб</span>
          </li>
          <li>
            <img width={18} height={18} src='/img/user.svg' alt='user' />
          </li>
        </ul>

      </header>

      <div className='content'>
        <div className='d-flex justify-between align-center'>
          <h1 className='mb-40'>Все кроссовки</h1>
          <input placeholder='Поиск:' type='text' />
        </div>

        <div className='d-flex justify-between '>
          <div className='cart'>
            <img src='/img/heart.svg' alt='heart' />
            <img width={133} height={112} src='/sneakers/1.jpg' alt='foot1' />


            <h5>Мужские кроссовки
              Nike Blazer Mid Suede
            </h5>

            <div className='cartBottom d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб</b>
              </div>

              <button className='button'>
                <img src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
          <div className='cart'>
            <img src='/img/heart.svg' alt='heart' />
            <img width={133} height={112} src='/sneakers/2.jpg' alt='foot2' />


            <h5>Мужские кроссовки
              Nike Air Man
            </h5>

            <div className='cartBottom d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>14 999 руб</b>
              </div>

              <button className='button'>
                <img src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
          <div className='cart'>
            <img src='/img/heart.svg' alt='heart' />
            <img width={133} height={112} src='/sneakers/3.jpg' alt='foot3' />


            <h5>Мужские кроссовки
              Snake Blazer Mid
            </h5>

            <div className='cartBottom d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 780 руб</b>
              </div>

              <button className='button'>
                <img src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
          <div className='cart'>
            <img src='/img/heart.svg' alt='heart' />
            <img width={133} height={112} src='/sneakers/4.jpg' alt='foot4' />


            <h5>Мужские кроссовки
              Snake Suede Skope
            </h5>

            <div className='cartBottom d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>11 000 руб</b>
              </div>

              <button className='button'>
                <img src='/img/plus.svg' alt='plus' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default App;
