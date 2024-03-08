import './Header.scss';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (<header>
        <Link to="/">
            <div className='headerLeft'>
                <img width={40} height={40} src="/img/logo.png" alt='logo' />
                <div className='headerInfo'>
                    <h3>REACT SNEAKERS</h3>
                    <p className='opacity-5'>Магазин лучших кроссовок</p>
                </div>
            </div>
        </Link>
        <ul className='headerRight'>
            <li onClick={props.onClickCart} className='mr-30 cu-p'>
                <img className='mr-5' width={18} height={18} src='/img/cart.svg' alt='Cart' />
                <span>1205 руб</span>
            </li>
            <li className='mr-20 cu-p' >

                <Link to="/favorites">
                    <img width={18} height={18} src='/img/heart.svg' alt='Heart' />
                </Link>

            </li>

            <li>
                <img width={18} height={18} src='/img/user.svg' alt='User' />
            </li>
        </ul>
    </header>
    )
}

export default Header;