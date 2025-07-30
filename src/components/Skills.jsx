const Skills = () => {
  return (
  <section id="skills" className="bg-main text-white py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 border-b border-teal-400 inline-block">Skills</h2>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {[
          { src: "/icons/javascript.svg", alt: "JavaScript" },
          { src: "/icons/typescript.svg", alt: "TypeScript" },
          { src: "/icons/ruby.svg", alt: "Ruby" },
          { src: "/icons/react.svg", alt: "React" },
          { src: "/icons/nodejs.svg", alt: "Node.js" },
          { src: "/icons/express.svg", alt: "Express" },
          { src: "/icons/php.svg", alt: "Php" },
          { src: "/icons/html.svg", alt: "HTML5" },
          { src: "/icons/css.svg", alt: "CSS" },
          { src: "/icons/jquery.svg", alt: "Jquery" },
          { src: "/icons/tailwind.svg", alt: "Tailwind CSS" },
          { src: "/icons/rails.svg", alt: "Rails" },
          { src: "/icons/redux.svg", alt: "Redux" },
          { src: "/icons/ejs.svg", alt: "Ejs" },
          { src: "/icons/redux.svg", alt: "Redux" },
          { src: "/icons/postgres.svg", alt: "PostgreSQL" },
          { src: "/icons/mysql.svg", alt: "MySQL" },
          { src: "/icons/jest.svg", alt: "Jest" },
          { src: "/icons/cypress.svg", alt: "Cypress" },
          { src: "/icons/rspec.svg", alt: "Rspec" },
          { src: "/icons/mocha.svg", alt: "Mocha" },
          { src: "/icons/chai.svg", alt: "Chai" },
          { src: "/icons/git.svg", alt: "Git" },
          { src: "/icons/wordpress.svg", alt: "WordPress" },
          { src: "/icons/googleads.svg", alt: "Google Ads" },
          { src: "/icons/photoshop.svg", alt: "Photoshop" },
          // Add more icons as needed
        ].map(({ src, alt }) => (
          <div
            key={alt}
            className="w-1/6 md:w-fit transition-all duration-300 hover:scale-110"
          >
            <img
              src={src}
              alt={alt}
              width={75}
              height={75}
              loading="lazy"
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Skills;