import React from "react";
import Progress from "../Progress";
import geers from "../assets/geers.png";

export default function Skills() {
  return (
    <div id="skills" className="">
      <div className="text-myteal text-3xl md:text-5xl mt-8 md:mt-16 font-medium">
        My Skills
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
        <div className="textbg">
          <div className="skills-list mt-8">
            <h3 className=" text-myteal text-xl md:text-2xl font-semibold">
              Programming Languages
            </h3>
            <ul className="list-disc pl-4 text-white">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>Sass/LESS</li>
            </ul>
          </div>

          <div className="skills-list mt-8">
            <h3 className=" text-myteal text-xl md:text-2xl font-semibold">
              Frameworks and Libraries
            </h3>
            <ul className="list-disc pl-4 text-white">
              <li>React.js</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>Material-UI</li>
            </ul>
          </div>
        </div>
        <div className="textbg">
          <div className="skills-list mt-8">
            <h3 className=" text-myteal text-xl md:text-2xl font-semibold">
              Tools and Technologies
            </h3>
            <ul className="list-disc pl-4 text-white">
              <li>Git/GitHub</li>
              <li>Webpack</li>
              <li>Responsive Design</li>
              <li>Web Performance Optimization</li>
              <li>Accessibility Standards (WCAG, ARIA)</li>
            </ul>
          </div>

          <div className="skills-list mt-8">
            <h3 className=" text-myteal text-xl md:text-2xl font-semibold">Soft Skills</h3>
            <ul className="list-disc pl-4 text-white">
              <li>Problem-solving</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
