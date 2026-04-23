import React, { useRef, useState, useEffect } from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
    const albumRef = useRef(null)
    const songRef = useRef(null)
    const focusedRef = useRef(null)

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
            if (!focusedRef.current) return

            e.preventDefault()
            const delta = e.key === 'ArrowRight' ? 300 : -300
            focusedRef.current.scrollBy({ left: delta, behavior: 'smooth' })
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    return (
        <>
            <Navbar />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div
                    ref={albumRef}
                    className='flex overflow-auto'
                    onMouseEnter={() => focusedRef.current = albumRef.current}
                    onMouseLeave={() => focusedRef.current = null}
                >
                    {albumsData.map((item, index) => (
                        <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                    ))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Juli's Favorites</h1>
                <div
                    ref={songRef}
                    className='flex overflow-auto'
                    onMouseEnter={() => focusedRef.current = songRef.current}
                    onMouseLeave={() => focusedRef.current = null}
                >
                    {songsData.map((item, index) => (
                        <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome