import { ProjectCard } from "../components/ProjectCard";
import Ilrass1 from "../assets/ilrass/ilrass_1.png"
import Ilrass2 from "../assets/ilrass/ilrass_2.png"
import Ilrass3 from "../assets/ilrass/ilrass_3.png"
import Ilrass4 from "../assets/ilrass/ilrass_4.png"
import Ilrass5 from "../assets/ilrass/ilrass_5.png"
import RAFMES1 from "../assets/rafmes/RAFMES-1.png"
import RAFMES2 from "../assets/rafmes/RAFMES-2.png"
import LMS1 from "../assets/lms/lms-1.png"
import LMS2 from "../assets/lms/lms-2.png"
import LMS3 from "../assets/lms/lms-3.png"
import LMS4 from "../assets/lms/lms-4.png"
import LMS5 from "../assets/lms/lms-5.png"
import LMS6 from "../assets/lms/lms-6.png"
import MSM1 from "../assets/msm/MSM-1.png"

export function ProjectsPage() {
    const projects = [
        {
            name: "3M MotoShopManager (in development)",
            images: [MSM1],
            techStack: [
                "React",
                "ASP.NET Core",
                "MS SQL Server",
                "Tailwind CSS",
                "shadcn/ui"
            ],
            descriptions: [
                "Currently digitizing retail operations of a motorshop accessories and repair show by building a decoupled full-stack web application using React and ASP.NET Web API. "
            ]
        },
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
            name: "Integrated Learner Records and Services System for San Jose City National High School - SHS",
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
        {
            name: "Library Management System",
            images: [LMS1, LMS2, LMS3, LMS4, LMS5, LMS6],
            techStack: [
                "Laravel",
                "Livewire",
                "TailwindCSS",
                "MySQL",
            ],
            descriptions: [
                "Maintain data integrity and prevent transaction errors for out-of-stock books by developing a full-stack library management system featuring real-time catalog and inventory synchronization",
                "Notify users of borrow approvals and return deadlines by integrating an automated email system"
            ]
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <h2 className="text-2xl md:text-3xl"> projects: </h2>
            </div>
            <ProjectCard projects={projects} />
        </div>
    );
}