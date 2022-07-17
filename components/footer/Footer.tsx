import { FooterContent, FooterWrapper } from './Footer.styles';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterWrapper>
      <FooterContent>
        <p>
          &copy; <span>{year} | GROUP 37</span>
        </p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
