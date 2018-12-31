import Layout from '../../components/Layout';
import BlogPostLink from './BlogPostLink';

export default () => (
  <Layout title="Blog!">
    <p>Posts of my blog you can find below:</p>
    <ul>
      <BlogPostLink id="1-post" title="Blog post 1" />
      <BlogPostLink id="2-post" title="Blog post 2" />
      <BlogPostLink id="3-post" title="Blog post 3" />
    </ul>
  </Layout>
);
