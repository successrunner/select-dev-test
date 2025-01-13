'use client';

import AutoScroll from 'embla-carousel-auto-scroll';

import TestimonialCard from '@/components/TestimonialCard';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const TestimonialSection = () => {
  return (
    <div className="py-[112px]">
      <p className="text-center font-robotoMono text-xs font-medium uppercase text-subheading">TESTIMONIALS</p>
      <h2 className="mx-auto mt-4 max-w-[600px] text-center">Supercharging thousands of Snowflake users</h2>
      <div className="relative mt-20 grid grid-cols-3 gap-6 px-5">
        <Carousel
          opts={{
            align: 'start',
          }}
          plugins={[AutoScroll({ speed: 0.3 })]}
          orientation="vertical"
        >
          <CarouselContent className="h-[700px]">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <TestimonialCard
                  quote="Before SELECT, we were blind to our Snowflake cost drivers. Minutes after install, we identified a single job that was driving over 20% of our costs. The instant visibility & not having to build & maintain our own monitoring makes a big difference for a lean team like ours."
                  author={{
                    name: 'Erik Webb',
                    role: 'Head of Data',
                    company: 'Clair',
                    avatarUrl: 'https://github.com/shadcn.png',
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel
          opts={{
            loop: true,
            align: 'end',
          }}
          plugins={[AutoScroll({ speed: 0.3, direction: 'backward' })]}
          orientation="vertical"
        >
          <CarouselContent className="h-[700px]">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <TestimonialCard
                  quote="Before SELECT, we were blind to our Snowflake cost drivers. Minutes after install, we identified a single job that was driving over 20% of our costs. The instant visibility & not having to build & maintain our own monitoring makes a big difference for a lean team like ours."
                  author={{
                    name: 'Erik Webb',
                    role: 'Head of Data',
                    company: 'Clair',
                    avatarUrl: 'https://github.com/shadcn.png',
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Carousel
          opts={{
            align: 'start',
          }}
          plugins={[AutoScroll({ speed: 0.3, startDelay: 2500 })]}
          orientation="vertical"
        >
          <CarouselContent className="h-[700px]">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <TestimonialCard
                  quote="Before SELECT, we were blind to our Snowflake cost drivers. Minutes after install, we identified a single job that was driving over 20% of our costs. The instant visibility & not having to build & maintain our own monitoring makes a big difference for a lean team like ours."
                  author={{
                    name: 'Erik Webb',
                    role: 'Head of Data',
                    company: 'Clair',
                    avatarUrl: 'https://github.com/shadcn.png',
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,_#0B0C14_0%,_rgba(11,_12,_20,_0)_35%,_rgba(11,_12,_20,_0)_65%,_#0B0C14_100%)]" />
      </div>
    </div>
  );
};

export default TestimonialSection;
