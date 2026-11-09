import Myorbit from '../../public/myorbit.png'
import ObatApp from '../../public/obatss.png'

const Section = ({ value }) => {
    console.log('value', value)
    return (
        <div className="text-center">
            {
                value === 'web_developer' && (
                    <div className="pt-5 pb-5" style={{ backgroundColor: '#f8f5f5' }}>
                        <h1 style={{ fontSize: '35px', fontWeight: 'bold' }}>Web Developer</h1>
                        <div style={{ width: '90%', margin: 'auto' }} className="row pt-5">
                            <div
                                className="col mx-4"
                                style={{
                                    width: '60%',
                                    backgroundColor: 'white',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

                                }}
                            >
                                <img
                                    style={{
                                        width: '100%', backgroundSize: 'cover', backgroundPosition: 'top center', // Mengarahkan gambar latar ke atas-tengah
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    src={Myorbit.src || Myorbit} // PERBAIKAN: Hapus teks url(...) di sini
                                    alt="Profile Picture"
                                />

                            </div>
                            <div
                                className="col"
                                style={{
                                    width: '60%',
                                    display: 'flex',          // WAJIB: Mengaktifkan flexbox agar posisi anak elemen bisa diatur
                                    justifyContent: 'center', // Membuat teks rata tengah secara horizontal
                                    alignItems: 'center',     // Membuat teks rata tengah secara vertikal
                                    textAlign: 'left',      // Opsional: Membuat baris teks di dalam <p> ikutan rata tengah jika teksnya panjang
                                    minHeight: '100px'        // Tambahkan tinggi minimum jika ingin melihat efek vertikal center-nya
                                }}
                            >
                                <p style={{ color: '#3c3c3c', fontWeight: 'normal', padding: '10px', margin: 0, fontSize: '23px' }}> {/* Mengapus margin bawaan tag <p> agar presisi di tengah */}
                                    As a Frontend Developer, I contributed to the development of the MyOrbit website by enhancing UI designs and implementing data integration across multiple sections.
                                </p>
                            </div>


                        </div>

                        <div style={{ width: '90%', margin: 'auto' }} className="row pt-5">
                            <div
                                className="col mx-4"
                                style={{
                                    width: '60%',
                                    backgroundColor: 'white',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

                                }}
                            >
                                <img
                                    style={{
                                        width: '40%', height: '100', backgroundSize: 'contain', backgroundPosition: 'top center', // Mengarahkan gambar latar ke atas-tengah
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    src={ObatApp.src || ObatApp} // PERBAIKAN: Hapus teks url(...) di sini
                                    alt="Profile Picture"
                                />

                            </div>
                            <div
                                className="col"
                                style={{
                                    width: '60%',
                                    display: 'flex',          // WAJIB: Mengaktifkan flexbox agar posisi anak elemen bisa diatur
                                    justifyContent: 'center', // Membuat teks rata tengah secara horizontal
                                    alignItems: 'center',     // Membuat teks rata tengah secara vertikal
                                    textAlign: 'left',      // Opsional: Membuat baris teks di dalam <p> ikutan rata tengah jika teksnya panjang
                                    minHeight: '100px'        // Tambahkan tinggi minimum jika ingin melihat efek vertikal center-nya
                                }}
                            >
                                <p style={{ color: '#3c3c3c', fontWeight: 'normal', padding: '10px', margin: 0, fontSize: '23px' }}> {/* Mengapus margin bawaan tag <p> agar presisi di tengah */}
                                    Developed a React Native mobile app in a team environment for the Salt Academy graduation exam, executing the pipeline from UI design implementation to backend API integration.
                                </p>
                            </div>


                        </div>
                    </div>
                )
            }

            {
                value === 'copy_writing' && (
                    <div className='pt-5 pb-5'>
                        <h1 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Copy writing</h1>
                        <h2>Still has no content</h2>
                    </div>
                )
            }
        </div>
    )
}

export default Section;