import React, { useContext } from "react"
import { UsersContext } from "../hooks/useUsers"
import { Link } from "react-router-dom"
import { SlUserFollow, SlUserFollowing } from "react-icons/sl"
import { RiGitRepositoryLine } from "react-icons/ri"

const Users = ()=>{
  const {users} = useContext(UsersContext)
  return(
    <div className="w-full h-auto">
      <div className="lg:max-w-[90%] md:max-w-[90%] max-w-full lg:px-0 md:px-0 px-4 mx-auto">
        <div className="lg:flex md:flex block lg:flex-wrap md:flex-wrap justify-between my-5">
          {users.map((user: any, index: number)=>(
            <div key={index} className="flex rounded border mb-2 max-w-full lg:max-w-[30%] md:max-w-[48%]">
              <Link to={`/${user.login}`} className="w-[30%] flex justify-start">
                <img className="rounded bg-center bg-cover" src={user.avatar_url}/>
              </Link>
              <div className="pl-3 max-w-full">
                <Link className="text-2xl dark:text-white font-bold pt-2" to={`/${user.login}`}>{user.login}</Link>
                <p className="dark:text-white">{user.name? user.name : "Name Can't be Blank"}</p>
                <div className="flex justify-between dark:text-white p-1 my-2">
                  <span className="flex items-center">
                    <SlUserFollow className="text-sm" />
                    <p className="text-sm font-bold pl-1">{user.following ? user.following : 0}</p>
                  </span>
                  <span className="flex items-center">
                    <SlUserFollowing className="text-sm" />
                    <p className="text-sm font-bold pl-1">{user.followers ? user.followers : 0}</p>
                  </span>
                  <span className="flex items-center">
                    <RiGitRepositoryLine className="text-sm" />
                    <p className="text-sm font-bold pl-1">{user.public_repos ? user.public_repos : 0}</p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Users