import Link from 'next/link';
import { ReactNode } from 'react';

const AnimatedBanner = ({ href = '/', children }: { href?: string; children: ReactNode }) => {
  return (
    <div className="animated-border rounded-full p-[1px]">
      <Link
        style={{
          boxShadow: '0px 1px 0px 0px #FFFFFF1A inset, 0px 1px 0px 0px #000000B2',
          background: 'radial-gradient(88.41% 100% at 49.87% 0%, #3B3F5A 0%, #18182B 57.5%)',
        }}
        className="flex h-8 items-center rounded-full px-[14px] backdrop-blur-lg"
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default AnimatedBanner;
