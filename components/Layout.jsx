import { withRouter } from 'next/router';

import Nav from './Nav';
import Title from './Title';

const defaultStyles = {
  borderRadius: 15,
  margin: 20,
  padding: 20,
  boxShadow: 'inset 0 0 5px #ccc',
  fontFamily:
    'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Roboto Rouble", sans-serif'
};

export default withRouter(props => (
  <div>
    <div style={defaultStyles}>
      <Nav />
      <Title value={props.title} />

      {props.children}
    </div>
    <div
      style={{
        ...defaultStyles,
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
  </div>
));
