import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[]);

    const navigate = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault();
        axios.put(
            `https://66e18509c831c8811b555017.mockapi.io/crud-operation/${id}`,
            {
                name: name,
                email: email
            }
        ).then(() => {
            navigate("/read");
        })
    };

    return(
        <>
            <h1>Update Operation</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} onfocus="this.value=''" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} onfocus="input.value=''"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleEdit}>Update</button>
            </form>      
        </>
    )
};

export default Update;  