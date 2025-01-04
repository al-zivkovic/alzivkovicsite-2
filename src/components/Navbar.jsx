import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="w-[300px] flex items-center p-5 fixed top-5 z-20 bg-secondary rounded-xl">
        <h1>Home</h1>
        <h1>About</h1>
        </nav>
    );
}

export default Navbar;