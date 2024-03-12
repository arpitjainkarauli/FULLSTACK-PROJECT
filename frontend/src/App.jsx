import { useEffect, useState } from 'react'
import axios from "axios"
function App() {
  const [user, setuser] = useState([])
  useEffect(()=>{
    axios.get("/api/user")
    .then((responce)=>{
      setuser(responce.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
    <div className='px-24'>
      <table className="table bg-white text-gray-900 font-bold">
        <thead className='text-black'>
          <tr className='bg-orange-400 '>
            <th className='bg-slate-300 opacity-80 w-36'>Profile</th>
            <th className='bg-white w-[350px]'>Id</th>
            <th className= 'bg-slate-300 bg-opacity-65'>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>

      {
         user.map((userdata)=>{
            return(
                <>
                    <tr> 
                      <td>
                          <img src={userdata.src} alt="" className="mask mask-circle w-14 h-14"/>
                        </td>
                      <td className="font-bold">{userdata.id}</td>
                      <td>{userdata.name}</td>
                      <td>{userdata.stream}</td>
                </tr>
             </>
            )
         })
       }
     </tbody>
     </table>
     </div>
    </>
  )}

export default App




{/* <div className='px-44'>
<h1 className='text-slate-50 text-center'>frontend with backend</h1>

<div className="overflow-x-auto">
<table className="table"> */}
{/* head */}
{/* <thead>
<tr className='text-orange-500'>
<th>userid</th>
<th>username</th>
<th>stream</th>
<th>profile</th>

</tr>
</thead>
<tbody>

{
user.map((userdata)=>{
return(
<>
<tr className='bg-white text-slate-950'>
<td>{userdata.id}</td>
<td>{userdata.name}</td>
<td>{userdata.stream}</td>
<td className='w-24'><img src="https://i.postimg.cc/8zXJRLL9/piran-8275931-1280.jpg"  alt="" /></td>
</tr>
</>
)
})
}
</tbody>
</table>
</div>
</div> */}