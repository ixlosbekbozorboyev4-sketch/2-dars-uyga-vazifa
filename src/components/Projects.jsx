export default function Projects() {
  const projects = [
    {
      title: "Online Do'kon",
      desc: "React va API orqali savat tizimi va mahsulotlar ro'yxati yaratilgan.",
      tech: "React, CSS, Fetch API",
    },
    {
      title: "Vazifalar Boshqaruvchisi (Todo App)",
      desc: "Vazifalar qo'shish, o'chirish va localStorage'ga saqlash funksiyasi bor.",
      tech: "React, LocalStorage",
    },
  ];

  return (
    <section id="projects">
      <h2 style={styles.heading}>Loyihalar</h2>
      <div style={styles.grid}>
        {projects.map((item, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.placeholderImg}>Loyiha Rasmi</div>
            <div style={styles.content}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.desc}</p>
              <span style={styles.tech}>{item.tech}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  heading: { fontSize: '32px', color: '#fff', marginBottom: '24px', borderBottom: '2px solid #1e293b', paddingBottom: '12px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' },
  card: { backgroundColor: '#131b2e', borderRadius: '12px', border: '1px solid #1e293b', overflow: 'hidden' },
  placeholderImg: { height: '160px', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' },
  content: { padding: '20px' },
  title: { color: '#fff', fontSize: '20px', marginBottom: '10px' },
  desc: { color: '#94a3b8', fontSize: '15px', lineHeight: 1.5, marginBottom: '14px' },
  tech: { color: '#38bdf8', fontSize: '13px', fontWeight: 'bold' },
};