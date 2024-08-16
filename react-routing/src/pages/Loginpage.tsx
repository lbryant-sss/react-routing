import { Link } from "react-router-dom";

function LoginPage(){
    return(
        <>
        <h1>This is my Login page.</h1>
        <h2>
            Go back <Link to='/'>Home</Link>
        </h2>
        </>
    )
}

export default LoginPage;