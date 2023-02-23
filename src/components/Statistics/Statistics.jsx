import PropTypes from 'prop-types';
import getDarkColor from 'utils/randomDarkColor';
import { StatisticsContainer, TitleContainer, Title, StatList, StatItem, Label, Percentage} from 'components/Statistics/Statistics.styled'

export const Statistics = ({ title, stats}) => {
    return (
        <StatisticsContainer>
            {title !== undefined && (
                <TitleContainer quantityOfStats={stats.length}>
                    <Title>{title}</Title>
                </TitleContainer>
            )}
            <StatList >
                {stats.map(({ id, label, percentage }) => (
                    <StatItem key={id} backgroundColor={getDarkColor} quantityOfStats={stats.length}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </StatItem>
                ))}
            </StatList>
        </StatisticsContainer>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
}
