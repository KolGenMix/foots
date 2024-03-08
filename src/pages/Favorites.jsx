

import Card from '../components/Card/Card'

function Favorites({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToCard, onAddToFavority }) {
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
        </div>
    );
}

export default Favorites;