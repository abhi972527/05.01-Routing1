import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext";

export const UserDetails = () => {
    const { userid } = useParams();
    const [user, setUser] = useState({});
    const { token } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${userid}`)
            .then(d => d.json())
            .then(d => {
                setUser(d.data);
            })
    }, [userid]);

    if (!token) {
        return <Navigate to={"/login"} />
    }
    
    return (
        <div>
            {/* Fetch data of user: {userid} */}
            <img src={user.avatar} alt="test" />
            <div>
                {user.first_name}
                {user.last_name}
            </div>
            <div>
                Contact: {user.email}
            </div>
        </div>
    )
}