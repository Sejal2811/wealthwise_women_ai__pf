import React from 'react';
import { Card } from '@/components/ui/Card';
import { Star, PiggyBank} from 'lucide-react'; // optional icons

const stories = [
  {
    name: 'Priya Sharma',
    age: 29,
    role: 'Software Engineer, Pune',
    quote: '“Investing small amounts gave me big confidence.”',
    story:
      'Priya began investing ₹2,000 per month in mutual fund SIPs in 2020 after attending a workplace seminar on financial planning. Initially skeptical, she now has over ₹1.2 lakh saved and aims to hit ₹2 lakh by age 35.',
    method: 'SIP (Mutual Funds)',
    img: '/src/pages/tools/photos/priya.jpeg',
  },
  {
    name: 'Anita Patel',
    age: 45,
    role: 'Homemaker, Ahmedabad',
    quote: '“Saving for my daughters’ education gave me purpose.”',
    story:
      'With a modest household income, Anita started investing ₹50,000 in a 5-year fixed deposit in 2013. She reviewed it once and used the returns to fund her elder daughter’s college admission in 2023. She now explores government schemes for women.',
    method: 'Fixed Deposit',
    img: '/src/pages/tools/photos/anita.jpg',
  },
  {
    name: 'Divya Nair',
    age: 33,
    role: 'Boutique Owner, Kochi',
    quote: '“Gold is not just jewellery — it’s security.”',
    story:
      'Divya began saving in digital gold & sovereign gold bonds during the pandemic, growing a reserve worth ₹3.5 lakh. In 2024, she used part of the gains to expand her boutique and mentor other women entrepreneurs.',
    method: 'Digital Gold + SGBs',
    img: '/src/pages/tools/photos/divya.jpg',
  },
  {
    name: 'Meera Aggarwal',
    age: 38,
    role: 'School Teacher & Home Tutor, Jaipur',
    quote: '“Money sitting idle isn’t growing — I learned that late but fast!”',
    story:
      'Meera juggled her job and home tutoring for extra income, inspired by YouTube finance videos. She started investing ₹3,000/month in SIPs in 2022. With the returns, she took her family vacation to Mandvi in 2024 — her dream.',
    method: 'SIP (Mutual Funds)',
    img: '/src/pages/tools/photos/meera.jpg',
  },
];

export function SuccessStories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-violet-100 py-14">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-violet-800 mb-12 tracking-tight">
          -----------------------------------------Success Stories-----------------------------------------
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 space-y-4 border border-violet-100"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={story.img}
                  alt={`Portrait of ${story.name}`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-violet-300"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{story.name}</h2>
                  <p className="text-sm text-gray-500">
                    {story.age}, {story.role}
                  </p>
                </div>
              </div>

              <blockquote className="italic text-violet-700 border-l-4 border-violet-300 pl-4 text-sm">
                {story.quote}
              </blockquote>

              <p className="text-gray-700 text-sm leading-relaxed">{story.story}</p>

               
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
