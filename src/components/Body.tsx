const skills: string[] = ["HTML/CSS", "JavaScript", "TypeScript", "5+ more"];

const Body: React.FC = () => {
  return (
    <div className="grid gap-4">
      <div className="text-left font-bold text-3xl">
        Senior Software Engineer
      </div>
      <div className="text-left space-y-2 text-white">
        <p>We're looking for a highly skilled Senior Software Engineer</p>
        <p>to join our core team in building and scaling next-generati...</p>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-500 text-white text-sm px-3 py-1 rounded-2xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Body;
