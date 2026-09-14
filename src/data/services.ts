export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern frameworks and best practices.',
    icon: 'globe',
  },
  {
    id: '2',
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces with a focus on accessibility and user experience.',
    icon: 'palette',
  },
  {
    id: '3',
    title: 'Full-Stack Development',
    description: 'Developing complete solutions from frontend to backend, including APIs and database design.',
    icon: 'code',
  },
];
