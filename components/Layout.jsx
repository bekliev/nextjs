import { Fragment, memo } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'next/router';

import Meta from './Meta';
import Nav from './Nav';
import Title from './Title';
import GitHubButton from './GitHubButton';

import data from '../db/common-db';

const Layout = ({ router, children }) => {
  const matchedPages = data.pages.filter(({ url, exact }) =>
    exact ? router.route === url : router.route.indexOf(url) === 0
  );

  const title = (matchedPages[0] && matchedPages[0].title) || 'Unknown page';

  return (
    <Fragment>
      <Meta title={title} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '10px 10px -10px',
          padding: '10px 10px 0'
        }}
      >
        <GitHubButton />
        <GitHubButton type="follow" width="220" />
      </div>

      <div className="container">
        <Nav />
        <Title value={title} />

        {children}
      </div>
      <div className="container container--dev-info">
        <p>
          <b>Environment:</b> {process.env.NODE_ENV}
        </p>
        <p>
          <b>route</b>: {router.route}
        </p>
        <p>
          <b>pathname</b>: {router.pathname}
        </p>
        <p>
          <b>asPath</b>: {router.asPath}
        </p>
        <div>
          <b>query</b>:
          <pre>
            <code>{JSON.stringify(router.query, null, 4)}</code>
          </pre>
        </div>
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>

      <style jsx>{`
        .container {
          background-color: #f0f0f0;
          border-radius: 15px;
          margin: 20px;
          padding: 20px;
          box-shadow: inset 0 0 5px #ccc;
          font-family: cursive, BlinkMacSystemFont, -apple-system, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            'Roboto Rouble', sans-serif;
        }
        .container--dev-info {
          padding: 7px 20px;
          opacity: 0.8;
          font-size: 87.5%;
        }
      `}</style>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ]),
  router: PropTypes.shape({
    route: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    asPath: PropTypes.string.isRequired,
    query: PropTypes.object.isRequired
  })
};

export default memo(withRouter(Layout));
