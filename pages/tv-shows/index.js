import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import Layout from '../../components/Layout';

const Page = props => (
  <Layout title="Batman TV Shows">
    <p>{`Data fetched count: ${props.shows.length}`}</p>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link
            as={`/tv-shows/${show.id}`}
            href={`/tv-shows/post?id=${show.id}`}
          >
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Page.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data
  };
};

export default Page;
