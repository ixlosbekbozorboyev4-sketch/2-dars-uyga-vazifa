export default function Skills() {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git / GitHub', 'Tailwind CSS'];

  return (
    <section id="skills">
      <h2 style={styles.heading}>Ko'nikmalar</h2>
      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            <span style={styles.dot}></span>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  heading: { fontSize: '32px', color: '#fff', marginBottom: '24px', borderBottom: '2px solid #1e293b', paddingBottom: '12px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' },
  card: {
    backgroundColor: '#131b2e',
    padding: '16px',
    borderRadius: '10px',
    border: '1px solid #1e293b',
    color: '#cbd5e1',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  dot: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#38bdf8' },
};