import { Subject } from '@/types';

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'Computer Science',
    description:
      'Fundamental concepts of programming, algorithms, and computer systems.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: 'MATH201',
    name: 'Linear Algebra',
    department: 'Mathematics',
    description:
      'Study of vectors, matrices, linear transformations, and their applications.',
    createdAt: new Date().toISOString(),
  },

  {
    id: 3,
    code: 'BUS150',
    name: 'Principles of Management',
    department: 'Business Administration',
    description:
      'Overview of management theories, organizational behavior, and leadership practices.',
    createdAt: new Date().toISOString(),
  },
];
