import Link from 'next/link';

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/users">
          <a>Users from Github repo</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
