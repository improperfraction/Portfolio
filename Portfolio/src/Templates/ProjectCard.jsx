function ProjectCard({
    image,
    title,
    description,
    tech,
    website,
    source,
  }) {
    return (
      <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-1 h-[380px] lg:h-[410px] w-[306px] mx-auto flex flex-col">
        <img src={image} alt={title} className="rounded-lg w-full h-[160px] object-fill" />
        <div className="flex-1 flex flex-col">
          <h2 className="font-bold text-lg lg:text-xl text-gray-900 mt-2">{title}</h2>
          <div className="text-gray-800 font-normal text-sm lg:text-sm mb-3">{description}</div>
          <div className="flex flex-wrap gap-2 mb-2">
            {tech.map((t) => (
              <span
                key={t}
                className="bg-gray-200 text-gray-800 rounded-md px-2 py-1 text-xs lg:text-xs font-normal"
              >
                {t}
              </span>
            ))}
          </div>
          {/* This empty div pushes the button row to the bottom */}
          <div className="flex-1"></div>
          <div className="flex flex-row justify-start gap-2 mb-2">
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-2 py-1 rounded-lg font-light text-xs lg:text-sm hover:bg-gray-800 transition"
            >
              Website
            </a>
            <a 
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-2 py-1 rounded-lg font-light text-xs lg:text-sm hover:bg-gray-800 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
              </svg>
              Source
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;