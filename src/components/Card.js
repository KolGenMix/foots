import './Card.scss';


const Card = () => {
    return (
        <div className='card'>
            <div className='favority'>
                <img src='/img/liked.svg' alt='Liked' />
            </div>
            <img width={133} height={112} src='/sneakers/1.jpg' alt='foot1' />


            <h5>Мужские кроссовки
                Nike Blazer Mid Suede
            </h5>

            <div className='cardBottom d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>12 999 руб</b>
                </div>


                <img src='/img/btn-plus.svg' alt='plus' />

            </div>
        </div>
    )
}

export default Card;