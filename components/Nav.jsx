import Link from 'next/link';

export default () => (
  <nav>
    <style>
      {`
        nav a {
          text-transform: uppercase;
        }
        nav a:not(:first-child) {
          margin-left: 10px;
        }
      `}
    </style>
    <Link prefetch href="/">
      <a>Home</a>
    </Link>
    <Link prefetch href="/about">
      <a>About</a>
    </Link>
    <Link prefetch href="/days">
      <a>Days</a>
    </Link>
    <Link prefetch href="/blog">
      <a>Blog</a>
    </Link>
    <Link prefetch href="/tv-shows">
      <a>TV Shows</a>
    </Link>
  </nav>
);
