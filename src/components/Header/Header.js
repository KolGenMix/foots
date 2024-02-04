import './Header.scss';


const Header = (props) => {
    return (<header>
        <div className='headerLeft'>
            <img width={40} height={40} src="/img/logo.png" alt='logo' />
            <div className='headerInfo'>
                <h3>REACT SNEAKERS</h3>
                <p className='opacity-5'>Магазин лучших кроссовок</p>
            </div>
        </div>

        <ul className='headerRight'>
            <li onClick={props.onClickCart} className='mr-30 cu-p'>
                <img className='mr-5' width={18} height={18} src='/img/cart.svg' alt='Cart' />
                <span>1205 руб</span>
            </li>
            <li>
                <img className='mr-10' width={18} height={18} src='/img/heart.svg' alt='Heart' />
                <img width={18} height={18} src='/img/user.svg' alt='User' />
            </li>
        </ul>
    </header>
    )
}

export default Header;