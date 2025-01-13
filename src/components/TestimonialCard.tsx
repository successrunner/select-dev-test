import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatarUrl?: string;
  };
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  const initials = author.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-border-testimonial px-8 py-6 shadow-testimonial">
      <p className="opacity-80">“{quote}”</p>
      <div className="flex items-center gap-2">
        <Avatar className="h-[56px] w-[56px]">
          <AvatarImage src={author.avatarUrl} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{author.name}</p>
          <p className="text-sm opacity-80">
            {author.role}, {author.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
