/* import './Header.css'
import Logo from '../../assets/logo.jpg'

const Header = () => {
  return (
    <header>
      <h1>Rick and morty </h1>
    </header>
  )
}
export default Header; */

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
