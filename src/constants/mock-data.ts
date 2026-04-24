import { Subject } from '@/types';

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'CS',
    description:
      'Fundamental concepts of programming, algorithms, and computer systems.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: 'MATH201',
    name: 'Linear Algebra',
    department: 'Math',
    description:
      'Study of vectors, matrices, linear transformations, and their applications.',
    createdAt: new Date().toISOString(),
  },

  {
    id: 3,
    code: 'BUS150',
    name: 'Principles of Management',
    department: 'English',
    description:
      'Overview of management theories, organizational behavior, and leadership practices.',
    createdAt: new Date().toISOString(),
  },
];
