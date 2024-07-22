import axios from "axios";
import { useEffect, useState } from "react"
function Home() {
    const [data, setData] = useState([]);

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
  
    return (
        <div>
            <table>
                <tbody>
                    {data?.map((item) => (
                        <tr key={item.id}>
                            <td className="input1">
                            {item.body}<br/>
                                <button onClick={() => handleDelete(item.id)}>remove </button><br/>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
