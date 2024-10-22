/*
Centered
    email
    LinkedIn Facebook Github

    copyright year by ME | sitemap (??)
 */

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <Link className="nav-link" href="/">Home</Link>
                    <Link className="nav-link" href="/resume">Resume</Link>
                    <Link className="nav-link" href="/projects">Projects</Link>
                    <Link className="nav-link" href="/contact">Contact</Link>
                </div>
                <a className="email" href="#">burns.ashley331@gmail.com</a>
                <div>
                    <a className="nav-link" href="#">LinkedIN</a>
                    <a className="nav-link" href="#">FaceBook</a>
                    <a className="nav-link" href="#">GitHUB</a>
                </div>
                <small>© 2024 By Ashley Burns </small>
            </div>
        </footer>
    );
}