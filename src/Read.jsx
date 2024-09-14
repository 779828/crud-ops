import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Read = () => {

    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);

    const back = useNavigate();

    function getData() {
        axios
        .get("https://66e18509c831c8811b555017.mockapi.io/crud-operation")
        .then((res) => {
            // console.log(res)
            setData(res.data)
        })
    };

    function handleDelete(id) {
        axios
        .delete(`https://66e18509c831c8811b555017.mockapi.io/crud-operation/${id}`)
        .then(() => {
            getData();
        })
    }

    useEffect(() => {
        getData();
    },[])

    function backBtn() {
        back("/");
    }

    function handleUpdate(id,name,email) {
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);

        back("/update")
    }

    // const getData = async () => {
    //     const data = await fetch("https://66e18509c831c8811b555017.mockapi.io/crud-operation");
    //     const json = await data.json();
    // };

    return (
        <>
            <h2>Read Operation with RestAPI</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"><button className='btn btn-warning' onClick={() => backBtn()}>Back</button></th>
                    </tr>
                </thead>
                {   
                    data.map((userData) => {
                        return (
                            <>
                            <tbody>
                                <tr key={userData.id}>
                                    <th scope="row">{userData.id}</th>
                                    <td>{userData.name}</td>
                                    <td>{userData.email}</td>
                                    <td><button className="btn btn-success" onClick={() => handleUpdate(userData.id,userData.name,userData.email)}>Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={() => handleDelete(userData.id)} >Delete</button></td>
                                </tr>
                            </tbody>
                            </>
                        )
                    })
                }
            </table>
        </>
    );
};

export default Read;