import './Home.css'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import CardWrapper from '../components/CardWrapper'


const Home = () => {
    // get all cards from the server

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/cards')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCards(data)
            })
    }, [])


    return (
        <div className='home'>
            <h1>All Cards</h1>

            <CardWrapper>
                {cards.map(card => (
                    <Card key={card._id} card={card} />
                ))}
            </CardWrapper>
        </div>
    )
}

export default Home