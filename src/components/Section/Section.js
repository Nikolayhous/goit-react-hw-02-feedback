import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ title, children }) {
    return (
        <section className={s.statistics}>
            {title && <h1 className={s.title}>{title}</h1>}
            {children}
        </section>
    );
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
};
