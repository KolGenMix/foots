import React from 'react'
import './Card.scss';


const Card = (props) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const onClickPlus = () => setIsAdded(!isAdded);


    return (
        <div className='card'>
            <div className='favority' onClick={props.onFavority}>
                <img src='/img/liked.svg' alt='Liked' />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt='foot1' />


            <h5>{props.title}
            </h5>

            <div className='cardBottom d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>


                <img className='cu-p' onClick={onClickPlus}
                    src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                    alt='plus' />

            </div>
        </div>
    )
}

export default Card;