import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function HomePage(){
    const {auth}  = useAuth();
    console.log("Auth", auth);
    return (
      <div>
        <p>HomePage</p>
        <Link to='/me'>Profile</Link>
      </div>
    );
}