import PropTypes from "prop-types";
import css from './Statistics.module.css';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ stats, title}) {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css.stat_list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li key={id} className={css.item} style={{ backgroundColor: randomHexColor() }}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    )
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};