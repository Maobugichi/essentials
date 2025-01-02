import { useAuth0 } from "@auth0/auth0-react";

const LogOut = () => {
    const {logout, isAuthenticated} = useAuth0()

    return(
        isAuthenticated && (
            <button className="h-[50px] w-[100px] bg-black border-1 text-white" onClick={() => logout()}>
                Sign Out
            </button>
        )
    )
}

export default LogOut