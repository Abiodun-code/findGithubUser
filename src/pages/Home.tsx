import { useContext } from "react"
import Users from "../components/Users"
import Search from "../components/Search"
import { UsersContext } from "../hooks/useUsers"
import Loading from "../components/Loading"

const Home = () => {
  const {loading} = useContext(UsersContext)
  return (
    <>
    <Search/>
      {loading ? <Loading /> : <Users />}
    </>
  )
}

export default Home