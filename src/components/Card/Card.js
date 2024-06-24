import React from 'react'
import './Card.scss';
import ContentLoader from "react-content-loader"

const Card = ({ id, title, imageUrl, price, onFavority, onPlus, favorited = false, added = false, loading = false }) => {

    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavority, setIsFavority] = React.useState(favorited);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
        onPlus({ id, imageUrl, title, price });
    }

    const onClickFavority = () => {
        setIsFavority(!isFavority);
        onFavority({ id, imageUrl, title, price });
    }

    return (

        <div className='card mt-20'>
            {loading ? (
                <ContentLoader
                    speed={0}
                    width={150}
                    height={265}
                    viewBox="0 0 150 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"

                >
                    <rect x="3" y="-4" rx="8" ry="8" width="150" height="140" />
                    <rect x="0" y="180" rx="7" ry="7" width="100" height="15" />
                    <rect x="0" y="234" rx="4" ry="4" width="80" height="25" />
                    <rect x="113" y="230" rx="8" ry="8" width="32" height="32" />
                    <rect x="0" y="154" rx="7" ry="7" width="150" height="15" />
                </ContentLoader>) : (
                <>
                    <div key={id} className='favority' onClick={onClickFavority}>
                        <img src={isFavority ? '/img/liked.svg' : 'img/unliked.svg'} alt='Liked' />

                    </div>
                    <img width={133} height={112} src={imageUrl} alt='foot1' />


                    <h5>{title}
                    </h5>

                    <div className='cardBottom d-flex justify-between align-center'>
                        <div className='d-flex flex-column'>
                            <span>Цена:</span>
                            <b>{price}</b>
                        </div>


                        <img className='cu-p' onClick={onClickPlus}
                            src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                            alt='plus' />

                    </div>
                </>
            )}
        </div>
    )
}

export default Card;