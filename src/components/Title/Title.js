import s from './Title.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
    return (
        <>
            {title && (
                <h1 className={s.title}>
                    {title}
                    {children}
                </h1>
            )}
        </>
    );
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
};
