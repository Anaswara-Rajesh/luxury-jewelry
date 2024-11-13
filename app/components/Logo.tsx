import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => (
  <a href="#">
    <Image
      src="https://www.buccellati.com/static/version1730979564/frontend/Jakala/Buccellati/en_US/images/logo.svg"
      alt="Buccellati"
      width={170}
      height={64}
      className="hidden md:block"
    />

    <Image
      src="https://www.buccellati.com/static/version1730979564/frontend/Jakala/Buccellati/en_US/images/logo-mobile.svg"
      alt="Buccellati"
      width={125}
      height={22}
      className="md:hidden"
    />
  </a>
);

export default Logo;
