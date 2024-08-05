import { useEffect, useState } from 'react';
import './App.css';
import Cards from './componets/Cards'; // Corrected import path

function App() {
    const [data, setData] = useState([]); // Initialize as empty array
    const [error, setError] = useState(null); // For error state

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts') // Replace with your API endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                setError(error); // Set error if fetch fails
            });
    }, []);

    return (
        <div className='container mt-5'>
            <div className='row'>
              <h2 className='mb-3'>My Work Reports</h2>
                {data.map((item) => (
                    <Cards
                        key={item.id}
                        title={item.title}
                        description={item.body}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
