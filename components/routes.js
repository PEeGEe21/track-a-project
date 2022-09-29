import { useContext } from "react";
import AppContext from './AppContext';

export const contextValues =()=>{
    const {item, user, addUser} = useContext(AppContext);
    // console.log(user, "user in sidebar")
                // const res = await axios.get(`${host}/user/${user._id}/usersProjects`)

}

export const host = "http://localhost:5000/api";
export const projectRoute = `http://localhost:5000/api/user/${contextValues}/usersProjects`;

