export interface UserEnrollment {
  courseId: number;
  progress: number;
  completed: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  enrolledCourses: UserEnrollment[];
}

export const users: User[] = [
  {
    id: 101,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    enrolledCourses: [
      {
        courseId: 1,
        progress: 60,
        completed: false
      },
      {
        courseId: 2,
        progress: 30,
        completed: false
      },
      {
        courseId: 3,
        progress: 85,
        completed: false
      },
      {
        courseId: 4,
        progress: 100,
        completed: true
      }
    ]
  },
  {
    id: 102,
    name: 'Bob Smith',
    email: 'bob@example.com',
    enrolledCourses: [
      {
        courseId: 2,
        progress: 75,
        completed: false
      },
      {
        courseId: 5,
        progress: 100,
        completed: true
      },
      {
        courseId: 8,
        progress: 40,
        completed: false
      }
    ]
  },
  {
    id: 103,
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    enrolledCourses: [
      {
        courseId: 1,
        progress: 90,
        completed: true
      },
      {
        courseId: 6,
        progress: 55,
        completed: false
      }
    ]
  },
  {
    id: 104,
    name: 'David Wilson',
    email: 'david@example.com',
    enrolledCourses: [
      {
        courseId: 3,
        progress: 25,
        completed: false
      },
      {
        courseId: 7,
        progress: 100,
        completed: true
      },
      {
        courseId: 9,
        progress: 60,
        completed: false
      }
    ]
  },
  {
    id: 105,
    name: 'Eva Martinez',
    email: 'eva@example.com',
    enrolledCourses: [
      {
        courseId: 4,
        progress: 95,
        completed: true
      },
      {
        courseId: 7,
        progress: 80,
        completed: false
      },
      {
        courseId: 10,
        progress: 30,
        completed: false
      }
    ]
  },
  {
    id: 106,
    name: 'Frank Johnson',
    email: 'frank@example.com',
    enrolledCourses: [
      {
        courseId: 5,
        progress: 70,
        completed: false
      },
      {
        courseId: 8,
        progress: 100,
        completed: true
      }
    ]
  },
  {
    id: 107,
    name: 'Grace Lee',
    email: 'grace@example.com',
    enrolledCourses: [
      {
        courseId: 2,
        progress: 45,
        completed: false
      },
      {
        courseId: 6,
        progress: 85,
        completed: false
      },
      {
        courseId: 9,
        progress: 100,
        completed: true
      }
    ]
  },
  {
    id: 108,
    name: 'Henry Wilson',
    email: 'henry@example.com',
    enrolledCourses: [
      {
        courseId: 1,
        progress: 100,
        completed: true
      },
      {
        courseId: 3,
        progress: 65,
        completed: false
      },
      {
        courseId: 7,
        progress: 50,
        completed: false
      }
    ]
  },
  {
    id: 109,
    name: 'Isabella Garcia',
    email: 'isabella@example.com',
    enrolledCourses: [
      {
        courseId: 4,
        progress: 40,
        completed: false
      },
      {
        courseId: 8,
        progress: 90,
        completed: true
      },
      {
        courseId: 10,
        progress: 75,
        completed: false
      }
    ]
  },
  {
    id: 110,
    name: 'Jack Robinson',
    email: 'jack@example.com',
    enrolledCourses: [
      {
        courseId: 5,
        progress: 95,
        completed: true
      },
      {
        courseId: 9,
        progress: 30,
        completed: false
      }
    ]
  }
];

// Current user for the demo
export const currentUser = users[1];