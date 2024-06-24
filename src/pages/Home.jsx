import Card from '../components/Card/Card'
import React from 'react';
import { AppContext } from '../App';

function Home({ items, cartItems, searchValue, setSearchValue, onChangeSearchInput, onAddToCard, onAddToFavority, isLoading }) {

    const { isItermAdded } = React.useContext(AppContext);

    const renderItem = () => {



        const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        return (isLoading ? [...Array(8)] :

            filteredItems
        ).map((item, index) => (

            <Card
                key={index}

                // title={item.title}
                // imageUrl={item.imageUrl}
                // price={item.price}
                added={isItermAdded(item && item.id)}
                loading={isLoading}

                onPlus={(obj) =>
                    onAddToCard(obj)


                }
                onFavority={(obj) => onAddToFavority(obj)
                }
                {...item}

            />
        ));
    };
    return (
        <div className='content'>
            <div className='d-flex justify-between align-center mb-40'>
                <h1 className=''>{searchValue ? `Поиск по запросу:'${searchValue}'` : 'Все кроссовки'}</h1>
                <div className=' d-flex search-block'>
                    <img src='/img/search.svg' alt='Search' />
                    {searchValue ? <img onClick={() => setSearchValue('')} className='clear cu-p' src='/img/btn-remove.svg' alt='Close' /> : null}
                    <input onChange={onChangeSearchInput} className='cu-p' placeholder='Поиск:' type='text' value={searchValue} />
                </div>
            </div>

            <div className='d-flex justify-around flex-wrap'>

                {renderItem()}


            </div>
        </div>
    );
}

export default Home;