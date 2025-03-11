import React, {useEffect, useState} from "react";

const Profile = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const response = await fetch('api/profile', {
                headers:{
                    'Authorisation': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            const data = await response.json();
            setRequests(data);
        };

        fetchRequests();
    }, []);

    return(
        <div>
            <h2>Request History</h2>
            <ul>
                {requests.map((requests) => (
                    <li key={request.id}>{request.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;