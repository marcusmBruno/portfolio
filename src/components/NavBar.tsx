import { Link } from "react-router";

export function NavBar({ pathName }: { pathName: string }) {
    return (
        <header className="my-5">
            <ul className="flex gap-6 list-none text-zinc-400 font-medium">
                <li className={pathName === '/' ? "text-zinc-100" : undefined}>
                    <Link to="/">
                        home
                    </Link>
                </li>
                <li className={pathName === '/projects' ? "text-zinc-100" : undefined}>
                    <Link to="projects">
                        projects
                    </Link>
                </li>
                <li className={pathName === '/about-me' ? "text-zinc-100" : undefined}>
                    <Link to="about-me">
                        about me
                    </Link>
                </li>
            </ul>
        </header >
    );
}