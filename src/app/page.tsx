'use client';

import Image from 'next/image';
import HeroImage from '@/assets/images/hero.png';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import AnimatedBanner from '@/components/AnimatedBanner';
import Stars from '@/assets/icons/stars.svg';
import TestimonialCard from '@/components/TestimonialCard';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';

export default function Home() {
  return (
    <div className="px-[100px]">
      {/* Hero Section */}
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
      {/* Testimonial Section */}
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
            plugins={[AutoScroll({ speed: 0.3, startDelay: 1000 })]}
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
    </div>
  );
}
