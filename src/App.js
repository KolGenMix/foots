
import './App.scss';
import 'macro-css';
import Card from './components/Card';
import Header from './components/Header';
import Driwer from './components/Driwer';



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

        <div className='d-flex justify-between '>
          <Card />

        </div>
      </div>


    </div>



  )
}

export default App;
