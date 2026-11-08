export default function About() {
  return (
    <section id="about">
      <h2 style={styles.heading}>Men haqimda</h2>
      <div style={styles.card}>
        <p style={styles.paragraph}>
          Men veb-texnologiyalarga qiziqqan, foydalanuvchilar uchun qulay va chiroyli interfeyslar yaratishni yaxshi ko'radigan frontend dasturchiman.
        </p>
        <p style={styles.paragraph}>
          Hozirda React kutubxonasi, zamonaviy JavaScript (ES6+) hamda toza kod yozish qoidalarini amaliy loyihalarda qo'llab kelmoqdaman.
        </p>
      </div>
    </section>
  );
}

const styles = {
  heading: { fontSize: '32px', color: '#fff', marginBottom: '24px', borderBottom: '2px solid #1e293b', paddingBottom: '12px' },
  card: { backgroundColor: '#131b2e', padding: '28px', borderRadius: '12px', border: '1px solid #1e293b' },
  paragraph: { color: '#94a3b8', fontSize: '16px', lineHeight: 1.7, marginBottom: '12px' },
};