export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Xabaringiz jo'natildi!");
  };

  return (
    <section id="contact">
      <h2 style={styles.heading}>Bog'lanish</h2>
      <div style={styles.container}>
        <div style={styles.info}>
          <h3 style={{ color: '#fff', marginBottom: '12px' }}>Keling, suhbatlashamiz</h3>
          <p style={{ color: '#94a3b8', marginBottom: '18px' }}>
            Savollar yoki loyiha takliflari bo'lsa, xabar qoldiring.
          </p>
          <p style={styles.detail}>Telegram: @username</p>
          <p style={styles.detail}>Email: aloqa@example.com</p>
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="text" placeholder="Ismingiz" required style={styles.input} />
          <input type="email" placeholder="Emailingiz" required style={styles.input} />
          <textarea rows="4" placeholder="Xabaringiz" required style={styles.input}></textarea>
          <button type="submit" style={styles.btn}>Yuborish</button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  heading: { fontSize: '32px', color: '#fff', marginBottom: '24px', borderBottom: '2px solid #1e293b', paddingBottom: '12px' },
  container: { display: 'flex', flexWrap: 'wrap', gap: '30px' },
  info: { flex: '1 1 300px' },
  detail: { color: '#cbd5e1', marginBottom: '8px' },
  form: { flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '14px' },
  input: {
    backgroundColor: '#131b2e',
    border: '1px solid #1e293b',
    borderRadius: '8px',
    padding: '12px',
    color: '#fff',
    outline: 'none',
  },
  btn: {
    backgroundColor: '#38bdf8',
    color: '#0b0f19',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
};