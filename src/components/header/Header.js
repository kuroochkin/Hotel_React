import './header.scss';

const Header = () => {


    return (
        <div class="header">
            <div class="container">
                <div class="header__inner">
                    <div class="header__logo">VALO HOTEL</div>
                    <nav class="nav">
                        <a class="nav__link" href="#">Главная</a>
                        <a class="nav__link" href="#">Номера</a>
                        <a class="nav__link" href="#">Удобства</a>
                        <a class="nav__link" href="#">Контакты</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;