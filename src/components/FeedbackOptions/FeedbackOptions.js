import React from 'react';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
    render() {
        return (
            <div className={s.feedbackBtn}>
                <button className={s.btn} type="button">
                    good
                </button>
                <button className={s.btn} type="button">
                    neutral
                </button>
                <button className={s.btn} type="button">
                    bad
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
