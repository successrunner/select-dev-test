import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

import Stars from '@/assets/icons/stars.svg';
import HeroImage from '@/assets/images/hero.png';
import AnimatedBanner from '@/components/AnimatedBanner';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="pb-20 pt-5">
      <div className="mx-auto mt-20 flex max-w-5xl flex-col items-center">
        <AnimatedBanner>
          <div className="flex items-center">
            <Stars />
            <p className="ml-1.5 text-sm font-medium">Introducing Insights</p>
            <ChevronRight size={12} className="ml-2" />
          </div>
        </AnimatedBanner>
        <h1
          className="mt-5 text-center"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 8.12%, #999EA9 109.09%)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          The Snowflake optimization and cost management platform
        </h1>
        <p className="mt-6 max-w-[600px] text-center text-xl opacity-80">
          Gain deep visibility into Snowflake usage, optimize performance and automate savings with the click of a
          button.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <Button size="lg">Book a demo</Button>
          <Button size="lg" variant="ghost">
            Start Free Trial <ChevronRight size={20} />
          </Button>
        </div>
      </div>
      <Image src={HeroImage} alt="Hero" className="mt-16 h-auto w-full" />
    </div>
  );
};

export default HeroSection;
