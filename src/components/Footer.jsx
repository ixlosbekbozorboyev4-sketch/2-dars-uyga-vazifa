export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Barcha huquqlar himoyalangan.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid #1e293b',
    padding: '24px 20px',
    textAlign: 'center',
    backgroundColor: '#070a12',
    marginTop: '60px',
  },
  text: { color: '#64748b', fontSize: '14px' },
};