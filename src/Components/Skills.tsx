import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
    return(
        <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
            <h1 className="heading">
                Education & <span className="text-yellow-400">Skills</span>
            </h1>
            <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
                <div>
                    <SkillsItem 
                        title="React Developer" 
                        year="20&& - 20&&" 
                        skill1="My skills include proficiency in JavaScript, React.js, HTML, CSS, and a strong understanding of component-based architecture, state management, and modern web development principles."
                    />
                    <SkillsItem 
                        title="Angular Developer" 
                        year="20&& - 20&&"
                        skill2="My skills include proficiency in TypeScript, Angular framework, HTML, CSS, and a strong understanding of reactive programming, component-based architecture, and frontend development best practices."
                    />
                    <SkillsLanguage skill1="HTML" skill2="CSS" skill3="Javascript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
                </div>
                <div>
                    <SkillsItem 
                        title="Node JS Developer" 
                        year="20&& - 20&&"
                        skill3="My skill set includes proficiency in JavaScript, Node.js, Express.js, MongoDB, and a deep understanding of asynchronous programming, RESTful APIs, and backend development paradigms."
                    />
                    <SkillsItem 
                        title="Next JS Developer" 
                        year="20&& - 20&&"
                        skill4="My skills include proficiency in JavaScript, Next.js framework, React, HTML, CSS, and a deep understanding of server-side rendering, routing, and state management within the Next.js ecosystem."
                    />
                    <SkillsLanguage skill1="React Js" skill2="Next Js" skill3="TypeScript" level1="w-[81%]" level2="w-[78%]" level3="w-[60%]"/>
                </div>
            </div>
        </div>
    )
}

export default Skills;