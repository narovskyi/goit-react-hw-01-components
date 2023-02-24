import PropTypes from 'prop-types';
import { Avatar, Card, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
    return (
        <Card>
            <Status isOnline={isOnline} />
            <Avatar src={avatar} alt="User avatar"/>
            <Name>{name}</Name>
        </Card>    
    );
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}