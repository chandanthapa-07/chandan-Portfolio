export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'database' | 'design' | 'tools';
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'HTML', level: 'advanced', category: 'frontend' },
  { id: '2', name: 'CSS', level: 'advanced', category: 'frontend' },
  { id: '3', name: 'JavaScript', level: 'expert', category: 'frontend' },
  { id: '4', name: 'React', level: 'advanced', category: 'frontend' },
  { id: '5', name: 'Next.js', level: 'advanced', category: 'frontend' },
  { id: '6', name: 'TypeScript', level: 'intermediate', category: 'frontend' },

  // Backend
  { id: '7', name: 'Node.js', level: 'intermediate', category: 'backend' },
  { id: '8', name: 'Express', level: 'intermediate', category: 'backend' },
  { id: '9', name: 'PHP', level: 'intermediate', category: 'backend' },
  { id: '10', name: 'Laravel', level: 'intermediate', category: 'backend' },

  // Database
  { id: '11', name: 'MySQL', level: 'intermediate', category: 'database' },
  { id: '12', name: 'PostgreSQL', level: 'intermediate', category: 'database' },
  { id: '13', name: 'MongoDB', level: 'intermediate', category: 'database' },

  // Design
  { id: '14', name: 'UI/UX', level: 'intermediate', category: 'design' },
  { id: '15', name: 'Figma', level: 'intermediate', category: 'design' },
  { id: '16', name: 'Graphic Design', level: 'intermediate', category: 'design' },

  // Tools
  { id: '17', name: 'Git', level: 'expert', category: 'tools' },
  { id: '18', name: 'GitHub', level: 'expert', category: 'tools' },
  { id: '19', name: 'VS Code', level: 'expert', category: 'tools' },
  { id: '20', name: 'Docker', level: 'intermediate', category: 'tools' },
];
