import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useState()
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem("Users")
      toast.success("Logout Successfully")
      window.location.reload()
    } catch (error) {
      toast.error("Error:" + error.message)
    }
  }
  return (
    <div>
      <button className="login-btn h-8 border bg-pink-600 hover:bg-pink-400 text-white font-bold  px-2 rounded"
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
