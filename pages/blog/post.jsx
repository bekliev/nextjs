import { withRouter } from 'next/router';
import Link from 'next/link';

import Markdown from 'react-markdown';

import Layout from '../../components/Layout';

export default withRouter(props => (
  <Layout title={props.router.query.title}>
    <button onClick={() => window.history.back()}>&laquo; Back to list</button>

    <div className="markdown">
      <Markdown
        source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
        `}
      />
    </div>

    <style jsx global>{`
      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
));
