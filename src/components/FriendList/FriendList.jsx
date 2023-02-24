import PropTypes from 'prop-types';
import { Container } from 'components/FriendList/FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';


export const FriendList = ({ friends }) => {
    return (
        <Container>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                )
            )}
        </Container>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}