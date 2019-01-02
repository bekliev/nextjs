import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout';

const TVShowsPostPage = ({ show }) => {
  const [codeVisibility, setCodeVisibility] = useState(false);

  return (
    <Layout title={show.name}>
      <Link href="/tv-shows">
        <button>&laquo; Back to list</button>
      </Link>

      <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={show.image.medium} />

      <p>
        <b>Genres:</b>
      </p>
      <ul>
        {show.genres.map(genre => (
          <li key={show.id + genre}>{genre}</li>
        ))}
      </ul>

      <button onClick={() => setCodeVisibility(!codeVisibility)}>
        Toggle repsonse &darr;
      </button>
      <pre style={{ display: codeVisibility ? 'block' : 'none' }}>
        <code>{JSON.stringify(show, null, 4)}</code>

        <style jsx>{`
          pre {
            background-color: #333;
            border-radius: 10px;
            color: #eee;
            padding: 10px;
          }
        `}</style>
      </pre>
    </Layout>
  );
};

TVShowsPostPage.propTypes = {
  show: PropTypes.object.isRequired
};

TVShowsPostPage.getInitialProps = async function(context) {
  const { id } = context.query;
  // console.log(id);

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  // console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default TVShowsPostPage;
