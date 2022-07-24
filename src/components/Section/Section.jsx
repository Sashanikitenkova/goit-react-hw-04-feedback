import PropTypes from 'prop-types';
// import s from './Section.module.css';

const Section = ({title, children}) => (
    <div>
        <h1>{title}</h1>
        {children}    
    </div>
)

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired,
};