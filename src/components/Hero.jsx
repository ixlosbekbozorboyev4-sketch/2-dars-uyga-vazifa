export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={styles.heroSection}>
      <div style={styles.textContainer}>
        <p style={styles.greeting}>Salom, mening ismim</p>
        <h1 style={styles.title}>Frontend Dasturchi</h1>
        <p style={styles.desc}>
          Zamonaviy, qulay va tez ishlovchi veb-ilovalarni yaratish bo'yicha mutaxassis.
        </p>
        <div style={styles.actions}>
          <button style={styles.primaryBtn} onClick={scrollToContact}>Bog'lanish</button>
          <a href="#projects" style={styles.secondaryBtn}>Loyihalarni ko'rish</a>
        </div>
      </div>
      <div style={styles.avatarBox}>
        <div style={styles.avatarPlaceholder}>💻</div>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    minHeight: '85vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px',
    paddingTop: '120px',
  },
  textContainer: { flex: '1 1 450px' },
  greeting: { color: '#38bdf8', fontSize: '18px', marginBottom: '8px' },
  title: { fontSize: '48px', color: '#fff', marginBottom: '16px' },
  desc: { color: '#94a3b8', fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' },
  actions: { display: 'flex', gap: '15px' },
  primaryBtn: {
    backgroundColor: '#38bdf8',
    color: '#0b0f19',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
  secondaryBtn: {
    border: '1px solid #334155',
    color: '#cbd5e1',
    padding: '12px 24px',
    borderRadius: '8px',
  },
  avatarBox: { flex: '0 0 250px', display: 'flex', justifyContent: 'center' },
  avatarPlaceholder: {
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    backgroundColor: '#1e293b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '60px',
    border: '2px solid #38bdf8',
  },
};