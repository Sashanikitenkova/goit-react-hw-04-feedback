import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div className={s.buttonFeedback}>
        {options.map(options => (
            <button type='button' className={s.button} key={options} onClick={() => onLeaveFeedback(options)}>{options}</button>
        ))}
    </div>
)

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};