
const Navbar = () => {
    return (
        <div
            className="nav-overflow"
            data-bs-toggle="nav-overflow"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1030, // Angka standar Bootstrap agar berada di atas konten lain
                backgroundColor: '#5c5b5b' // Sesuaikan warna background
            }}
        >
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#" style={{ fontSize: '26px', fontWeight: 'bold' }}>
                        Portofolio
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar