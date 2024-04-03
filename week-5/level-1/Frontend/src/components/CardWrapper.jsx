import PropTypes from 'prop-types';
import './CardWrapper.css';
// Card Wrapper


const CardWrapper = ({children}) => {
    return (
        <div className="card-wrapper">
            {children}
        </div>
    )
}

CardWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default CardWrapper