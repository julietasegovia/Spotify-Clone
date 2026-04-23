import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({image, name, desc, id}) => {

    const navigate = useNavigate()

    return (
        <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[280px] p-3 px-4 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded w-full aspect-square object-cover' src={image} />
            <p className='font-bold mt-3 mb-1 text-lg'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>            
        </div>
    )
}

export default AlbumItem