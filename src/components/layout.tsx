import React from "react"

import { Navbar, HeaderContainer, TranslucentBG, ProfileImage, HeaderTitle, IntroContainer, BackgroundImage, Profile, Title } from "./style"

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = React.useState(false)
  
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <Navbar scrolled={scrolled} >
        <TranslucentBG />
        <HeaderContainer>
          <ProfileImage src="me.jpg" />
          <HeaderTitle>bigspeed</HeaderTitle>
        </HeaderContainer>
      </Navbar>

      <BackgroundImage src="quad.jpg" />

      <IntroContainer>
        <Profile src="me.jpg" />
        <Title>bigspeed</Title>
      </IntroContainer>
    </>
  )
}

export default Layout