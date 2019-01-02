import { withRouter } from 'next/router';
import Head from 'next/head';

import Nav from './Nav';
import Title from './Title';

export default withRouter(props => (
  <>
    <Head>
      <title>{props.title}</title>
    </Head>

    <div className="container">
      <Nav />
      <Title value={props.title} />

      {props.children}
    </div>
    <div
      className="container"
      style={{
        padding: '7px 20px',
        opacity: 0.8,
        fontSize: '75%'
      }}
    >
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
      }
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
    `}</style>
  </>
));
