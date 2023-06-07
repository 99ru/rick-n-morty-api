import './Header.css'
import Logo from '../../assets/ricknmorty.png'

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="Rick and Morty" className="header-logo" />
    </header>
  )
}

export default Header;
