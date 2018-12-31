import Link from 'next/link';

export default props => (
  <li>
    <Link as={`/blog/${props.id}`} href={`/blog/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
