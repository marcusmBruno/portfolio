import { ImageSlider } from "../components/ImageSlider";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { DownloadButton } from "../components/DownloadButton";
import Ilrass1 from "../assets/ilrass/ilrass_1.png"
import Ilrass2 from "../assets/ilrass/ilrass_2.png"
import Ilrass3 from "../assets/ilrass/ilrass_3.png"
import Ilrass4 from "../assets/ilrass/ilrass_4.png"
import Ilrass5 from "../assets/ilrass/ilrass_5.png"
import RAFMES1 from "../assets/rafmes/RAFMES-1.png"
import RAFMES2 from "../assets/rafmes/RAFMES-2.png"
import { TechCapsule } from "../components/TechCapsule";
import { InfoCard } from "../components/InfoCard";
import { ProjectCard } from "../components/ProjectCard";
import { Link } from "react-router";

export function HomePage() {
    const images = [
        img1,
        img2,
        img3
    ];

    const languages = [
        "C#",
        "JavaScript",
        "TypeScript",
        "PHP",
        "Python",
        "Java"
    ];

    const frameworks = [
        "React",
        "ASP.NET Core",
        "Laravel",
        "Livewire",
        "Tailwind CSS",
        "Bootstrap",
        "React Router"
    ];

    const databases = [
        "MySQL",
        "SQL Server",
        "SQLite"
    ];

    const tools = [
        "Git", "GitHub", "VS Code", "Visual Studio", "Figma", "Hostinger"
    ];

    const education = {
        role: "Bachelor of Science in Information Technology",
        institution: "Central Luzon State University",
        date: "2022 - 2026",
        miniDesc: "GPA: 1.42 (Magna Cum Laude)"
    };

    const internship = {
        role: "Software Development Intern",
        institution: "Philippine Center for Postharvest Development and Mechanization",
        date: "Jan - April 2026",
        descriptions: [
            "Developed the mobile app for RAFMES, an existing nationwide system for agricultural and fishery machines, and owner registration."
        ]
    };

    const projects = [
        {
            name: "RAFMES Mobile App",
            images: [RAFMES1, RAFMES2],
            techStack: [
                ".NET MAUI",
                "ASP.NET Core",
                "MS SQL Server",
                "SQLite",
                "Scalar"
            ],
            descriptions: [
                "Scaled mobile app integration to manage 200K+ nationwide agricultural and machine registrations by developing secure ASP.NET Core RESTful APIs connected to an MS SQL Server database.",
                "Ensured 100% seamless field data collection in remote areas by engineering a .NET MAUI offline-first registration and QR authentication module with automated API synchronization."
            ]
        },
        {
            name: "Integrated Learner Records and Services System for San Jose City National High School - Senior High School",
            images: [Ilrass1, Ilrass2, Ilrass3, Ilrass4, Ilrass5],
            techStack: [
                "Laravel",
                "Livewire",
                "TailwindCSS",
                "MySQL",
            ],
            descriptions: [
                "Secured sensitive records for 2,000+ senior high students by developing and deploying a centralized student-support management system with RBAC on a Hostinger VPS using Laravel and Livewire",
                "Streamlined cross-office administrative workflows by designing integrated tracking modules for document requests, guidance cases, clinic logs, and client satisfaction metrics."
            ]
        },
    ];

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between gap-12 mb-4">
                <div className="flex flex-row items-center justify-center">
                    <ImageSlider images={images} />
                </div>
                <div className="md:w-2/3 flex flex-col gap-4">
                    <h1 className="text-3xl md:text-5xl">hi, I'm Marcus Bruno.</h1>
                    <p className="text-base md:text-md">a BSIT graduate aspiring to be a software engineer. </p>
                    <p className="text-base md:text-md">i design, build and deploy production-ready web and mobile applications, turning clean code into real-world solutions. </p>
                    <div className="flex gap-4 items-center mt-2">
                        <DownloadButton />
                        <a href="https://www.linkedin.com/in/marcus-bruno-7a285126a/" target="_blank" className="hover:text-zinc-600">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:marcusbruno615@gmail.com" target="_blank" className="hover:text-zinc-600">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 ">
                <h2 className="text-xl md:text-2xl"> education: </h2>
                <InfoCard info={education} />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl"> technical skills: </h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <h3 className="text-sm mb-2 font-semibold">Programming Languages</h3>
                        <div className="flex flex-wrap gap-2">
                            <TechCapsule names={languages} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm mb-2 font-semibold">Frameworks and Libraries</h3>
                        <div className="flex flex-wrap gap-2">
                            <TechCapsule names={frameworks} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm mb-2 font-semibold">Databases</h3>
                        <div className="flex flex-wrap gap-2">
                            <TechCapsule names={databases} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm mb-2 font-semibold">Tools and Platforms</h3>
                        <div className="flex flex-wrap gap-2">
                            <TechCapsule names={tools} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-xl md:text-2xl"> experience: </h2>
                <InfoCard info={internship} />
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <h2 className="text-xl md:text-2xl"> featured projects: </h2>
                    <Link to="/projects" className="flex gap-2 items-center text-zinc-500 hover:text-zinc-200">
                        <span> View All </span>
                        <FaArrowRight />
                    </Link>
                </div>
                <ProjectCard projects={projects} />
            </div>
        </div>
    );
}