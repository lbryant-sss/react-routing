import { Link } from "react-router-dom";


function About(){
    return(
        <>
            <h1>This is my about page</h1>
            <h2>
                Go back <Link to='/' >Home</Link>
            </h2>
            <h2>
                Go to <Link to='/login' >Login page</Link> instead
            </h2>
        </>
    )
}

export default About;