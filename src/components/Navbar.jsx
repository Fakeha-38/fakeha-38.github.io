const Navbar = () => {
  return (
    <nav className="fixed max-w-full w-full mx-auto text-white shadow-md z-50 bg-main">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" className="block">
        <svg viewBox="0 0 500 500" width="40" height="40" fill="#2dd4bf">
          <path d="M472.4 396.6l-33.6 33.5-33.5-33.5 33.5-33.6z" />
          <path d="M27.6 431V69.5h221.6v40.8h-177v115.6h164.3v39.7H72.2V431zm286.7 0V69.5h44.5V431z" />
        </svg>
      </a>
        <div className="flex space-x-6">
          <a href="#about" className="btn-underline">About</a>
          <a href="#skills" className="btn-underline">Skills</a>
          <a href="#projects" className="btn-underline">Projects</a>
          <a href="#contact" className="btn-underline">Contact</a>
          <a href="https://github.com/Fakeha-38/">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" width="22px" height="22px" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"   className="icon-hover">
            <title>GitHub</title>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/fakeha38/">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"  width="22px" height="22px" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"   className="icon-hover">
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
