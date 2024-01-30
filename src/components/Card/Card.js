import './Card.scss';


const Card = (props) => {
    return (
        <div className='card'>
            <div className='favority'>
                <img src='/img/liked.svg' alt='Liked' />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt='foot1' />


            <h5>{props.name}
            </h5>

            <div className='cardBottom d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>


                <img src='/img/btn-plus.svg' alt='plus' />

            </div>
        </div>
    )
}

export default Card;