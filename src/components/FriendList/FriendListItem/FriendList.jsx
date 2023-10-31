import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';


export default function FriendList({ friends } ) {
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    name={name}
                    avatar={avatar}
                />
            ))}
        </ul>
      
    );
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            isOnline: PropTypes.bool,
            avatar: PropTypes.string,
            name: PropTypes.string,
        })
    ).isRequired,
};