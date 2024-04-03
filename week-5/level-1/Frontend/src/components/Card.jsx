
// card 
// example of a card object
// {
//     name: "John Doe",
//     description: "Software Engineer",
//     linkedIn: "https://www.linkedin.com/in/johndoe",
//     twitter: "https://twitter.com/johndoe",
//     interests: ["Programming", "Reading"]
// }

import PropTypes from 'prop-types';

import './Card.css';

// Card Component
const Card = ({ card }) => {
    return (
        <div className="card">
            <h2>{card.name}</h2>
            <p>{card.description}</p>
            <a href={card.linkedIn}>LinkedIn</a>
            <a href={card.twitter}>Twitter</a>
            <div>
                {card.interests.map((interest, index) => (
                    <span key={index}>{interest}</span>
                ))}
            </div>
        </div>
    )
}

Card.propTypes = {
    card: PropTypes.object.isRequired
};

export default Card;


