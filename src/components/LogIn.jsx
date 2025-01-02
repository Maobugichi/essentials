import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0()

    return(
        !isAuthenticated && (
            <button className="h-[50px] w-[100px] bg-black border-1 text-white" onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
}

export default LogIn