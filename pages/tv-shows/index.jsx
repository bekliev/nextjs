import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import PostLink from '../../components/PostLink';

const TVShowsPage = ({ data }) => (
  <Layout title="Batman TV Shows">
    <p>{`Data fetched count: ${data.length}`}</p>
    <ul>
      {data.map(({ show }) => (
        <PostLink
          key={'tv-show:' + show.id}
          category="tv-shows"
          slugKey="id"
          slugValue={show.id}
          {...show}
        />
      ))}
    </ul>
  </Layout>
);

TVShowsPage.propTypes = {
  data: PropTypes.array.isRequired
};

TVShowsPage.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`);

  return { data };
};

export default TVShowsPage;
