import { useContext } from "react";
import { ThemeContext } from "../context/Theme";

function Hero() {
  const { theme } = useContext(ThemeContext);

  const commonClasses = "animate-fadeIn text-sm sm:text-md md:text-lg font-Roboto";
  const textClass = theme === "light" ? "text-black" : "text-slate-200";
  const pClasses = `${commonClasses} text-center break-words ${textClass}`;
  const sClasses = `${commonClasses} text-left break-words ${textClass}`;
  const spanClasses = `${commonClasses} text-center break-words ${theme === "light" ? "" : "text-slate-200"}`;

  return (
    <div className="animate-fadeIn -mt-16 sm:mt-0 p-10 pb-0 flex justify-center items-center align-middle">
      <div className="animate-fadeIn grid grid-cols-2 grid-rows-2 items-center justify-center w-full h-[40rem] sm:w-2/3">
        <img
          className="justify-self-center col-start-1 col-end-2 row-start-1 row-end-2 w-64 animate-fadeIn"
          src="./2.png"
          alt="Desk"
        />
        
        <p className={`${pClasses} col-start-2 col-end-3 row-start-1 row-end-2 w-74`}>
          Hello! I'm Kiana Pz.<br />
          <span>I'm currently pursuing my graduate studies and working as a research assistant at the University of Windsor.</span><br />
          <span>With a strong background in development, I've gained experience as a full-stack developer.</span>
        </p>

        <div className="col-start-1 col-end-3 row-start-2">
          <p className={`${sClasses} -mt-16 sm:mt-0`}>
            <span className={sClasses}>Skills:</span>
          </p>
          <ol className="pl-6">
            <li>
              <p className={sClasses}>
                <span className={spanClasses}>Programming Languages:</span>
                <br />C#, Python, JavaScript, TypeScript;
              </p>
            </li>
            <li>
              <p className={sClasses}>
                <span className={spanClasses}>Web Development:</span>
                <br />HTML, CSS, ASP.NET, React, Vue.js, jQuery, Nuxt.js;
              </p>
            </li>
            <li>
              <p className={sClasses}>
                <span className={spanClasses}>Frameworks and Libraries:</span>
                <br />.NET, Entity Framework, Dapper;
              </p>
            </li>
            <li>
              <p className={sClasses}>
                <span className={spanClasses}>Design Patterns and Architectural Concepts:</span>
                <br />CQRS (Command Query Responsibility Segregation), Mediator Pattern, MVC (Model-View-Controller);
              </p>
            </li>
            <li>
              <p className={sClasses}>
                <span className={spanClasses}>API Development:</span>
                <br />RESTful API Development
              </p>
            </li>
            <li>
              <p className={sClasses}>
                <span className={sClasses}>Other:</span>
                <br />SQL, Git;
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
