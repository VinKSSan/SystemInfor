import React, { useEffect, useState } from "react";

import { Link as ScrollLink } from 'react-scroll';

import { SetaSty , BacSeta} from "./setaStyle";
const ArrowIndicator = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = viewportY / pageHeight;
      const maxRotation = -180;

      const newRotation = maxRotation * scrollPercentage;
      setRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BacSeta>
        <ScrollLink
            className='scroll'
            to="cabeça"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            <SetaSty viewBox="0 0 24 24" fill="none" stroke="cyan" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${rotation}deg)`}}>
                <path d="M12 19V5M5 12l7-7 7 7" />
            </SetaSty>
        </ScrollLink>
    </BacSeta>
  );
};

export default ArrowIndicator;