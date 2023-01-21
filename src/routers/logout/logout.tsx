import { useNavigate } from 'react-router-dom'
import FetchAuth from '../../helpers/api/fetchAuth'


const authService = new FetchAuth()
const logOut = () => {
    const navigate = useNavigate()
    const handleLogOut = async () => {
        await authService.logOut()
        localStorage.setItem('hey-chat', JSON.stringify({ isAuthtenicate: false }))
        navigate("/login")
        return
    }
    handleLogOut()
}

export default logOut