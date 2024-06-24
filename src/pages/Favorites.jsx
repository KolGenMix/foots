import React from 'react';
import { AppContext } from '../App';
import Card from '../components/Card/Card'

function Favorites({ onAddToFavority }) {

    const { favorites } = React.useContext(AppContext);
    return (
        <div className='content'>
            <div className='d-flex justify-between align-center mb-40'>
                <h1 className=''>Мои закладки</h1>

            </div>

            <div className='d-flex justify-around flex-wrap'>
                тут закладки
                {
                    favorites.map((item) =>
                    (
                        <Card
                            // key={item.title}
                            // title={item.title}
                            // imageUrl={item.imageUrl}
                            // price={item.price}

                            favorited={true}
                            // onPlus={(obj) =>
                            //     onAddToCard(obj)


                            // }
                            onFavority={(obj) => onAddToFavority(obj)

                            }
                            {...item}

                        />
                    ))};


            </div>
        </div>
    );
}

export default Favorites;