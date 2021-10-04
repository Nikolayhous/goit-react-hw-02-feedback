import s from './Title.module.css';
import PropTypes from 'prop-types';

function Title({ title }) {
    return <>{title && <h1 className={s.title}>{title}</h1>}</>;
}

export default Title;

Title.propTypes = {
    title: PropTypes.string.isRequired,
};
