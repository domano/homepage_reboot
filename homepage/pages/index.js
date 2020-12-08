import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHandsHelping,
    faProjectDiagram,
    faUsers,
    faLaptopCode,
    faChalkboardTeacher
} from "@fortawesome/free-solid-svg-icons"
import YouTube from "react-youtube";

function Bubble({text}) {
    return <p className="text-highlight bg-primary rounded-full text-center flex-0 shadow pl-2 pr-2">{text}</p>;
}

function Skill({text, icon, skills}) {
    return <div className="flex flex-col bg-highlight rounded-2xl p-2 border-2 shadow gap-1">
        <div className="flex flex-row">
            <div className="flex items-center justify-center">
                <FontAwesomeIcon className="text-4xl text-primary"
                                 icon={icon}/>
            </div>
            <p className="text-primary justify-center items-center text-3xl">{text}</p>
        </div>
        <div className="flex flex-wrap">
            skills.map((e) => return <Bubble text={e}/>)
        </div>
    </div>
}

function Skills() {
    return <section className="flex flex-nowrap justify-evenly">
        <Skill text="IT-Consultant" icon={faHandsHelping}/>
        <Skill text="Systems Architect" icon={faProjectDiagram}/>
        <Skill text="Product Owner" icon={faUsers}/>
        <Skill text="Software Developer" icon={faLaptopCode}/>
        <Skill text="Trainer" icon={faChalkboardTeacher}/>
    </section>;
}

function Hero() {
    return <section className="hero">
        <Image
            src="/dino.jpg"
            alt="Bild von mir"
            width={1500}
            height={1000}
        />
        <div
            className="absolute right-0 top-1/4 p-8 flex flex-col bg-primary-light bg-opacity-50 rounded-l-full border-2">
            <p className="xl:text-7xl text-5xl p-8 text-center">
                Hi! <br/>
                Ich bin Dino.
            </p>

        </div>
    </section>;
}

function Talks() {
    return <section className="grid sm:grid-cols-1 xl:grid-cols-2 justify-items-center justify-evenly">
        <YouTube videoId={"tcaPzIXwj8A"} opts={{width: "640"}}/>
        <YouTube videoId={"jKbIDyxQmOU"} opts={{width: "640"}}/>
        <YouTube videoId={"mGv79zsJ1K8"} opts={{width: "640"}}/>
        <YouTube videoId={"BRdRm3wwvjs"} opts={{width: "640"}}/>
        <YouTube videoId={"DsQgf6rgS_s"} opts={{width: "640"}}/>
        <YouTube videoId={"g-xWLYgeJ-M"} opts={{width: "640"}}/>
    </section>;
}

export default function Home() {
    return (
        <div className=" flex flex-col bg-pr">
            <Hero/>
            <Skills/>
            <Talks/>
        </div>
    )
}
