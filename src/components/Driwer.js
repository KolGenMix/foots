import './Driwer.scss';

const Driwer = () => {
    return (
        <div className='driwer'>
            <h2 className='d-flex justify-between '>Корзина <img className='removeBtn cu-p' src='/img/btn-remove.svg' alt='Remove' /></h2>


            <div className='items'>

                <div className='cartItem  mt-30 p-20 '>
                    <img className='mr-20 ' width={80} height={70} src='/sneakers/1.jpg' alt='foot1' />
                    <div className='mr-20'>
                        <p className='mt-10'>Мужские кроссовки
                            Nike Blazer Mid Suede
                        </p>
                        <b>12 999 руб</b>
                    </div>
                    <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
                </div>

                <div className='cartItem  mt-30 p-20 '>
                    <img className='mr-20 ' width={80} height={70} src='/sneakers/2.jpg' alt='foot2' />
                    <div className='mr-20'>
                        <p className='mt-10'>Мужские кроссовки
                            Nike Air Man
                        </p>
                        <b>14 999 руб</b>
                    </div>
                    <img className='removeBtn' src='/img/btn-remove.svg' alt='Remove' />
                </div>
            </div>

            <div className='cartTotalBlock'>
                <ul>
                    <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>21498 руб</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб</b>
                    </li>
                </ul>
                <button className='greenButton'>
                    Оформить заказ<img src='/img/arrow.svg' alt='Arrow' />
                </button>

            </div>



        </div>
    )
}

export default Driwer;