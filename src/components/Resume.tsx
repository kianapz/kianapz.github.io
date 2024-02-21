import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
import React from "react";
import * as io from "react-icons/io";

const pLight = "font-Roboto text-sm sm:text-md text-slate-700  ";
const pDark = "font-Roboto text-sm sm:text-md text-slate-200  ";
const titleLight = "text-lg sm:text-xl text-slate-900 font-Roboto";
const titleDark = "text-lg sm:text-xl text-slate-50 font-Roboto";
const italicPLight = "font-Roboto-light text-xs sm:texs-sm text-slate-700";
const italicPDark = "font-Roboto-light text-xs sm:texs-sm text-slate-200";
const hrLight = "my-1 border-slate-900 ";
const hrDark = "my-1 border-slate-200";
const flexCol = "flex flex-col align-middle justify-center";
const flexRow = "flex flex-row align-middle list-disc";
const flexRowBetween = "flex flex-row align-middle justify-between list-disc";
const listDiscLight = "w-1 h-1 mt-2 mr-2 rounded-full bg-gray-500";
const listDiscDark = "w-1 h-1 mt-2 mr-2 rounded-full bg-slate-50";

interface IInlineDescription {
  theme: string;
  title: string;
  content: string;
}

interface IEducation {
  theme: string;
  educationCenter: string;
  educationTitle: string;
  educationLocation: string;
  educationDurationPeriod: string;
}
interface ICvDescription {
  title: string;
  theme: string;
}

interface IJobDescription {
  theme: string;
  jobCompany: string;
  jobTitle: string;
  jobLocation: string;
  jobTimeInterval: string;
}

interface IParagraph {
  theme: string;
  content: string | null | undefined;
}

function InlineDescription(props: IInlineDescription) {
  return (
    <div className={flexRow + " gap-x-2"}>
      <span
        className={props.theme === "light" ? listDiscLight : listDiscDark}
      ></span>
      <p
        className={
          props.theme === "light"
            ? pLight.replace("text-slate-700", "text-slate-900")
            : pDark.replace("text-slate-200", "text-slate-50")
        }
      >
        {props.title}
      </p>
      <p className={props.theme === "light" ? pLight : pDark}>
        {"  " + props.content}
      </p>
    </div>
  );
}

function Education(props: IEducation) {
  return (
    <ul>
      <li className={flexRowBetween}>
        <div className={flexCol + " py-2"}>
          <p
            className={
              props.theme === "light"
                ? pLight.replace("text-slate-700", "text-slate-900")
                : pDark.replace("text-slate-200", "text-slate-50")
            }
          >
            {props.educationCenter}
          </p>
          <p className={props.theme === "light" ? italicPLight : italicPDark}>
            {props.educationTitle}
          </p>
        </div>
        <div className={flexCol}>
          <p className={props.theme === "light" ? pLight : pDark}>
            {props.educationLocation}
          </p>
          <p className={props.theme === "light" ? italicPLight : italicPDark}>
            {props.educationDurationPeriod}
          </p>
        </div>
      </li>
    </ul>
  );
}

function CvTitle(props: ICvDescription) {
  return (
    <React.Fragment>
      <h2 className={props.theme === "light" ? titleLight : titleDark}>
        {props.title}
      </h2>
      <hr className={props.theme === "light" ? hrLight : hrDark} />
    </React.Fragment>
  );
}

