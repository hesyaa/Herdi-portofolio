import GeoMatrix from '../../public/geomatrix.png'
import Profile from '../../public/profile.jpeg'

const Header = () => {
    const resume = 'Growth-minded Web Developer with nearly 5 years of experience, now expanding into creative roles. Armed with copywriting skills from Harisenin bootcamp and basic design proficiency in Canva and CapCut, I am open to Copywriter opportunities where I can deliver complete, engaging content.';
    return (
        <div
            className="col vh-100 text-center d-flex flex-column align-items-center justify-content-center"
            style={{
                width: '100%',
                backgroundImage: `url(${GeoMatrix.src || GeoMatrix})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            
            {/* <img
                style={{ width: '20%',backgroundSize:'contain', height:'60%', backgroundPosition: 'top center', // Mengarahkan gambar latar ke atas-tengah
              backgroundRepeat: 'no-repeat', borderRadius:'60%' }}
                src={Profile.src || Profile} // PERBAIKAN: Hapus teks url(...) di sini
                // className="img-fluid rounded-top"
                alt="Profile Picture"
            /> */}
            <div className='row' style={{border:'5px solid #9f2042', width:'60%', justifyContent:'space-between', alignItems:'center'}}>
                  <h1 className='col animate__animated animate__bounce' style={{ fontWeight: 'bold', fontSize: '60px' }}>
                About Me
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="col bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
          
            </div>
            <h1 style={{ fontWeight: 'lighter' }}>
                Hello There, My name is <span style={{fontWeight:'bold', color:'#dd2d4a'}}>Herdi Sidik</span>
            </h1>
            <br />
            <div className='animate__animated animate__backInLeft' style={{ textAlign: 'left', padding: '10px', borderRadius: '20px', backgroundColor: '#3c2e4f', border: '1px solid black', fontSize: '20px', width: '60%', color: 'gray' }}>
                <p style={{ color: '#edf6f9' }}>{resume}</p>
            </div>
            <br />
        </div>
    )
}


export default Header