import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
    return (
        <nav className="group w-[300px] hover:w-[500px] transition-[width] duration-300 ease-out flex items-center p-5 fixed top-5 z-20 bg-secondary rounded-[50px] text-white">
            <div className="flex items-center gap-5">
                <Link to="/" className="group flex items-center gap-2" aria-label="Home" title="Home">
                    <HomeIcon className="cursor-pointer"/>
                    <span className="pointer-events-none overflow-hidden max-w-0 opacity-0 translate-x-[-8px] whitespace-nowrap text-sm transition-all duration-300 ease-out group-hover:max-w-[96px] group-hover:opacity-100 group-hover:translate-x-0">Home</span>
                </Link>
                <Link to="#experience" className="group flex items-center gap-2" aria-label="Experience" title="Experience">
                    <WorkHistoryIcon className="cursor-pointer"/>
                    <span className="pointer-events-none overflow-hidden max-w-0 opacity-0 translate-x-[-8px] whitespace-nowrap text-sm transition-all duration-300 ease-out group-hover:max-w-[120px] group-hover:opacity-100 group-hover:translate-x-0">Experience</span>
                </Link>
                <Link to="#projects" className="group flex items-center gap-2" aria-label="Projects" title="Projects">
                    <CodeIcon className="cursor-pointer"/>
                    <span className="pointer-events-none overflow-hidden max-w-0 opacity-0 translate-x-[-8px] whitespace-nowrap text-sm transition-all duration-300 ease-out group-hover:max-w-[120px] group-hover:opacity-100 group-hover:translate-x-0">Projects</span>
                </Link>
                <Link to="https://github.com/al-zivkovic" className="group flex items-center gap-2" aria-label="GitHub" title="GitHub">
                    <GitHubIcon className="cursor-pointer"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;