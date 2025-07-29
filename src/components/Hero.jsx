const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center sm:items-start text-center sm:text-left text-white px-6">
      <div className="w-full max-w-3xl">
      <p className="text-sm text-teal-400">
      Hey there,
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-400">
          I'm <span className="text-white">Fakeha!</span>
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-400">
          Nice to meet you
        </h1>
        <p className="text-xs text-gray-100">
          Turning ideas into seamless digital experiences with clean code and modern design.
        </p>
        <p className="text-lg text-gray-100 my-2">
          Based in Toronto, I'm a full-stack developer with a passion for building scalable web applications using React, Node.js, and modern frameworks.
        </p>
        <p className="text-lg text-gray-100 my-2 mb-6">
          Actively seeking opportunities in Web and Software Development.
        </p>
        <a href="#projects" className="text-xl btn-underline">
          View My Work
        </a>
      </div>      
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <section className="hero">
//       <h1>Hey there, I'm Fakeha!</h1>
//       <h1>Nice to meet you</h1>
//       <p>Turning ideas into seamless digital experiences with clean code and modern design.</p>
//       <p>Based in Toronto, I'm a full-stack developer with a passion for building scalable web applications using React, Node.js, and modern frameworks.</p>
//       <p>Actively seeking opprtunities  in Web and Software Development</p>
//     </section>
//   );
// };

// export default Hero;

// const Hero = () => {
//   return (
//     <section className=" text-white h-screen flex flex-col justify-center px-6 space-y-4">
//       <div className="w-full max-w-4xl text-center sm:text-left mx-auto">
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold">
//           Nice to meet you!
//         </h1>
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold underline decoration-blue-500">
//           I'm Fakeha Iftikhar.
//         </h1>
//         <p className="text-lg max-w-3xl text-gray-300 mt-4 mx-auto sm:mx-0">
//           Bridging creativity and technology to deliver exceptional web experiences. Based in Toronto, Canada, I'm a full-stack web/software developer with a passion for building scalable web applications using React and Node.js. Actively seeking opportunities in Web and Software Development.
//         </p>
//         <a
//           href="#contact"
//           className="mt-4 text-blue-400 underline text-lg font-medium inline-block"
//         >
//           Contact Me
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
