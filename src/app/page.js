/*
   <>
        (Picture on right side)
    Welcome to Ashley Burns
    About Ashley
    Explore My Work
    Welcome message

    Git in touch (button that links to contact page)
   </>
   <>
    (rotating pictures of project main pages.....when clicked brings you to project page(use hyper link//ID needed??)
   </>
 */

// this route is "/"
export default function Home() {
    return (
        <div>
            <div className="welcome">
                <h3> Welcome to my portfolio. </h3>
                <div>From experimental passion projects to commissioned work for clients.
                    I thrive on creative challenges
                    and enjoy building strong relationships along the way.
                    Explore my work below, and contact me directly to learn more.
                </div>
                <button> Get in Touch</button>
            </div>
            <div className="home-projects"> IMAGES</div>
        </div>
    );
}
