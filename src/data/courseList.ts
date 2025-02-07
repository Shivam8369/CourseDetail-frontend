export interface Course {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: 'Open' | 'Closed' | 'In Progress';
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: {
    week: number;
    topic: string;
    content: string;
  }[];
  students: {
    id: number;
    name: string;
    email: string;
  }[];
}

export const courses: Course[] = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
      }
    ],
    students: [
      {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com'
      },
      {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com'
      }
    ]
  },
  {
    id: 2,
    name: 'Advanced JavaScript Concepts',
    instructor: 'Jane Smith',
    description: 'Deep dive into advanced JavaScript concepts and modern development practices.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&auto=format&fit=crop&q=60',
    duration: '10 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Intermediate JavaScript knowledge', 'Basic ES6 understanding'],
    syllabus: [
      {
        week: 1,
        topic: 'Modern JavaScript Features',
        content: 'ES6+ features, destructuring, arrow functions, and modules.'
      },
      {
        week: 2,
        topic: 'Asynchronous Programming',
        content: 'Promises, async/await, and error handling.'
      }
    ],
    students: [
      {
        id: 103,
        name: 'Charlie Brown',
        email: 'charlie@example.com'
      }
    ]
  },
  {
    id: 3,
    name: 'Full Stack Web Development',
    instructor: 'Sarah Wilson',
    description: 'Comprehensive course covering both frontend and backend development.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60',
    duration: '12 weeks',
    schedule: 'Mondays and Fridays, 5:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['HTML/CSS', 'Basic JavaScript', 'Git basics'],
    syllabus: [
      {
        week: 1,
        topic: 'Frontend Fundamentals',
        content: 'HTML5, CSS3, and responsive design principles.'
      },
      {
        week: 2,
        topic: 'Backend Basics',
        content: 'Node.js, Express, and RESTful APIs.'
      }
    ],
    students: [
      {
        id: 104,
        name: 'David Wilson',
        email: 'david@example.com'
      }
    ]
  },
  {
    id: 4,
    name: 'UI/UX Design Principles',
    instructor: 'Emily Chen',
    description: 'Learn modern UI/UX design principles and tools used in the industry.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60',
    duration: '6 weeks',
    schedule: 'Tuesdays and Thursdays, 4:00 PM - 6:00 PM',
    location: 'Online',
    prerequisites: ['Basic design knowledge', 'Familiarity with design tools'],
    syllabus: [
      {
        week: 1,
        topic: 'Design Thinking',
        content: 'Introduction to design thinking and user-centered design.'
      },
      {
        week: 2,
        topic: 'Prototyping',
        content: 'Creating wireframes and interactive prototypes.'
      }
    ],
    students: [
      {
        id: 105,
        name: 'Eva Martinez',
        email: 'eva@example.com'
      }
    ]
  },
  {
    id: 5,
    name: 'Data Science Fundamentals',
    instructor: 'Michael Chang',
    description: 'Introduction to data science, statistics, and machine learning basics.',
    enrollmentStatus: 'Closed',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    duration: '10 weeks',
    schedule: 'Wednesdays and Saturdays, 10:00 AM - 12:00 PM',
    location: 'Online',
    prerequisites: ['Basic Python', 'Statistics fundamentals'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Data Science',
        content: 'Overview of data science and its applications.'
      },
      {
        week: 2,
        topic: 'Statistical Analysis',
        content: 'Basic statistical concepts and data analysis.'
      }
    ],
    students: [
      {
        id: 106,
        name: 'Frank Johnson',
        email: 'frank@example.com'
      }
    ]
  },
  {
    id: 6,
    name: 'Cloud Computing with AWS',
    instructor: 'Robert Miller',
    description: 'Learn to build and deploy applications using AWS services.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
    duration: '8 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Basic Linux commands', 'Networking basics'],
    syllabus: [
      {
        week: 1,
        topic: 'AWS Fundamentals',
        content: 'Introduction to AWS services and cloud concepts.'
      },
      {
        week: 2,
        topic: 'EC2 and S3',
        content: 'Working with EC2 instances and S3 storage.'
      }
    ],
    students: [
      {
        id: 107,
        name: 'Grace Lee',
        email: 'grace@example.com'
      }
    ]
  },
  {
    id: 7,
    name: 'Mobile App Design',
    instructor: 'Lisa Wang',
    description: 'Master the art of designing beautiful and functional mobile applications.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=60',
    duration: '6 weeks',
    schedule: 'Tuesdays and Fridays, 3:00 PM - 5:00 PM',
    location: 'Online',
    prerequisites: ['Basic design principles', 'Familiarity with mobile platforms'],
    syllabus: [
      {
        week: 1,
        topic: 'Mobile Design Principles',
        content: 'Understanding mobile-first design and user behavior.'
      },
      {
        week: 2,
        topic: 'UI Components',
        content: 'Designing effective mobile UI components.'
      }
    ],
    students: [
      {
        id: 108,
        name: 'Henry Wilson',
        email: 'henry@example.com'
      }
    ]
  },
  {
    id: 8,
    name: 'Blockchain Development',
    instructor: 'Alex Thompson',
    description: 'Learn to build decentralized applications and smart contracts.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60',
    duration: '10 weeks',
    schedule: 'Thursdays and Saturdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['JavaScript proficiency', 'Basic cryptography knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Blockchain Basics',
        content: 'Understanding blockchain technology and cryptocurrencies.'
      },
      {
        week: 2,
        topic: 'Smart Contracts',
        content: 'Writing and deploying smart contracts.'
      }
    ],
    students: [
      {
        id: 109,
        name: 'Isabella Garcia',
        email: 'isabella@example.com'
      }
    ]
  },
  {
    id: 9,
    name: 'DevOps Engineering',
    instructor: 'James Anderson',
    description: 'Master modern DevOps practices and tools.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop&q=60',
    duration: '12 weeks',
    schedule: 'Mondays and Thursdays, 5:00 PM - 7:00 PM',
    location: 'Online',
    prerequisites: ['Linux administration', 'Basic scripting'],
    syllabus: [
      {
        week: 1,
        topic: 'CI/CD Fundamentals',
        content: 'Understanding continuous integration and deployment.'
      },
      {
        week: 2,
        topic: 'Container Orchestration',
        content: 'Working with Docker and Kubernetes.'
      }
    ],
    students: [
      {
        id: 110,
        name: 'Jack Robinson',
        email: 'jack@example.com'
      }
    ]
  },
  {
    id: 10,
    name: 'Artificial Intelligence Basics',
    instructor: 'Maria Rodriguez',
    description: 'Introduction to AI concepts and machine learning algorithms.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    duration: '10 weeks',
    schedule: 'Wednesdays and Fridays, 4:00 PM - 6:00 PM',
    location: 'Online',
    prerequisites: ['Python programming', 'Linear algebra basics'],
    syllabus: [
      {
        week: 1,
        topic: 'AI Fundamentals',
        content: 'Introduction to artificial intelligence and its applications.'
      },
      {
        week: 2,
        topic: 'Machine Learning Basics',
        content: 'Understanding basic machine learning algorithms.'
      }
    ],
    students: [
      {
        id: 111,
        name: 'Kevin Zhang',
        email: 'kevin@example.com'
      }
    ]
  }
];