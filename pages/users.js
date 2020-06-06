import Link from 'next/link';
import axios from 'axios';

const User = ({ users }) => (
  <>
    <nav>
      <li>
        <Link href="/">Back</Link>
      </li>
    </nav>
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  </>
);

User.getInitialProps = async () => {
  const res = await axios.get(`https://api.github.com/orgs/rocketseat/members`);

  return { users: res.data };
};

export default User;
