import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Retail Investor',
      content: 'The market research alerts from TrendvisePro have been incredibly accurate...',
      initials: 'RK',
      rating: 5,
      image: '/images/rajesh.jpg'  // <-- Add image path here
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      content: 'The personalized investment strategy created for my business...',
      initials: 'PS',
      rating: 5,
      image: '/images/priya.jpg'
    },
    {
      name: 'Amit Patel',
      role: 'Day Trader',
      content: 'Their technical analysis and timely alerts are perfect...',
      initials: 'AP',
      rating: 4,
      image: '/images/amit.jpg'
    },
    {
      name: 'Sunita Verma',
      role: 'Long-term Investor',
      content: 'As someone focused on long-term wealth creation...',
      initials: 'SV',
      rating: 5,
      image: '/images/sunita.jpg'
    }
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = testimonials.length;

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <section className="py-20 bg-dealwise-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dealwise-blue">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied clients about their experience with our financial advisory services.
          </p>
        </div>

        <div className="overflow-hidden relative w-full max-w-5xl mx-auto">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 50}%)` }} // 50% because 2 items per slide
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/2 p-2 shrink-0">
                <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>

                      <div>
                        <p className="font-medium text-dealwise-blue">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 flex-1">{testimonial.content}</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
