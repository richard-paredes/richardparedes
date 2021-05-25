import React from 'react';

export const Navbar = () => {
    return <div className="overflow-hidden fixed top-0 w-full h-16">
        <div className="h-auto mx-auto w-full flex items-center justify-end">
            <a className="float-left text-emerald-800 align-center">About</a>
            <a className="float-left text-emerald-800 align-center">Experience</a>
            <a className="float-left text-emerald-800 align-center">Projects</a>
        </div>
    </div>
}
