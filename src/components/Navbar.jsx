import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InterestsIcon from '@mui/icons-material/Interests';

const Navbar = () => {
    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <>
            {/* Mobile Bottom Navigation */}
            <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-20 bg-secondary">
                <div className="flex items-center justify-around py-3 px-4">
                    <Link to="#home" onClick={(e) => { e.preventDefault(); scrollToId('home'); }} className="flex flex-col items-center gap-1 text-white hover:text-blue-500 transition-colors duration-200" aria-label="Home" title="Home">
                        <HomeIcon className="text-2xl"/>
                        <span className="text-xs">Home</span>
                    </Link>
                    <Link to="#experience" onClick={(e) => { e.preventDefault(); scrollToId('experience'); }} className="flex flex-col items-center gap-1 text-white hover:text-blue-500 transition-colors duration-200" aria-label="Experience" title="Experience">
                        <WorkHistoryIcon className="text-2xl"/>
                        <span className="text-xs">Experience</span>
                    </Link>
                    <Link to="#projects" onClick={(e) => { e.preventDefault(); scrollToId('projects'); }} className="flex flex-col items-center gap-1 text-white hover:text-blue-500 transition-colors duration-200" aria-label="Projects" title="Projects">
                        <CodeIcon className="text-2xl"/>
                        <span className="text-xs">Projects</span>
                    </Link>
                    <Link to="https://github.com/al-zivkovic" className="flex flex-col items-center gap-1 text-white hover:text-gray-300 transition-colors duration-200" aria-label="GitHub" title="GitHub">
                        <GitHubIcon className="text-2xl"/>
                        <span className="text-xs">GitHub</span>
                    </Link>
                    <Link to="https://www.linkedin.com/in/aleksandar-zivkovic-04bb2620b/" className="flex flex-col items-center gap-1 text-white hover:text-blue-500 transition-colors duration-200" aria-label="LinkedIn" title="LinkedIn">
                        <LinkedInIcon className="text-2xl"/>
                        <span className="text-xs">LinkedIn</span>
                    </Link>
                </div>
            </nav>

            {/* Desktop Top Navigation */}
            <nav className="hidden sm:block group w-fit transition-all duration-300 ease-out flex items-center p-5 fixed top-5 z-20 bg-secondary rounded-[50px] text-white shadow-lg shadow-black/50">
                <div className="flex items-center gap-5">
                    <Link to="#home" onClick={(e) => { e.preventDefault(); scrollToId('home'); }} className="group flex items-center gap-2 hover:text-blue-500 transition-colors duration-200" aria-label="Home" title="Home">
                        <HomeIcon className="cursor-pointer transition-all duration-300 ease-out transform-gpu"/>
                        <span className="pointer-events-none overflow-hidden max-w-0 opacity-0 translate-x-[-8px] whitespace-nowrap text-sm transition-all duration-300 ease-out group-hover:max-w-[96px] group-hover:opacity-100 group-hover:translate-x-0">Home</span>
                    </Link>
                    <Link to="#experience" onClick={(e) => { e.preventDefault(); scrollToId('experience'); }} className="group flex items-center gap-2 hover:text-blue-500 transition-colors duration-200" aria-label="Experience" title="Experience">
                        <WorkHistoryIcon className="cursor-pointer transition-all duration-300 ease-out transform-gpu"/>
                        <span className="pointer-events-none overflow-hidden max-w-0 opacity-0 translate-x-[-8px] whitespace-nowrap text-sm transition-all duration-300 ease-out group-hover:max-w-[120px] group-hover:opacity-100 group-hover:translate-x-0">Experience</span>
                    </Link>
                    <Link to="#projects" onClick={(e) => { e.preventDefault(); scrollToId('projects'); }} className="group flex items-center gap-2 hover:text-blue-500 transition-colors duration-200" aria-label="Projects" title="Projects">
                        <CodeIcon className="cursor-pointer transition-all duration-300 ease-out transform-gpu"/>
                        <span className="pointer-events-none overflow-hidden max-w-0 opacity-0 translate-x-[-8px] whitespace-nowrap text-sm transition-all duration-300 ease-out group-hover:max-w-[120px] group-hover:opacity-100 group-hover:translate-x-0">Projects</span>
                    </Link>
                    <Link to="#other-interests" onClick={(e) => { e.preventDefault(); scrollToId('other-interests'); }} className="group flex items-center gap-2 hover:text-blue-500 transition-colors duration-200" aria-label="Other Interests" title="Other Interests">
                        <InterestsIcon className="cursor-pointer transition-all duration-300 ease-out transform-gpu"/>
                        <span className="pointer-events-none overflow-hidden max-w-0 opacity-0 translate-x-[-8px] whitespace-nowrap text-sm transition-all duration-300 ease-out group-hover:max-w-[120px] group-hover:opacity-100 group-hover:translate-x-0">Other Interests</span>
                    </Link>
                    <Link to="https://github.com/al-zivkovic" className="group flex items-center gap-2 hover:text-gray-300 transition-colors duration-200" aria-label="GitHub" title="GitHub">
                        <GitHubIcon className="cursor-pointer transition-all duration-300 ease-out transform-gpu hover:scale-100"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/aleksandar-zivkovic-04bb2620b/" className="group flex items-center gap-2 hover:text-blue-500 transition-colors duration-200" aria-label="LinkedIn" title="LinkedIn">
                        <LinkedInIcon className="cursor-pointer transition-all duration-300 ease-out transform-gpu hover:scale-100"/>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;