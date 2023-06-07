import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"
import { SlUserFollow, SlUserFollowing } from "react-icons/sl"
import { RiGitRepositoryLine } from "react-icons/ri"

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
              <div className="w-full block lg:flex md:flex gap-x-11 items-center">
                <img src={content.avatar_url} className="rounded-full max-w-full lg:max-w-[35%] md:w-[40%]" />
                <div className="px-2 w-full text-black dark:text-white">
                  <p className="text-3xl font-bold text-center">{content.name}</p>
                  <p className="text-xl font-medium text-center pt-2">@{content.login}</p>
                  <p className="text-xl font-medium text-center pt-2">{content.bio}</p>
                  <div className="flex justify-between max-w-[50%] lg:max-w-[30%] md:max-w-[40%] mx-auto dark:text-white p-1 my-2">
                    <span className="flex items-center">
                      <SlUserFollow className="text-sm" />
                      <p className="text-sm font-bold pl-1">{content.following ? content.following : 0}</p>
                    </span>
                    <span className="flex items-center">
                      <SlUserFollowing className="text-sm" />
                      <p className="text-sm font-bold pl-1">{content.followers ? content.followers : 0}</p>
                    </span>
                    <span className="flex items-center">
                      <RiGitRepositoryLine className="text-sm" />
                      <p className="text-sm font-bold pl-1">{content.public_repos ? content.public_repos : 0}</p>
                    </span>
                  </div>
                  <div className="bg-blue-600 p-4 max-w-[80%] lg:max-w-[50%] md:max-w-[0%] my-3 text-center rounded-full mx-auto">
                    <Link to={`${content.html_url}`} className=" text-lg">View Profile on Github</Link>
                  </div>
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