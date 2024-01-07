import React from 'react'

export default function UserDetail({urldata}) {
    
  return (
    urldata&&

    
    <div className="flex justify-center items-center mt-20 ">
    
        <div className="rounded-xl flex flex-col sm:flex-row border-solid shadow-2xl shadow-white">
        
            <div className='w-full sm:w-2/5'>
            
                <img className='w-full rounded-xl bg-white' src={urldata.data.avatar_url} alt="User Avatar" />
                
            </div>
            
            <div className='bg-white font-bold px-3 w-full sm:w-3/5 flex flex-col justify-around rounded-xl'>

                <div>Username: <span>{urldata.data.login}</span></div>
                <div>Name: <span>{urldata.data.name}</span></div>
                <div>No. of public repos: <span>{urldata.data.public_repos}</span></div>
                <div>No. of public gists: <span>{urldata.data.public_gists}</span></div>
                <div>created_at: <span>{urldata.data.created_at.split("T")[0]}</span></div>
            </div>
        </div>
    </div>

  )
}