import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
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
