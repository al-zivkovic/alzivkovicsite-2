import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
    return (
        <nav className="w-[300px] flex items-center p-5 fixed top-5 z-20 bg-secondary rounded-[50px]">
            <Link to="/">
                <HomeIcon className="cursor-pointer"/>
            </Link>
        </nav>
    );
}

export default Navbar;