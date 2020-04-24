import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; {new Date().getFullYear()}, COVID-19 Dashboard</p>
      </Container>
    </footer>
  );
};

export default Footer;
