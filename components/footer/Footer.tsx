import { FooterContent, StyledFooter } from './Footer.styles';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterContent>
        <p>
          &copy; <span>{year} | GyBex</span>
        </p>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
