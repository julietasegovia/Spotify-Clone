import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image, name, desc, id}) => {

    const {playWithId} = useContext(PlayerContext)

    return (
        <div onClick={()=>playWithId(id)} className='min-w-[280px] p-3 px-4 rounded cursor-pointer hover:bg-[#ffffff26]'>
            <img className='rounded w-full aspect-square object-cover' src={image} />
            <p className='font-bold mt-3 mb-1 text-lg'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>            
        </div>
    )
}

export default SongItem