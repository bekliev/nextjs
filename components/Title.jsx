import PropsType from 'prop-types';

const Title = props => <h1>{props.value}</h1>;

Title.propTypes = {
  value: PropsType.string.isRequired
};

export default Title;
