import PropTypes from 'prop-types';
import Link from 'next/link';

const PostLink = ({ id, name, category, slugValue, slugKey }) => (
  <li>
    <Link
      prefetch
      as={`/${category}/${id}`}
      href={`/${category}/post?${slugKey}=${slugValue}`}
    >
      <a>{name}</a>
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

PostLink.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ]),
  name: PropTypes.string.isRequired,

  category: PropTypes.string.isRequired,
  slugKey: PropTypes.string.isRequired,
  slugValue: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired
  ])
};

export default PostLink;
