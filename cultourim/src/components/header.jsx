import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="fixed top-4 w-[98%]  h-[10%] ml-4 z-30  bg-black/20 rounded-lg border-gray-200 dark:border-gray-700 shadow-lg flex items-center">
            <h1 className="text-3xl ml-6 font-pixel bg-gradient-to-r from-violet-400 to-orange-500 bg-clip-text text-transparent">
                <Link to={"/home"}>CULTOURIUM</Link></h1>
        </div>
    );
}