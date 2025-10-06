import React from 'react'
import CardNav from '../components/CardNav/CardNav.jsx';
import logo from '../../public/alien.png';

const navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Who is Andre?", ariaLabel: "About Company" },
        { label: "Is he even real?", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Featured Projects", ariaLabel: "Featured Projects" },
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Instagram", ariaLabel: "Follow me" },
        { label: "GitHub", ariaLabel: "Follow me" },
        { label: "LinkedIn", ariaLabel: "Let's connect" }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="transparent"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="elastic.out(1, 0.8)"
    />
  );
}

export default navbar
