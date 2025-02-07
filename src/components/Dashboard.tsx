import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { markCourseCompleted } from '../store/userSlice';
import { CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const courses = useSelector((state: RootState) => state.courses.courses);

  const enrolledCourses = user.enrolledCourses.map(enrollment => {
    const course = courses.find(c => c.id === enrollment.courseId);
    return {
      ...course,
      progress: enrollment.progress,
      completed: enrollment.completed,
    };
  }).filter((course): course is NonNullable<typeof course> => course !== undefined);

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome, {user.name}!</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Enrolled Courses</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {enrolledCourses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start">
              <img
                src={course.thumbnail}
                alt={course.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{course.name}</h3>
                <p className="text-gray-600">{course.instructor}</p>
                
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 rounded-full h-2"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                {!course.completed && (
                  <button
                    onClick={() => {
                      dispatch(markCourseCompleted(course.id));
                    }}
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark as Completed
                  </button>
                )}

                {course.completed && (
                  <div className="mt-4 inline-flex items-center px-4 py-2 rounded-md bg-green-100 text-green-800">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;