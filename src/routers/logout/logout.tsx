import { useNavigate } from 'react-router-dom'

import FetchAuth from '../../utils/fetchAuth'


type Props = {}

const authService = new FetchAuth()
const logOut = (props: Props) => {
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