

import Card from '../components/Card/Card'

function Favorites({ items, onAddToFavority }) {
    return (
        <div className='content'>
            <div className='d-flex justify-between align-center mb-40'>
                <h1 className=''>Мои закладки</h1>

            </div>

            <div className='d-flex justify-around flex-wrap'>
                тут закладки
                {
                    items.map((item) =>
                    (
                        <Card
                            key={item.title}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            price={item.price}
                            id={item.id}
                            favorited={true}
                            // onPlus={(obj) =>
                            //     onAddToCard(obj)


                            // }
                            onFavority={(obj) => onAddToFavority(obj)
                            }

                        />
                    ))};


            </div>
        </div>
    );
}

export default Favorites;