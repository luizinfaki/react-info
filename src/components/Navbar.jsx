import logo from '../logo.svg';

export default function() {
  return (
    <nav>
        <img src={logo} className='nav--logo' alt='logo' />
        <h3 className='nav--logo_text'>react-info</h3>
        <h4 className='nav--title'>React Course - Project 1</h4>
    </nav>
  )
}