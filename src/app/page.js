/*
   <>
        (Picture on right side)
    Welcome to Ashley Burns
    About Ashley
    Explore My Work
    Welcome message

    Git in touch (button that links to contact page)
   </>
   <Link>
    (rotating pictures of project main pages.....when clicked brings you to project page(use hyper link//ID needed??)
   </>
 */

import Link from "next/link";
import Image from "next/image";
import flower from "./images/flowers.jpeg";
import books from "./images/books.jpeg"

// this route is "/"
export default function Home() {
  return (
    <div>
      <div className="welcome">
        <h3> Welcome to my portfolio. </h3>
        <div>
          From experimental passion projects to commissioned work for clients. I
          thrive on creative challenges and enjoy building strong relationships
          along the way. Explore my work below, and contact me directly to learn
          more.
        </div>
        <Image
          src={flower}
          width={500}
          height={500}
          alt="Orange Flowers"
        />
        <Link href="contact"> Get in Touch</Link>
      </div>
      <div className="home-projects"> IMAGES Of Projects</div>
      <Image
          src={books}
          width={500}
          height={500}
          alt="Books"
        />
    </div>
  );
}
