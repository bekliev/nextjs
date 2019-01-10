import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';

import PostLink from '../../components/PostLink';

const TVShowsPage = ({ data }) => (
  <>
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
  </>
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
