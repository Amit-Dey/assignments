
import  { useState } from 'react';
import './CreateCard.css';

// example of a card object
// {
//     name: "John Doe",
//     description: "Software Engineer",
//     linkedIn: "https://www.linkedin.com/in/johndoe",
//     twitter: "https://twitter.com/johndoe",
//     interests: ["Programming", "Reading"]
// }

const CreateCard = () => {

    // create a card object
    const [card, setCard] = useState({
        name: "",
        description: "",
        linkedIn: "",
        twitter: "",
        interests: []
    });


    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // validation 
        if (card.name === "" || card.description === "" || card.interests.length === 0 || card.linkedIn === "" || card.twitter === "") {
            alert("Please fill all the fields");
            return;
        }

        // send the card to the server
        fetch('http://localhost:3000/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Barer '+ localStorage.getItem('token') || ''
            },
            body: JSON.stringify(card)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Card Created Successfully");
                setCard({
                    name: "",
                    description: "",
                    linkedIn: "",
                    twitter: "",
                    interests: []
                });
            })
            .catch(err => {
                console.error(err);
                alert("Error Creating Card");
            });

        
    }


    return (
        <div className="createCard">
            <h1>Create Card</h1>
            <form>
                <input type="text" placeholder="Name" value={card.name} onChange={(e) => setCard({ ...card, name: e.target.value })} />
                <input type="text" placeholder="Description" value={card.description} onChange={(e) => setCard({ ...card, description: e.target.value })} />
                <input type="text" placeholder="LinkedIn" value={card.linkedIn} onChange={(e) => setCard({ ...card, linkedIn: e.target.value })} />
                <input type="text" placeholder="Twitter" value={card.twitter} onChange={(e) => setCard({ ...card, twitter: e.target.value })} />
                <input type="text" placeholder="Interests" value={card.interests} onChange={(e) => setCard({ ...card, interests: e.target.value.split(",") })} />
                <button onClick={handleSubmit}>Create Card</button>
            </form>
        </div>
    );
}

export default CreateCard;