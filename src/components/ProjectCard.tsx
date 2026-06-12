import { useState } from "react";
import { TechCapsule } from "./TechCapsule";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

type Project = {
    name: string;
    images: string[];
    techStack: string[];
    descriptions: string[];
}

type ProjectCardProps = {
    projects: Project[];
}

export function ProjectCard({ projects }: ProjectCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
                <ProjectItem key={index} project={project} />
            ))}
        </div>
    );
}

function ProjectItem({ project }: { project: Project }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((curr) => (curr === 0 ? project.images.length - 1 : curr - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((curr) => (curr === project.images.length - 1 ? 0 : curr + 1));
    };

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className="flex flex-col gap-4 border border-zinc-800 rounded-md p-4">
            {/* Image Slider Section */}
            <div className="relative aspect-video rounded-md bg-zinc-800 group overflow-hidden">
                <img
                    src={project.images[currentIndex]}
                    alt={project.name}
                    className="w-full h-full object-contain cursor-zoom-in"
                    onClick={toggleModal}
                />

                {project.images.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-900/60 text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity border border-zinc-800"
                        >
                            <FaChevronLeft size={12} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-900/60 text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity border border-zinc-800"
                        >
                            <FaChevronRight size={12} />
                        </button>
                    </>
                )}
            </div>

            {/* Image Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12"
                    onClick={toggleModal}
                >
                    <button
                        className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors z-60"
                        onClick={toggleModal}
                    >
                        <FaTimes size={24} />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        {project.images.length > 1 && (
                            <>
                                <button onClick={handlePrev} className="absolute left-0 md:-left-12 p-4 text-zinc-500 hover:text-white transition-colors">
                                    <FaChevronLeft size={32} />
                                </button>
                                <button onClick={handleNext} className="absolute right-0 md:-right-12 p-4 text-zinc-500 hover:text-white transition-colors">
                                    <FaChevronRight size={32} />
                                </button>
                            </>
                        )}

                        <img
                            src={project.images[currentIndex]}
                            alt={project.name}
                            className="max-w-full max-h-full object-contain shadow-2xl select-none"
                        />
                    </div>
                </div>
            )}

            {/* Info Section */}
            <div className="flex flex-col py-1">
                <h3 className="text-lg font-semibold text-zinc-100 mb-3">{project.name}</h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    <TechCapsule names={project.techStack} />
                </div>

                <ul className="list-disc ml-4 text-sm text-zinc-300 space-y-2">
                    {project.descriptions.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
