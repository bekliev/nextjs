import PostLink from '../../components/PostLink';

import data from '../../db/blog-posts-db';

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
