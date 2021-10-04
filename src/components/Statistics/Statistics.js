import React from 'react';
import s from './Statistics.module.css';

class Statistics extends React.Component {
    render() {
        return (
            <div className={s.statistics}>
                <h2 className={s.title}>Statistics</h2>
                <ul>
                    <li className={s.item}></li>
                    <li className={s.item}></li>
                    <li className={s.item}></li>
                    <li className={s.item}></li>
                    <li className={s.item}></li>
                </ul>
                <p className={s.text}>Good:</p>
                <p className={s.text}>Neutral:</p>
                <p className={s.text}>Bad:</p>
                <p className={s.text}>Total:</p>
                <p className={s.text}>Positive feedback:</p>
            </div>
        );
    }
}

export default Statistics;