function JobDescription(props: IJobDescription) {
  return (
    <ul>
      <li className={flexRowBetween}>
        <div className={flexCol + " py-2"}>
          <p
            className={
              props.theme === "light"
                ? pLight.replace("text-slate-700", "text-slate-900")
                : pDark.replace("text-slate-200", "text-slate-50")
            }
          >
            {props.jobCompany}
          </p>
          <p className={props.theme === "light" ? italicPLight : italicPDark}>
            {props.jobTitle}
          </p>
        </div>
        <div className={flexCol}>
          <p className={props.theme === "light" ? pLight : pDark}>
            {props.jobLocation}
          </p>
          <p className={props.theme === "light" ? italicPLight : italicPDark}>
            {props.jobTimeInterval}
          </p>
        </div>
      </li>
    </ul>
  );
}
function Paragraph(props: IParagraph) {
  return (
    <li className="flex items-start list-inside py-1 pl-6 sm:pl-12">
      <span
        className={props.theme === "light" ? listDiscLight : listDiscDark}
      ></span>
      <p className={(props.theme === "light" ? pLight : pDark) + " w-4/5"}>
        {props.content}
      </p>
    </li>
  );
}

function Resume() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="p-4 sm:px-24">
      <div className="flex justify-between items-center align-middle">
        <div className="flex flex-col">
          <h1
            className={
              theme === "light"
                ? "text-xl text-slate-800 font-Roboto font-bold"
                : "text-xl text-slate-200 font-Roboto font-bold"
            }
          >
            Kiana Lesan Pezeshki
          </h1>
          <a
            className={
              theme === "light"
                ? "flex flex-row gap-x-2 text-md text-slate-800 font-Roboto-light"
                : "flex flex-row gap-x-2 text-md text-slate-200 font-Roboto-light"
            }
            href="./Kiana-Pz-CV.pdf"
            download
          >
            Download pdf resume
            <io.IoMdDownload
              className={"mt-1 " + (theme === "light" ? "" : "text-slate-200")}
            ></io.IoMdDownload>
          </a>
        </div>

        <div className="flex flex-col">
          <a
            className={theme === "light" ? pLight : pDark}
            href="mailto:kiana.pezeshki@gmail.com"
          >
            kiana.pezeshki@gmail.com
          </a>

          {/* <p className={theme === "light" ? pLight : pDark}>
            Mobile: to be added
          </p> */}
        </div>
      </div>
      <CvTitle theme={theme} title="Experience"></CvTitle>

      <section className="pt-4">
        <JobDescription
          theme={theme}
          jobCompany="Rira Co"
          jobTitle="Full Stack developer"
          jobLocation="Tehran, Iran"
          jobTimeInterval="Sep 2022 - Jan 2024"
        />

        <Paragraph
          content="Started as a back-end developer but continued my journy to a full-stack developer."
          theme={theme}
        />

        <Paragraph
          content="Assisted in designing, developing, and maintaining various web applications including LMS, Moocs, HRIS mostly as a
          Full-Stack developer."
          theme={theme}
        />

        <Paragraph
          content="Automated the update process"
          theme={theme}
        />
      </section>

      <section className="pt-4">
        <JobDescription
          theme={theme}
          jobCompany="Freelance"
          jobTitle="Freelance Website Developer and Designer"
          jobLocation=""
          jobTimeInterval=" Sep. 2019 - Present"
        />
        <Paragraph
          content="Designed, developed, and maintained various websites."
          theme={theme}
        />

        <Paragraph
          content="Created and implemented SEO strategies, set and achieved KPIs."
          theme={theme}
        />

</section>
      <section className="py-2">
        <CvTitle title="Education" theme={theme}></CvTitle>
        <Education
          theme={theme}
          educationCenter="University of Windsot"
          educationTitle="Master of Computer Science"
          educationLocation="Ontario, Canada"
          educationDurationPeriod="May 2024 - present"
        />

      </section>
      <section className="py-2">
        <CvTitle title="Programming Skills" theme={theme} />
        <InlineDescription
          theme={theme}
          title="Languages:"
          content=" c# ,Python, JavaScript, TypeScript, SQL ."
        />
        <InlineDescription
          theme={theme}
          title="Frameworks:"
          content=".NET, Entity Framework, Dapper, ReactJs, Vue.js, Matplotlib/Seaborn, Scikit-learn, Tableau."
        />
      </section>
    </div>
  );
}

export default Resume;
