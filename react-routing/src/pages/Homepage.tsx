
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <h1>This is my Home page.</h1>
        <h2>
            Click Here to go to:
            <ul>
                <li>
                    <Link to='/' >Homepage</Link>
                </li>
                <li>
                    <Link to="/login">Login Page</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </h2>
        </>
    )
}

export default Home;