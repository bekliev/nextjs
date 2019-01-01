import Link from 'next/link';
import Layout from '../../components/Layout';

function getBlogPosts() {
  return [
    { id: '1-post', title: 'Getting started' },
    { id: '2-post', title: 'Navigate Between Pages' },
    { id: '3-post', title: 'Using Shared Components' },
    { id: '4-post', title: 'Create Dynamic Pages' },
    { id: '5-post', title: 'Clean URLs with Route Masking' },
    { id: '6-post', title: 'Server Side Support for Clean URLs' },
    { id: '7-post', title: 'Fetching Data for Pages' },
    { id: '8-post', title: 'Styling Components' },
    { id: '9-post', title: 'Deploying a Next.js App' }
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/blog/${post.id}`} href={`/blog/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>

    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default () => (
  <Layout title="Blog Next.js">
    <p>Links to posts about Next.js you can find below:</p>
    <ul>
      {getBlogPosts().map(post => (
        <PostLink key={'blogpost:' + post.id} post={post} />
      ))}
    </ul>

    <style jsx>{`
      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
);
