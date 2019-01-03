import { Fragment } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'next/router';

import Meta from './Meta';
import Nav from './Nav';
import Title from './Title';
import GitHubButton from './GitHubButton';

const Layout = props => (
  <Fragment>
    <Meta title={props.title} />

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
      <Title value={props.title} />

      {props.children}
    </div>
    <div className="container container--dev-info">
      <p>
        <b>Environment:</b> {process.env.NODE_ENV}
      </p>
      <p>
        <b>route</b>: {props.router.route}
      </p>
      <p>
        <b>pathname</b>: {props.router.pathname}
      </p>
      <p>
        <b>asPath</b>: {props.router.asPath}
      </p>
      <div>
        <b>query</b>:
        <pre>
          <code>{JSON.stringify(props.router.query, null, 4)}</code>
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

Layout.propTypes = {
  title: PropTypes.string.isRequired,
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

export default withRouter(Layout);
