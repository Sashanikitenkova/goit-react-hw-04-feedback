import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistic = ({good, neutral, bad, total, positivePercentage}) => (
    <div>
        <ul className={s.statistics}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    </div>
)

export default Statistic;

Statistic.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};