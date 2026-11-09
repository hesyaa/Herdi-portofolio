'use client'

import Navbar from '../components/Navbar'
import ImageTexture from '../../public/texture.jpg'
import Profile from '../../public/profile.jpeg'
import Geomatrix from '../../public/geomatrix.png'
import Header from '@/components/Header';
import Category from '@/components/Category';
import Section from '@/components/Section';

import { useState } from 'react';
import Contact from '@/components/Contact'


export default function Home() {

    const [button, setButton] = useState('web_developer');
    const [animated, setAnimated] = useState(null)
    const [buttonSelected, setButtonSelected] = useState(null);
  return (
    <div className="bg-10">
      <Navbar />
      <Header />
      <Category 
        button={button}
        setButton={setButton}
        animated={animated}
        setAnimated={setAnimated}
      />
      <Section 
        value={button}
      />

      <Contact />
      <div className='row text-gray'>
        {/* <div className='col bg-warning d-flex flex-column align-items-center justify-content-center'
          style={{ minHeight: '500px' }} // Berikan tinggi sesuai kebutuhan Anda
        >
          <h1 style={{ color: '#362d13', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', fontFamily: 'sans-serif', fontSize: '50px', fontWeight: 'bold', textAlign: 'center' }}>
            Hello.. here is my portofolio
          </h1>
        </div> */}

        {/* <div className='col d-flex flex-column align-items-center justify-content-center'
          style={{ minHeight: '300px', opacity: 1, backgroundColor: '#10cba2' }} // Opacity diubah ke 1 agar tidak transparan
        >
          <div
            style={{
              backgroundImage: `url(${Profile.src || Profile})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center', // Mengarahkan gambar latar ke atas-tengah
              backgroundRepeat: 'no-repeat',
              width: '60%',
              height: '200px',
              borderRadius: '25%'
            }}
          >
          </div>
          <br />
          <p className=''
            style={{ color: '#2c6055', fontSize: '38px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >I'am Herdy web developer</p>
        </div> */}

      </div>

    </div>
  );
}

{/* <div className="row">
  <div className="col bg-danger text-white p-3">Kolom 1</div>
  <div className="col bg-primary text-white p-3">Kolom 2</div>
  <div className="col bg-success text-white p-3">Kolom 3</div>
</div> */}