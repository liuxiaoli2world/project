import React from 'react';
import Link from 'next/link';

export default () => {
  const linkStyle = { marginRight: 15 };
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>index page</a>
      </Link>
      <Link href="about">
        <a style={linkStyle}>about page</a>
      </Link>
    </div>
  );
};
