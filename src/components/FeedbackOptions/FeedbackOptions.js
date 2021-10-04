import React from 'react';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
    render() {
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
}

export default FeedbackOptions;

// function FeedbackOptions() {
//     return (
//         <div className={s.feedbackBtn}>
//             <button className={s.btn} type="button">
//                 Good
//             </button>
//             <button className={s.btn} type="button">
//                 Neutral
//             </button>
//             <button className={s.btn} type="button">
//                 Bad
//             </button>
//         </div>
//     );
// }
