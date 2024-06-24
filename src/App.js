import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.scss';
import 'macro-css';
import axios from 'axios';
// import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Driwer from './components/Driwer/Driwer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';



// const arr = [
//   { title: 'Мужские кроссовки Nike Blazer Mid Suede', imageUrl: './sneakers/1.jpg', price: 12999 },
//   { title: 'Мужские кроссовки Nike Air Max', imageUrl: './sneakers/2.jpg', price: 15600 },
//   { title: 'Мужские кроссовки Nike Air Max', imageUrl: './sneakers/3.jpg', price: 8499 },
//   { title: 'Мужские кроссовки Puma X Aka Boku Future Rider', imageUrl: './sneakers/4.jpg', price: 14600 },
//   { title: 'Мужские кроссовки Nike Spring Suede', imageUrl: './sneakers/5.jpg', price: 13999 },
//   { title: 'Мужские кроссовки Nike Spring Max', imageUrl: './sneakers/6.jpg', price: 15000 },
//   { title: 'Мужские кроссовки Puma Air Max', imageUrl: './sneakers/7.jpg', price: 8999 },
//   { title: 'Мужские кроссовки Puma  Future Rider', imageUrl: './sneakers/8.jpg', price: 18600 },
//   { title: 'Мужские кроссовки Puma  Max', imageUrl: './sneakers/9.jpg', price: 10499 },
//   { title: 'Мужские кроссовки Puma Winter', imageUrl: './sneakers/10.jpg', price: 12600 },
//   { title: 'Мужские кроссовки Nike Blazer Mid Suede', imageUrl: './sneakers/1.jpg', price: 11999 },
//   { title: 'Мужские кроссовки Nike Air Max', imageUrl: './sneakers/2.jpg', price: 17600 }
// ]

export const AppContext = React.createContext({});

function App() {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);


  // React.useEffect(() => {
  //   fetch('https://65c5d368e5b94dfca2e05e27.mockapi.io/items').then((res) => { return res.json(); })
  //     .then((json) => { setItems(json); });
  // }, []);


  // сначала
  // React.useEffect(() => {
  //   axios.get('https://65c5d368e5b94dfca2e05e27.mockapi.io/items')
  //     .then((res) => { setItems(res.data); });

  //   axios.get('https://65c5d368e5b94dfca2e05e27.mockapi.io/cart')
  //     .then((res) => {
  //       setCartItems(res.data);
  //     });

  //   axios.get('https://65c5d368e5b94dfca2e05e27.mockapi.io/favorites')
  //     .then((res) => {
  //       setFavorites(res.data);
  //     });

  // }, []);

  //  async  await

  React.useEffect(() => {

    async function fetchData() {
      setIsLoading(true);

      const cartResponse = await axios.get('https://65c5d368e5b94dfca2e05e27.mockapi.io/cart');
      // const favoritesResponse = await axios.get('https://65c5d368e5b94dfca2e05e27.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://65c5d368e5b94dfca2e05e27.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      // setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);


  // const onAddToCard = (obj) => { setCartItems((prev) => [...prev, obj]); }

  const onAddToCard = async (obj) => {

    try {
      if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://65c5d368e5b94dfca2e05e27.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(obj.id)));

      } else {
        const { data } = await
          axios.post('https://65c5d368e5b94dfca2e05e27.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, data]);
      }
    }
    catch (error) {
      alert('Не получилось')
    }



    // axios.post('https://65c5d368e5b94dfca2e05e27.mockapi.io/cart', obj);
    // setCartItems((prev) => [...prev, obj]);
  };

  const onCloseCartItem = (id) => {
    axios.delete(`https://65c5d368e5b94dfca2e05e27.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  const onAddToFavority = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://65c5d368e5b94dfca2e05e27.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await
          axios.post('https://65c5d368e5b94dfca2e05e27.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    }
    catch (error) {
      alert('не получилось');
    }
  };

  const onChangeSearchInput = (event) => { setSearchValue(event.target.value) };

  const isItermAdded = (id) => { return cartItems.some(obj => Number(obj.id) === Number(id)) }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItermAdded, setCartOpened, setCartItems }}>

      <div className="wrapper clear">


        {cartOpened ? <Driwer
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
          onRemove={onCloseCartItem}

        /> : null}




        <Header
          onClickCart={() => setCartOpened(true)
          } />


        <Routes>
          <Route path="/" exact element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavority={onAddToFavority}
              onAddToCard={onAddToCard}
              isLoading={isLoading}
            />} />

          <Route path='/favorites' exact element={
            < Favorites
              items={favorites}
              onAddToFavority={onAddToFavority}
            />
          } />
        </Routes>


        {/* <div className='content'>
        <div className='d-flex justify-between align-center mb-40'>
          <h1 className=''>{searchValue ? `Поиск по запросу:'${searchValue}'` : 'Все кроссовки'}</h1>
          <div className=' d-flex search-block'>
            <img src='/img/search.svg' alt='Search' />
            {searchValue ? <img onClick={() => setSearchValue('')} className='clear cu-p' src='/img/btn-remove.svg' alt='Close' /> : null}
            <input onChange={onChangeSearchInput} className='cu-p' placeholder='Поиск:' type='text' value={searchValue} />
          </div>
        </div>

        <div className='d-flex justify-around flex-wrap'>{
          items.filter((item) => item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())).map((item) =>
          (
            <Card
              key={item.title}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              onPlus={(obj) =>
                onAddToCard(obj)


              }
              onFavority={(obj) => onAddToFavority(obj)
              }

            />
          ))};


        </div>
      </div> */}



      </div>
    </AppContext.Provider>


  )
}


export default App;
