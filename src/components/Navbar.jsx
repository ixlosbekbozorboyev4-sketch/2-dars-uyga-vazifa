export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logo} onClick={() => scrollTo('hero')}>
          Portfolio<span style={{ color: '#38bdf8' }}>.</span>
        </div>
        <nav style={styles.navLinks}>
          <button style={styles.link} onClick={() => scrollTo('about')}>Haqimda</button>
          <button style={styles.link} onClick={() => scrollTo('skills')}>Ko'nikmalar</button>
          <button style={styles.link} onClick={() => scrollTo('projects')}>Loyihalar</button>
          <button style={styles.ctaBtn} onClick={() => scrollTo('contact')}>Bog'lanish</button>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(11, 15, 25, 0.85)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #1e293b',
    zIndex: 100,
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  link: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    fontSize: '15px',
  },
  ctaBtn: {
    backgroundColor: '#38bdf8',
    color: '#0b0f19',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
};