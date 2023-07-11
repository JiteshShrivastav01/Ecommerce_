import { useContext } from "react"
import AuthContext from "../Context/AuthContext"
import Modal from "../UI/Modal"


const UserProfile=(props)=>{
    const ctx2=useContext(AuthContext)

    return(
        <Modal onClose={props.hideProfile}>
          <h1>{ctx2.email}</h1>
          <button onClick={props.hideProfile}>close</button>
        </Modal>
    )
}

export default UserProfile