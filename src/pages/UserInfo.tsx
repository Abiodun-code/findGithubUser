import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"

const UserInfo = () => {
  const BaseURL = "  https://api.github.com/users"
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [info, setInfo] = useState<any>([])

  const getUserInfo = async () => {
    const res = await fetch(BaseURL + pathname);
    const data = await res.json();
    setInfo(()=>[data]);
  }
  console.log(info)

  useEffect(() => {
    getUserInfo()
  }, [pathname]);

  return (
    <div className="w-full h-full">
      <div className="lg:w-[90%] md:w-[90%] w-full lg:px-0 md:px-0 px-4 mx-auto">
        <button onClick={() => navigate("/")} className="py-5 pl-2 text-3xl dark:text-white text-black">
          <BsArrowLeft />
        </button>
        <div className="lg:flex md:flex block lg:flex-wrap md:flex-wrap justify-between my-5">
          {info.map((content: any, index: number) => (
            <div key={index}>
              <div className="w-full">
                <img src={content.avatar_url} className="rounded-full max-w-full lg:w-[90%] md:w-[70%]" />
                <div>
                  <p>{content.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserInfo