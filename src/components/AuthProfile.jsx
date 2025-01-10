import { useAuth0 } from "@auth0/auth0-react";
import LogIn from "./Login";
import LogOut from "./LogOut";
const AuthProfile = () => {
    const {user, isAuthenticated} = useAuth0()
    return(
        <>
         <div className="grid place-content-center h-[100vh]">
           { isAuthenticated ? <LogOut/> : <LogIn/>}
            {isAuthenticated ? <article>
            {user?.picture && <img src={user.picture} alt={user?.name}/>}
            <h2>{user?.name && user.name}</h2>
            <ul>
                {Object.keys(user).map((objKey,i) => <li key={i}> {objKey}: {user[objKey]}</li>)}
            </ul>
            </article> : null }
         </div>
         
        </>
       
        
    )
}

export default AuthProfile