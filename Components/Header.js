import Logo from './Logo'

export default function Header() {
  return (
    <header>
      <nav className='nav'>
        <Logo />
        <ul className="nav-items">
          <li><a>Pricing</a></li>
          <li><a href="#">About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}