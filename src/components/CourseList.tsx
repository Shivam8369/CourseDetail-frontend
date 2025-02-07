import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setSearchTerm } from '../store/coursesSlice';
import { Search } from 'lucide-react';

const CourseList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courses, searchTerm } = useSelector((state: RootState) => state.courses);

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses or instructors..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <img
              src={course.thumbnail}
              alt={course.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{course.name}</h3>
              <p className="text-gray-600 mt-2">{course.instructor}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  course.enrollmentStatus === 'Open' ? 'bg-green-100 text-green-800' :
                  course.enrollmentStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.enrollmentStatus}
                </span>
                <span className="text-gray-500">{course.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;