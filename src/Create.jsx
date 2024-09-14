import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const Create = () => {

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);

    const history = useNavigate();

    const header = {"Access-Control-Allow-Origin": "*"};

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(
            "https://66e18509c831c8811b555017.mockapi.io/crud-operation",{
            name : name, 
            email : email,
            header
        })
        .then(() => {    
            history("/read");
        })
    };

    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success me-2" type="submit">Search</button>
                    <button
                        className="btn btn-outline-dark"
                        type="button"
                        aria-label="Toggle theme"
                        onClick={() => setLightTheme(!lightmode)}
                    >
                        Theme
                    </button>
                    </form>
                </div>
            </nav>
            <h2 className="flex centre">Create Operation</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" required className="form-control"
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" required className="form-control" aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
};

export default Create;