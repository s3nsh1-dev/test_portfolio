const Navbar = () => {
  return (
    <div className="bg-black flex justify-between text-white p-1">
      <div className="flex gap-1">
        <a href="#contact">
          <img
            className="cursor-pointer"
            width="48"
            height="48"
            src="https://img.icons8.com/doodle/48/new-post.png"
            alt="new-post"
          />
        </a>
        <a href="https://github.com/s3nsh1-dev">
          <img
            className="cursor-pointer"
            width="50"
            height="50"
            src="https://img.icons8.com/plasticine/100/github.png"
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/pandey228/">
          <img
            className="cursor-pointer"
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://stackoverflow.com
        "
        >
          <img
            className="cursor-pointer"
            width="48"
            height="48"
            src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-stack-overflow-web-portal-for-professional-and-enthusiast-programmers-logo-filled-tal-revivo.png"
            alt="external-stack-overflow-web-portal-for-professional-and-enthusiast-programmers-logo-filled-tal-revivo"
          />
        </a>
        <a href="https://www.figma.com/">
          <img
            className="hover:cursor-pointer"
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/figma.png"
            alt="figma"
          />
        </a>
      </div>
      <div className="flex text-center gap-4 items-center mr-10">
        <a href="https://github.com/s3nsh1-dev/test_portfolio">
          <button className="hover:cursor-pointer">Projects</button>
        </a>
        <a href="#contact">
          <button className="hover:cursor-pointer">Contact Me</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
