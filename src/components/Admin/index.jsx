import React from 'react';
import axios from 'axios';
import './index.css';

export default (props) => {

    const [visitors, setVisitors] = React.useState(Array);

    React.useEffect(() => {
        axios.get('http://192.168.1.125:5000/api/fetchVisitor')
        .then(res => {
            setVisitors(res.data.visitors)
        });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://192.168.1.125:5000/api/deleteVisitors/${id}`)
        .then(res => {
            if (res.data.id) {
                const arr = visitors.filter(element => element._id !== res.data.id);
                setVisitors(arr);
            } else {
                setVisitors([]);
            };
        });
    };

    return (
        <div style = {{display: 'flex', justifyContent: 'center'}}>
            <div>
                <h1 style = {{textAlign: 'center', marginTop: 20}}>My Visitors</h1>
                <button style = {{left: '100%', marginBottom: '20px'}} className = 'delete' onClick = {() => handleDelete()}>Delete All</button>
                <table id = 'customers'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>IP Address</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visitors.map((element, index) => {
                            return (
                                <tr key = {index}>
                                    <td>{index + 1}</td>
                                    <td>{element.ip}</td>
                                    <td>{element.country}</td>
                                    <td>{element.state}</td>
                                    <td>{element.city}</td>
                                    <td>{element.name}</td>
                                    <td>{element.visited_on}</td>
                                    <td>                                        
                                        <button className = 'delete' style = {{left: '0px'}} onClick = {() => handleDelete(element._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}