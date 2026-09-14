export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
}

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Self-Employed',
    position: 'Freelance Developer',
    duration: '2020 - Present',
    description: 'Working with various clients to build web applications and digital experiences.',
    achievements: [
      'Delivered 15+ client projects on time and within budget',
      'Maintained 100% client satisfaction rate',
      'Specialized in React and Next.js applications',
    ],
  },
];
