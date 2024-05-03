/*
 Name                   maybe neat doctor who quotes ("Exterminate Bugs") with picture of character
 ----------------------------------------------------------------------------------------------
 Page links (home, about, contact, work)              Social Links (GitHub, FaceBook, LinkedIn)
 */

import Link from "next/link";

export default function Header() {
    return (
        <div className="divide-y-4 divide-fuchsia-900">
            <div className="top-nav">
                <h1 className="font-serif italic nav-label "> Ashley Burns </h1>
                <span className="nav-label">Maybe Quotes</span>
            </div>
            <nav className="top-nav">
                <div className="nav-label">
                    <Link className="nav-link" href="#">Home</Link>
                    <Link className="nav-link" href="#">About</Link>
                    <Link className="nav-link" href="#">Contact</Link>
                    <Link className="nav-link" href="#">Work</Link>
                </div>
                <div className="nav-label">
                    <a className="nav-link" href="#">LinkedIN</a>
                    <a className="nav-link" href="#">GitHUB</a>
                </div>
            </nav>
        </div>
    );
}