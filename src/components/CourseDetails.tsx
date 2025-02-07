import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ChevronDown, ChevronUp, Clock, MapPin, BookOpen } from 'lucide-react';

const CourseDetails = () => {
  const { id } = useParams();
  const course = useSelector((state: RootState) => 
    state.courses.courses.find(c => c.id === Number(id))
  );
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={course.thumbnail}
            alt={course.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{course.name}</h1>
          <p className="text-xl text-gray-600 mt-2">Instructor: {course.instructor}</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{course.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <BookOpen className="w-5 h-5 mr-2" />
              <span>{course.schedule}</span>
            </div>
          </div>
          <div className="mt-4">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
              course.enrollmentStatus === 'Open' ? 'bg-green-100 text-green-800' :
              course.enrollmentStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {course.enrollmentStatus}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Description</h2>
        <p className="mt-2 text-gray-600">{course.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Prerequisites</h2>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          {course.prerequisites.map((prereq, index) => (
            <li key={index}>{prereq}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Syllabus</h2>
        <div className="mt-4 space-y-4">
          {course.syllabus.map((week) => (
            <div key={week.week} className="border rounded-lg">
              <button
                className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
              >
                <span className="font-semibold">Week {week.week}: {week.topic}</span>
                {expandedWeek === week.week ? <ChevronUp /> : <ChevronDown />}
              </button>
              {expandedWeek === week.week && (
                <div className="px-4 py-3 bg-gray-50">
                  <p className="text-gray-600">{week.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;