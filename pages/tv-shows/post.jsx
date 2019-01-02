import Link from 'next/link';

import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout';

const Post = props => (
  <Layout title={props.show.name}>
    <Link href="/tv-shows">
      <button>&laquo; Back to list</button>
    </Link>

    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />

    <p>
      <b>Genres:</b>
    </p>
    <ul>
      {props.show.genres.map(genre => (
        <li key={props.show.id + genre}>{genre}</li>
      ))}
    </ul>

    <pre>
      <code>{JSON.stringify(props.show, null, 4)}</code>
    </pre>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  console.log(id);
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
