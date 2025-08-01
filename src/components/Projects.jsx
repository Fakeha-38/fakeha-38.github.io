// import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Dr. Smart",
    description:
      "DrSmart is a modern healthcare platform that enables appointment booking, visit tracking, and medical record sharing between patients and doctors. It’s designed for speed and clarity—with features like secure virtual appointments powered by the Zoom API and AI-powered suggestions for personalized health articles based on each patient’s medical history.",
    tech: ["React","NodeJS", "Express", "PostgreSQL", "React DatePicker API", "Zoom API", "Web Scraping" ],
    github: "https://github.com/bushrapatel28/DrSmart",
    image: "/drsmart.png",
  },
  {
    title: "To-Do List App",
    description:
      "This AI-powered task manager streamlines productivity by automatically categorizing to-do items using the OpenAI API. Users can easily create, edit, and update task statuses in a smooth, intuitive interface. Each task’s category can also be manually changed, giving users full control and flexibility over how their tasks are organized.",
    tech: ["NodeJS", "Express", "JQuery", "Axios", "OpenAI API", "PostgreSQL"],
    github: "https://github.com/Fakeha-38/smart_todo_list",
    image: "/todolist.png",
  },
  {
    title: "Jungle",
    description:
      "An e-commerce application featuring product listings, a shopping cart, and a secure checkout flow with Stripe integration. Users can browse items, add them to their cart, and receive order confirmation via email upon successful purchase.",
    tech: ["Ruby on Rails", "PostgreSQL", "Stripe API", "Bootstrap"],
    github: "https://github.com/Fakeha-38/jungle-rails",
    image: "/jungle.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 border-b border-teal-400 inline-block">
          Projects
        </h2>
        <ul className="space-y-24">
          {projects.map((project, idx) => (
            <li key={idx} className="group">
              <div className="grid md:grid-cols-12 gap-8 items-center relative max-w-7xl mx-auto">
                {/* Project Image */}
                
                <div className="md:col-span-7 relative z-10 aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-main opacity-90 hover:opacity-40 transition-opacity duration-500 z-20 rounded-md"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md shadow-lg w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="md:col-span-7 md:col-start-6 absolute z-20 text-right px-4 md:px-0">
                  <p className="text-teal-400 text-sm mb-2">Featured Project</p>
                  <h3 className="text-2xl font-semibold text-white mb-4 hover:text-teal-400 cursor-default">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-start bg-[#0f172a] p-6 rounded-md shadow-lg cursor-default">{project.description}</p>

                  <ul className="flex flex-wrap gap-3 mb-4 text-sm text-gray-400 justify-end">
                    {project.tech.map((t, i) => (
                      <li key={i} className="hover:text-teal-400 cursor-default">{t}</li>
                    ))}
                  </ul>

                  <div className="flex gap-4 justify-end">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="hover:text-teal-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" width="22px" height="22px" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-hover">
                        <title>GitHub</title>
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}