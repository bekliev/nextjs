import { withRouter } from 'next/router';

export default withRouter(({ router }) => (
  <>
    <p>Some text about abc page</p>
    <p>Query is: {JSON.stringify(router.query, null, 1)}</p>
  </>
));
