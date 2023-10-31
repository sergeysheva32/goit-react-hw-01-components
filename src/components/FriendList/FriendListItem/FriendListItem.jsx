import PropTypes from "prop-types";
import css from './FriendList.Item.module.css';
import defaultImg from './default.png';

function FriendListItem({ isOnline, name, avatar = defaultImg, }) {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.status__true : css.status__false}></span>
            <img src={avatar} alt="User Avatar" className={css.avatar} width="48"></img>
            <p className={css.name}>{name}</p>
            
        </li>
    )
}
FriendListItem.prototype = {
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}
export default FriendListItem;