import {useEffect, useState} from 'react';

function Test() {
    const [people, setPeople] = useState([]);
    const [nameInput, setNameInput] = useState('');

    useEffect(() => {
        fetchPeople();
    }, []);

    const fetchPeople = async () => {
        const response = await fetch('http://localhost:8080/person');
        const data = await response.json();
        setPeople(data);
    };

    const handleSubmitName = (e) => {
        e.preventDefault();
        const submitName = async () => {
            const response = await fetch('http://localhost:8080/person', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: people.length + 1,
                    name: nameInput
                })
            });
            const message = await response.text();
            console.log(message);
        }
        submitName().then(fetchPeople);
        setNameInput('');
    }

    return (
        <div className="App">
            <h1>Name Database</h1>
            <h2>Submit a name:</h2>
            <form onSubmit={handleSubmitName} className="submission">
                <label>
                    <input
                        type="text"
                        value={nameInput}
                        placeholder="add a name..."
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <h2>Names:</h2>
            {people.length > 0 ? (
                people.map((person) => (
                    <ul key={person.id}>
                        <li>{person.name}</li>
                    </ul>
                ))
            ) : (
                <p>No names found.</p>
            )}
        </div>
    );
}

export default Test;