import React from 'react'
import './Card.scss';


const Card = ({ title, imageUrl, price, onFavority, onPlus }) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => {
        setIsAdded(!isAdded);
        onPlus({ imageUrl, title, price });
    }

    return (
        <div className='card mt-20'>
            <div className='favority' onClick={onFavority}>
                <img src='/img/liked.svg' alt='Liked' />
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
        </div>
    )
}

export default Card;