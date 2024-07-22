import axios from "axios";
import { useEffect, useState } from "react";
import './Home.css'; 

function Home() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const fetchData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log("apidata", response);
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = (id) => {
        console.log("id", id);
        setData(data.filter(item => item.id !== id));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = data.slice(startIndex, endIndex);

    return (
        <div>
            <div className="grid-container">
                {currentItems.map((item) => (
                    <div key={item.id} className="grid-item">
                        {item.body}
                        <button onClick={() => handleDelete(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={handleNextPage} disabled={endIndex >= data.length}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Home;
