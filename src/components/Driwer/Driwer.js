import './Driwer.scss';
import React from 'react';
import Info from '../Info/Info';
import { AppContext } from '../../App';

const Driwer = ({ items = [], onCloseCart, onRemove }) => {

    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);

    const onOrder = () => {
        setIsOrderCompleted(true);
        setCartItems([]);
    }

    const { setCartItems } = React.useContext(AppContext);

    return (<div className='overlay'>
        <div className='driwer'>
            <h2 className='d-flex justify-between mb-40'>Корзина <img onClick={onCloseCart} className='removeBtn cu-p' src='/img/btn-remove.svg' alt='Remove' /></h2>



            {items.length > 0 ?
                (<div className='d-flex flex-column flex'>
                    <div className='items'>
                        {/* <div className='cartItem  d-flex align-center mb-20 '>
                    <div style={{ backgroundImage: 'url( /sneakers/1.jpg)' }} className='cartItemImg'></div>
                    <div className='mr-20 flex'>
                        <p className='mb-5'>Мужские кроссовки
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
                </div> */}
                        {items.map((obj) => (
                            <div key={obj.id} className='cartItem  d-flex align-center mb-20'>
                                <div style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                    className='cartItemImg'></div>

                                <div className='mr-20 flex'>
                                    <p className='mb-5'>{obj.title}
                                    </p>
                                    <b>{obj.price} руб</b>
                                </div>
                                <img onClick={() => onRemove(obj.id)} className='removeBtn' src='/img/btn-remove.svg' alt='RemoveBtn' />
                            </div>))}
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
                        <button onClick={() => onOrder()} className='greenButton'>
                            Оформить заказ<img src='/img/arrow.svg' alt='Arrow' />
                        </button>

                    </div>
                </div>) :
                (
                    <Info title={isOrderCompleted ? "Заказ оформлен" :
                        "Корзина пустая"} description={isOrderCompleted ? "Ваш заказ #18 будет передан курьерской доставке" :
                            "Добавьте хотя бы одну пару кроссовок чтобы сделать заказ"}
                        image={isOrderCompleted ? "img/complete-order.jpg" :
                            "/img/empty-cart.jpg"}
                    />)


                // <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                //     <img className='mb-20' width='120px' height='120px' src='/img/empty-cart.jpg' alt='Empty' />
                //     <h2>Корзина пустая</h2>
                //     <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок,чтобы сделать заказ</p>
                //     <button onClick={onCloseCart} className='greenButton'>
                //         <img src='/img/arrow.svg' alt='Arrow' />
                //         Вернутся назад

                //     </button>
                // </div>)
            }





        </div>
    </div>
    )
}

export default Driwer;