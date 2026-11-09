
const Contact = () => {
    return (
    <section style={{ padding: '60px 80px', margin: '0 auto', backgroundColor:'#d7dde7' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontWeight:'bold' }}>Get In Touch</h2>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        {/* SISI KIRI: Informasi Kontak Terbuka */}
        <div style={{ flex: '1 1 300px' }}>
          <h3>Let's talk about everything!</h3>
          <p>Don't like forms? Send me an email or find me on professional networks.</p>
          <div style={{ marginTop: '20px' }}>
            <p><strong>Email:</strong> hesyaa29@gmail.com</p>
            <p><strong>Location:</strong> Bogor, Indonesia</p>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <a href="https://www.linkedin.com/in/herdi-syahrul-sidik-137ab0442/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        {/* SISI KANAN: Formulir Kontak */}
        <div style={{ flex: '1 1 400px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Your Name" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
            <input type="email" placeholder="Your Email" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc' }} />
            <textarea placeholder="Write your message here..." rows="5" required style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ccc', resize: 'none' }}></textarea>
            <button type="submit" style={{ padding: '12px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;