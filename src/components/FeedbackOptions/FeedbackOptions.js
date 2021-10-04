import s from './FeedbackOptions.module.css';

function FeedbackOptions() {
    return (
        <div className={s.feedbackBtn}>
            <button className={s.btn} type="button">
                Good
            </button>
            <button className={s.btn} type="button">
                Neutral
            </button>
            <button className={s.btn} type="button">
                Bad
            </button>
        </div>
    );
}

export default FeedbackOptions;
