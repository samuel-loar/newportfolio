import React from 'react';
import { Github, Linkedin } from 'react-bootstrap-icons';


const Footer = () => {
const date = new Date().getFullYear();
  return (
    <footer style={styles.footer}>
      <p>&copy; {date} Samuel</p>
      <div style={styles.socialLinks}>
        <a style={styles.socialLink1} href="https://github.com/Crochoir" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a style={styles.socialLink2} href="https://www.linkedin.com/in/samuel-loar-565a95241/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
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
    display: 'inline-block',
    marginTop: '10px',
    marginBottom: '10px',
    paddingBottom: '10px',
    fontSize: '1.5em'
  },
  socialLink1: {
    color: 'aliceblue',
    paddingRight: '10px',
    textDecoration: 'none',
  },
  socialLink2: {
    color: 'aliceblue',
    textDecoration: 'none'
  }
};

export default Footer;
