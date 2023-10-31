import { SiLinkedin, SiGithub } from "react-icons/si";

export function About() {
    return (
        <div className="container">
            <div className="about_container">
                <div>
                    <img src="https://github.com/thiagotmendes.png" alt="" className="rounded-lg" />
                </div>
                <div>
                    <h1> Hi, I'm Thiago Mendes </h1>
                    <p>
                        This is a small project, create to study more about React, 
                        and how to consume APIs, my idea was create something small and fast, 
                        simulating the normal development process of a web project.
                    </p>
                    <p>
                        I have been study javaScript (React and Nodejs) for sometime and this is my 
                        first autoral project, I'm focused on design and layout yet, 
                        but please if you have any suggestion let me know, but keep in mind that it's a study case.
                    </p>
                    <p>
                        This is a free project, without financial ends
                    </p>
                    <p className="flex social-icons">
                        <a href="https://www.linkedin.com/in/thiagotmendes/" target="_blank"> <SiLinkedin /> </a>
                        <a href="https://github.com/thiagotmendes" className="ml-2" target="_blank"> <SiGithub /> </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

