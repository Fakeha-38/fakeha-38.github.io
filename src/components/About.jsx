const About = () => {
  return(
    <section id="about" className="bg-main text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-8 border-b border-teal-400 inline-block">
            About Me
          </h2>
          <p className="mb-4">
            My journey into web development began unexpectedly—after earning a degree in mechatronics engineering, I started working at a software house and was quickly captivated by the creative potential of building for the web. I loved the fusion of design, technology, and the power of websites in telling brand stories and driving engagement.
          </p>
          <p className="mb-4">
            Since then, I’ve taught myself a wide range of technologies and frameworks. From React and Tailwind CSS to Ruby on Rails and marketing integrations, I’ve worked across stacks and industries, crafting everything from lead generation sites to internal tools.
          </p>
          <p className="mb-4">
            Outside of work, I’m either playing pickleball, training for tennis (I’m working on that backhand!), or capturing moments with my camera. I’m endlessly fascinated by how visuals and storytelling drive connection, especially through social media and digital marketing—a world I’ve had the chance to work in closely at several agencies.
          </p>
          <p className="mb-4">
            I’m excited to keep building web apps that solve real problems, streamline processes, and create delightful experiences.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative group w-full max-w-sm aspect-square">
            <div className="absolute top-[14px] left-[14px] w-full h-full border-2 border-teal-400 rounded-md pointer-events-none group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            <div className="relative w-full h-full rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-teal-200 opacity-80 group-hover:opacity-0 transition-opacity duration-500 z-20 rounded-md"></div>

              <img
                src="/fakeha.jpeg"
                alt="Fakeha Iftikhar"
                className="w-full h-full object-cover rounded-md relative z-1 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;