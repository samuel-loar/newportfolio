import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2023 Your Company</p>
      <div style={styles.socialLinks}>
        <a href="https://github.com/Crochoir" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <br/>
        <a href="https://www.linkedin.com/in/samuel-loar-565a95241/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  bottom: '0',
  width: '100%',
  position: 'relative',
  marginTop: 'auto',
  paddingTop: '20px'
  },
  socialLinks: {
    marginTop: '10px',
  },
  socialLink: {
    color: '#fff',
    marginRight: '10px',
    textDecoration: 'none',
  },
};

export default Footer;
