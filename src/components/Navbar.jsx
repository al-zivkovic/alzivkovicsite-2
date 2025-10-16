import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <nav className="group w-[300px] hover:w-[500px] transition-[width] duration-300 ease-out flex items-center p-5 fixed top-5 z-20 bg-secondary rounded-[50px] text-white shadow-lg shadow-black/50">
            <div className="flex items-center gap-5">
                <Link to="#home" onClick={(e) => { e.preventDefault(); scrollToId('home'); }} className="group flex items-center gap-2" aria-label="Home" title="Home">
                    <HomeIcon className="cursor-pointer"/>
                    <span className="pointer-events-none overflow-hidden max-w-0 opacity-0 translate-x-[-8px] whitespace-nowrap text-sm transition-all duration-300 ease-out group-hover:max-w-[96px] group-hover:opacity-100 group-hover:translate-x-0">Home</span>
                </Link>
                <Link to="#experience" onClick={(e) => { e.preventDefault(); scrollToId('experience'); }} className="group flex items-center gap-2" aria-label="Experience" title="Experience">
                    <WorkHistoryIcon className="cursor-pointer"/>
                    <span className="pointer-events-none overflow-hidden max-w-0 opacity-0 translate-x-[-8px] whitespace-nowrap text-sm transition-all duration-300 ease-out group-hover:max-w-[120px] group-hover:opacity-100 group-hover:translate-x-0">Experience</span>
                </Link>
                <Link to="#projects" onClick={(e) => { e.preventDefault(); scrollToId('projects'); }} className="group flex items-center gap-2" aria-label="Projects" title="Projects">
                    <CodeIcon className="cursor-pointer"/>
                    <span className="pointer-events-none overflow-hidden max-w-0 opacity-0 translate-x-[-8px] whitespace-nowrap text-sm transition-all duration-300 ease-out group-hover:max-w-[120px] group-hover:opacity-100 group-hover:translate-x-0">Projects</span>
                </Link>
                <div className="w-px h-8 bg-white"/>
                <Link to="https://github.com/al-zivkovic" className="group flex items-center gap-2" aria-label="GitHub" title="GitHub">
                    <GitHubIcon className="cursor-pointer"/>
                </Link>
                <Link to="https://www.linkedin.com/in/aleksandar-zivkovic-04bb2620b/" className="group flex items-center gap-2" aria-label="GitHub" title="GitHub">
                    <LinkedInIcon className="cursor-pointer"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;