import { io } from "socket.io-client"
// import 


// const token = localStorage.getItem("token")

const socket = io(
    import.meta.env.VITE_URL, {
    autoConnect: false,
    // auth: {
    //     token
    // },
}
)

export default socket