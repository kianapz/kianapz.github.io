import { ThemeContext } from "../context/Theme";
import { useContext } from "react";

interface IProject {
  title: string;
  theme: string;
  paragraph: string;
  link: string;
}

function Project(props: IProject): JSX.Element {
  const pLight = "font-Roboto text-md sm:text-lg text-slate-700  ";
  const pDark = "font-Roboto text-md sm:text-lg text-slate-200  ";
  const aLight =
    "relative inline-block font-Roboto-light text-md sm:text-lg text-slate-900 group ";
  const aDark =
    "relative inline-block font-Roboto-light text-md sm:text-lg text-slate-50 group ";
  const h3Light = "font-Roboto text-2xl text-slate-900  ";
  const h3Dark = "font-Roboto text-2xl text-slate-50 ";

  const linkHoverLight =
    "absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-slate-400 transform origin-right scale-x-0 duration-500 ease-out group-hover:scale-x-100 ";

  const linkHoverDark =
    "absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-slate-200 transform origin-right scale-x-0  duration-500 ease-out group-hover:scale-x-100";

  return (
    <div className="break-all w-full grid gap-y-3">
      <h3 className={props.theme === "light" ? h3Light : h3Dark}>
        {props.title}
      </h3>
      <p className={props.theme === "light" ? pLight : pDark}>
        {props.paragraph}
      </p>
      <a target="_blank" href={props.link}>
        <span className={props.theme === "light" ? aLight : aDark}>
          {props.link}
          <span
            className={props.theme === "light" ? linkHoverLight : linkHoverDark}
          ></span>
        </span>
      </a>
    </div>
  );
}

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="grid gap-y-8 auto-cols-fr sm:px-32 px-12 py-6">
      <Project
        theme={theme}
        title="Leadership 360 | Multilingual Assessment Platform"
        paragraph="Worked as a full-stack developer from project initiation with cross-functional team, contributing to a collaborative and agile development environment.
      back-end technologies: .NET Core, CQRS ,Mediator pattern, Dapper and SQL
        front-end technologies: Vue.js, Nuxt.js, JavaScript and TypeScript"
        link="https://assessment.rirais.com/"
      />

      <Project
        theme={theme}
        title="Navid | Multilingual LMS"
        paragraph="Deployed it on various servers. Maintained and Added new features.
        Technologies : ASP.NET MVC and Vue.js"
        link="https://lms.rirais.com/"
      />

      <Project
        theme={theme}
        title="Rira Co Website | Wordpress "
        paragraph=" Designed and developed a multilingual website, implementing SEO strategies.
        • Conducted keyword research and applied on-page SEO best practices.
        • Monitored analytics to track website performance and drive improvements.
        • Established and achieved Key Performance Indicators (KPIs).
        • Collaborated closely with the marketing team."
        link="https://rirais.com"
      />

      <Project
        theme={theme}
        title="Gmine Co Webiste | Wordpress "
        paragraph="Designed and developed a multilingual website for Ghoshouni Co"
        link="https://gmineco.ir"
      />
<Project
        theme={theme}
        title="Parizmine Co Webiste | Wordpress "
        paragraph=""
        link="https://parizmine.com"
      />
    </div>
  );
}

export default Projects;
