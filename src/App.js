
import './App.scss';
import 'macro-css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Driwer from './components/Driwer/Driwer';

const arr = [
  { name: 'Мужские кроссовки Nike Blazer Mid Suede', imageUrl: './sneakers/1.jpg', price: 12999 },
  { name: 'Мужские кроссовки Nike Air Max', imageUrl: './sneakers/2.jpg', price: 15600 }
]

function App() {
  return (
    <div className="wrapper clear">

      <div style={{ display: 'none' }} className='overlay'>

        <Driwer />

      </div>

      <Header />


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
              name={obj.name}
              imageUrl={obj.imageUrl}
              price={obj.price}
            />
          ))}


        </div>
      </div>


    </div>



  )
}

export default App;
