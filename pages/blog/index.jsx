import PostLink from '../../components/PostLink';

function getBlogPosts() {
  return [
    { id: '1-post', name: 'Getting started' },
    { id: '2-post', name: 'Navigate Between Pages' },
    { id: '3-post', name: 'Using Shared Components' },
    { id: '4-post', name: 'Create Dynamic Pages' },
    { id: '5-post', name: 'Clean URLs with Route Masking' },
    { id: '6-post', name: 'Server Side Support for Clean URLs' },
    { id: '7-post', name: 'Fetching Data for Pages' },
    { id: '8-post', name: 'Styling Components' },
    { id: '9-post', name: 'Deploying a Next.js App' }
  ];
}

const BlogPage = () => (
  <>
    <p>Links to posts about Next.js you can find below:</p>
    <ul>
      {data.map(post => (
        <PostLink
          key={'blogpost:' + post.id}
          category="blog"
          slugKey="title"
          slugValue={post.name}
          {...post}
        />
      ))}
    </ul>

    <style jsx>{`
      ul {
        padding: 0;
      }
    `}</style>
  </>
);

export default BlogPage;
