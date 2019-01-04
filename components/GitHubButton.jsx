import PropTypes from 'prop-types';

const GitHubButton = ({ user, repo, type, count, size, width }) => {
  return (
    <iframe
      src={[
        `https://ghbtns.com/github-btn.html`,
        `?user=${user}`,
        `&repo=${repo}`,
        `&type=${type}`,
        `&count=${count}`,
        `&size=${size}`,
        `&v=2`
      ].join('')}
      frameBorder="0"
      scrolling="0"
      width={width}
      height="30"
    />
  );
};
GitHubButton.propTypes = {
  user: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  count: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};
GitHubButton.defaultProps = {
  user: 'Bekliev',
  repo: 'nextjs',
  type: 'star',
  count: false,
  size: 'large',
  width: '90'
};

export default GitHubButton;
