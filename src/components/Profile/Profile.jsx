import PropTypes from 'prop-types';
import { Card, Description, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from 'components/Profile/Profile.styled'

export const Profile = ({ user: { username, tag, location, avatar, stats: { followers, views, likes } }}) => {
    return (
        <Card>
            <Description>
                <Avatar
                src={avatar}
                alt="User avatar"
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsItem>
            </Stats>
        </Card>
    );
};

Profile.propTypes = {
    user: PropTypes.exact({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.exact({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired
        })
    }).isRequired
}