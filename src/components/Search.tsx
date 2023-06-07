import { useContext } from "react"
import { BsSearch } from "react-icons/bs"
import { UsersContext } from "../hooks/useUsers"

const Search = ()=>{
  const { userRef, FindUser } = useContext(UsersContext)
  return(
    <div className="lg:w-[50%] md:w-[50%] w-full lg:px-0 md:px-0 px-4 mx-auto">
      <div className=" flex border border-blue-500 rounded mt-3">
        <input ref={userRef} type="text" placeholder="Search github username" className=" outline-none w-full p-2 " />
        <button onClick={FindUser} className="bg-blue-500 text-white px-4 py-2 text-xl"><BsSearch /></button>
      </div>
    </div>
  )
}

export default Search