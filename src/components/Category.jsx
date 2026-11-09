'use client'

import { useState } from "react";

const Section = ({ animated, button, setAnimated, setButton }) => {
    return (
        <div style={{
            display: 'flex',            // Diubah menjadi flex agar bisa menggunakan column
            flexDirection: 'column',    // Menyusun tombol ke bawah (vertikal)
            gap: '10px',                // Memberikan jarak antar tombol agar tidak menempel
            position: 'fixed',          // Menggunakan 'fixed' agar benar-benar mengambang (ikut bergerak saat di-scroll)
            top: '300px',
            right: '20px',              // Menaruh posisi mengambangnya di sisi kanan layar (bisa diganti 'left')
            zIndex: 9999,               // Memastikan tombol selalu berada di lapisan paling atas
            // border: '1px solid red',
            padding: '10px',
            // backgroundColor: '#ffffff'           // Memberikan ruang di dalam border
        }}>
            <button
                className={`${button === 'copy_writing' ? '' : animated}`}
                onClick={() => {
                    setButton('web_developer')
                    setAnimated('animate__animated animate__bounceIn')
                }}
                style={{
                    backgroundColor: `${button === 'web_developer' ? '#dff7ff' : 'lightgrey'}`,
                    padding: '8px 16px',
                    cursor: 'pointer',
                    border: `2px solid ${button == 'web_developer' ? '#4361ee' : 'grey'}`,
                    color: `${button == 'web_developer' ? '#4361ee' : 'grey'}`,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}>
                Web developer
            </button>
            <button
                className={`${button === 'web_developer' ? '' : animated}`}
                onClick={() => {
                    setButton('copy_writing')
                    setAnimated('animate__animated animate__bounceIn')
                }}
                style={{
                    backgroundColor: `${button === 'copy_writing' ? '#dff7ff' : 'lightgrey'}`,
                    padding: '8px 16px',
                    cursor: 'pointer',
                    border: `2px solid ${button == 'copy_writing' ? '#4361ee' : 'grey'}`,
                    color: `${button == 'copy_writing' ? '#4361ee' : 'grey'}`,
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}>
                Copy Writing
            </button>

            {/* <button type="button" className="btn-outline theme-accent">Accent</button>
            <button type="button" className="btn-subtle theme-accent">Accent</button> */}
        </div>
    )
}

export default Section;