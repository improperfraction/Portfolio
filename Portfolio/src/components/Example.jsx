import React, { useState } from "react";

function ExpandableCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      onClick={toggleExpansion}
      className={`bg-gray-800 text-white rounded-lg p-4 shadow-lg w-96 mx-auto cursor-pointer transition-all ${
        isExpanded ? "h-auto" : "h-36"
      }`}
    >
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="Company Logo"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Foursys</h2>
            <p className="text-sm text-gray-400">Mobile Developer</p>
          </div>
        </div>
        <div>
          <span
            className={`text-gray-400 hover:text-white transition-transform ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          >
            &#9660; {/* Down Arrow */}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex space-x-2 mt-2">
        <span className="bg-gray-700 px-2 py-1 rounded-lg text-sm">Kotlin</span>
        <span className="bg-gray-700 px-2 py-1 rounded-lg text-sm">Java</span>
        <span className="bg-gray-700 px-2 py-1 rounded-lg text-sm">Android</span>
      </div>

      {/* Date */}
      <p className="text-sm text-gray-400 mt-2">April 2022 - Feb 2023</p>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4">
          <p className="text-sm">
            Working on software development projects as a mobile development
            intern, focusing on Android development using Java. During the
            internship, the following topics were covered:
          </p>
          <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
            <li>Interface Design</li>
            <li>Programming Logic</li>
            <li>Java for Android</li>
            <li>GIT for version control</li>
            <li>Project Management Methodologies</li>
          </ul>

          <h3 className="text-sm font-semibold mt-4">Tools used:</h3>
          <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
            <li>GitHub/GitLab - Repositories</li>
            <li>Android Studio - IDE</li>
            <li>Firebase</li>
            <li>Agile Methodology - Scrum</li>
            <li>Figma/Miro</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExpandableCard;
