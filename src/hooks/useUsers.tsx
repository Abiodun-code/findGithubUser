import { createContext, useEffect, useRef, useState } from "react"
import { childProps, usersProps } from "./types"

export const UsersContext = createContext({} as usersProps)

const UsersProvider = ({children}: childProps) => {
  const BaseURL = "  https://api.github.com/users"
  const [users, setUsers] = useState<any>([])
  const [loading, setLoading] = useState<boolean | any>(null)
  const userRef = useRef("")

  const FindUser = async()=>{
    setLoading(true)
    if(userRef.current.value !== ""){
      const res = await fetch(BaseURL+"/"+userRef.current.value)
      const data = await res.json()
      setUsers([data])
      userRef.current.value = ""
      console.log(data)
    }else{
      fetchAll()
    }
    setLoading(null)
  }

  const fetchAll = async()=>{
    if(userRef.current.value === ""){
      setLoading(true)
      const response = await fetch(BaseURL)
      const data = await response.json()
      setUsers(data)
      setLoading(null)
    }
  }

  useEffect(()=>{
    fetchAll()
  }, [setUsers])

  return (
    <UsersContext.Provider value={{ users, userRef, FindUser, loading}}>
      {children}
    </UsersContext.Provider>
  )
}

export default UsersProvider