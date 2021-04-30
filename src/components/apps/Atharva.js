import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutAtharva extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about Atharva" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Atharva' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Atharva' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Atharva' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Atharva's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen ubuntu-font">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutAtharva;

export const displayAboutAtharva = () => {
    return <AboutAtharva />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Atharva Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Atharva Gupta</span> ,</div>
                <div className="font-normal ml-1">I'm an <span className="text-pink-600 font-bold">aspiring Software Engineer!</span></div>
            </div>
            <div className=" my-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a 2<sup>nd</sup> year <span className=" font-medium">computer Science student</span> pursuing my B.tech degree from <a href="https://pes.edu/" rel="noreferrer" target="_blank">PES University, Bengaluru</a>.</li>
                <li className=" mt-3 list-building"> I enjoy finding and solving practical problems.</li>
                <li className=" mt-3 list-time"> When I am not finding solutions to problems, I like to spend my time exchanging ideas with others, playing minecraft or watching <a href="https://www.youtube.com/c/LinusTechTips/channels" target="_blank" rel="noreferrer"> LinusMediaGroup's or <a href="https://www.youtube.com/channel/UCBa659QWEk1AI4Tg--mrJ2A" target="_blank" rel="noreferrer"></a> Tom Scott's videos.</a></li>
                <li className=" mt-3 list-star"> I also have interest in Finance, Entrepreneurship & Cloud based technologies!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        PES University- PESU
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2019 - 2023</div>
                    <div className=" text-sm md:text-base">Computer Science & Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1"> &nbsp;CGPA: 7.6/10 </div>
                </li>
            </ul>
        </>
    )
}
//https://javascript.plainenglish.io/how-to-make-custom-language-badges-for-your-profile-using-shields-io-d2aeaf016b6b
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & different technologies.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">Cloud based technologies, IoT & Machine Learning!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%F7DF1E?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="Atharva javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="Atharva c++" />
                        <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="Atharva python" />
                        <img className="m-1" src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white" alt="Atharva Java" />
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%E34F26?style=flat&logo=html5&logoColor=ffffff" alt="Atharva HTML" /></a>
                        <img src="https://img.shields.io/badge/-GoogleCloudPlatform-FF1493?style=flat&logo=google-cloud&logoColor=ffffff" alt="Atharva GCP Cloud" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/-C-A8B9CC?style=flat&logo=C&logoColor=000000" alt="Atharva C" />
                        <img src="https://img.shields.io/badge/-AmazonWebServices-232F3E?style=flat&logo=amazon-aws&logoColor=ffffff" alt="Atharva AWS" className="m-1" />
                        <img src="https://img.shields.io/badge/-npm-CB3837?style=flat&logo=npm&logoColor=ffffff" alt="Atharva NPM" className="m-1" />
                        <img src="https://img.shields.io/badge/-CSS3-572B6?style=flat&logo=Css3&logoColor=ffffff" alt="Atharva CSS3" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/-ScikitLearn-F7931E?style=flat&logo=scikit-learn&logoColor=ffffff" alt="Atharva Scikit- Learn" />
                        <img className="m-1" src="https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongoDB&logoColor=ffffff" alt="Atharva MongoDB" />
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Atharva tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="Atharva node.js" className="m-1" />
                        <img src="https://img.shields.io/badge/-AngularJS-E23237?style=flat&logo=angularJS&logoColor=ffffff" alt="Atharva Angular.js" className="m-1" />
                        <img className="m-1" src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat" alt="Atharva react.js" />
                        <img src="https://img.shields.io/badge/-Pandas-150458?style=flat&logo=Pandas&logoColor=ffffff" alt="Atharva Pandas" className="m-1" />
                        <img src="https://img.shields.io/badge/-Tensorflow-FF6F00?style=flat&logo=Tensorflow&logoColor=ffffff" alt="Atharva Tensorflow" className="m-1" />
                        <img src="https://img.shields.io/badge/-Keras-D00000?style=flat&logo=Keras&logoColor=ffffff" alt="Atharva Keras" className="m-1" />
                        <img src="https://img.shields.io/badge/-NumPY-013243?style=flat&logo=Numpy&logoColor=ffffff" alt="Atharva NumPY" className="m-1" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="Atharva linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}



function Projects() {
    const project_list = [
        {
            name: "PocDoc- Medics at home",
            date: "Oct 2020",
            //link: "",
            description: [
                "A Medical board which allows Medics to track patients with disabilities or of age or living in remote areas over the internet",
            ],
            domains: ["Python", "MongoDB", "Machine Learning"]
        },
        {
            name: "Expense tracker",
            date: "Dec 2020",
            //link: "",
            description: [
                "A Web Development based project using MERN(MongoDB, Express.js, React.js and node.js) stack to help you manage and track your expense report.",
            ],
            domains: ["JavaScript", "MongoDB", "Express.js", "React.js", "Node.js", "NPM"]
        },
        {
            name: "Password and Message Encryption Software",
            date: "Oct 2019",
            //link: "",
            description: [
                "Implemented RSA encryption, a public key crypto-system to encrypt and decrypt text messages",
            ],
            domains: ["C++"]
        },
        {
            name: "ALTEC Virtual Assistant",
            date: "May 2020",
            //link: "",
            description: [
                "Developed a virtual assistant that uses simplified natural language processing to interpret human interaction, like text using C, Java and python",
            ],
            domains: ["Java", "C", "Python"]
        }
    ];

    const tag_colors = {
        "JavaScript": "yellow-300",
        "Python": "green-200",
        "MongoDB": "red-600",
        "Machine Learning": "purple-500",
        "Express.js": "gray-400",
        "React.js": "blue-400",
        "Node.js": "green-500",
        "html5": "pink-600",
        "C++": "purple-500",
        "Java": "pink-400",
        "C": "yellow-600",
        "NPM": "green-600",
        //"": "gray-300",
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className=" text-base md:text-lg">{project.name.toLowerCase()}</div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Atharva-Gupta-Resume.pdf" title="Atharva Gupta resume" frameBorder="0"></iframe>
    )
}