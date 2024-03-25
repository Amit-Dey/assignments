import PropTypes from 'prop-types';
import './Todo.css';

const removeTodo = (e) => {
    e.target.parentElement.remove();
}

const Todo = (props) => {
    Todo.propTypes = {
        key: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };
    return (
        <div className='todo'  id='{props.key}'  >
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button onClick={removeTodo} >Delete</button>
        </div>
    )
}

export default Todo