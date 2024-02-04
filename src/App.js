import React from 'react';
import './App.scss';
import 'macro-css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Driwer from './components/Driwer/Driwer';

const arr = [
  { title: 'Мужские кроссовки Nike Blazer Mid Suede', imageUrl: './sneakers/1.jpg', price: 12999 },
  { title: 'Мужские кроссовки Nike Air Max', imageUrl: './sneakers/2.jpg', price: 15600 },
  { title: 'Мужские кроссовки Nike Air Max', imageUrl: './sneakers/3.jpg', price: 8499 },
  { title: 'Мужские кроссовки Puma X Aka Boku Future Rider', imageUrl: './sneakers/4.jpg', price: 14600 }
]

function App() {

  const [cartOpened, setCartOpened] = React.useState(false);



  return (
    <div className="wrapper clear">


      {cartOpened ? <Driwer onCloseCart={() => setCartOpened(false)} /> : null}

      <Header
        onClickCart={() => setCartOpened(true)
        } />


      <div className='content'>
        <div className='d-flex justify-between align-center mb-40'>
          <h1 className=''>Все кроссовки</h1>
          <div className=' d-flex search-block'>
            <img src='/img/search.svg' alt='Search' />
            <input className='cu-p' placeholder='Поиск:' type='text' />
          </div>
        </div>

        <div className='d-flex justify-between '>{
          arr.map((obj) =>
          (
            <Card
              title={obj.title}
              imageUrl={obj.imageUrl}
              price={obj.price}
              onPlus={() => alert('Нажали на плюс')}
              onFavority={() => alert('Добавили в закладки')}

            />
          ))}


        </div>
      </div>


    </div>



  )
}

export default App;
