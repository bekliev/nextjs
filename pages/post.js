import { withRouter } from 'next/router';
import Layout from '../components/Layout';

export default withRouter(props => (
  <Layout>
    <button onClick={() => window.history.back()}>&lt;&lt; Back</button>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
));
