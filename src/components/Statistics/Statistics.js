import React from 'react';
import s from './Statistics.module.css';

class Statistics extends React.Component {
    render() {
        return (
            <div className={s.statistics}>
                <h2 className={s.title}>Statistics</h2>
                <ul>
                    <li className={s.item}>Good:</li>
                    <li className={s.item}>Neutral:</li>
                    <li className={s.item}>Bad:</li>
                    <li className={s.item}>Total:</li>
                    <li className={s.item}>Positive feedback:</li>
                </ul>
                {/* <p className={s.text}>Good:</p>
                <p className={s.text}>Neutral:</p>
                <p className={s.text}>Bad:</p>
                <p className={s.text}>Total:</p>
                <p className={s.text}>Positive feedback:</p> */}
            </div>
        );
    }
}

export default Statistics;
