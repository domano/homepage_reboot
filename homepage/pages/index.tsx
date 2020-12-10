import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHandsHelping,
    faProjectDiagram,
    faUsers,
    faLaptopCode,
    faChalkboardTeacher, IconDefinition
} from "@fortawesome/free-solid-svg-icons"
import {useRef} from "react";
import IsVisible from "react-is-visible"


function Bubble({text}) {
    return <p className="text-highlight bg-primary rounded-full text-center flex-0 shadow-xl pl-2 pr-2">{text}</p>;
}

function Skill({text, icon, skills}: { text: string, icon: IconDefinition, skills: Array<string> }) {

    return <IsVisible once>
        {isVisible => <div
            className={`${isVisible ? "animate-fadeIn" : "opacity-0"} flex flex-col bg-highlight rounded-2xl p-4 border-2 shadow gap-1`}>
            <div className="flex flex-row pb-4">
                <div className="flex items-center justify-center p-2">
                    <FontAwesomeIcon className="text-5xl text-primary"
                                     icon={icon}/>
                </div>
                <p className="text-primary  text-right justify-center items-center text-3xl">{text}</p>
            </div>
            <div className="flex flex-wrap gap-1">
                {skills.map(skill => <Bubble text={skill}/>)}
            </div>
        </div>}
    </IsVisible>
}

function Skills() {

    let skills = {
        consulting: ["Lean Innovation", "Requirements Engineering", "MVP", "Validation", "Concept"],
        architect: ["Microservices", "Cloud", "Serverless", "Event Driven Systems", "CQRS", "Data integration", "Scalability"],
        po: ["Scrum", "PSPO 1", "Kanban", "Requirements Engineering", "Validation", "Technical"],
        dev: ["Go", "Javascript", "Typescript", "Dart", "Apache Kafka", "SQL",
            "Reactive Programming", "Functional Programming", "Flutter", "node", "Java", "Spring", "Robot Testing Framework", "Pact", "Bash",],
        trainer: ["Go Basics", "Advanced Go", "Microservices", "Custom Trainings"],
    }
    return <section className={`flex flex-col justify-evenly gap-1 `}>
        <Skill text="IT-Consultant" icon={faHandsHelping} skills={skills.consulting}/>
        <Skill text="Systems Architect" icon={faProjectDiagram} skills={skills.architect}/>
        <Skill text="Product Owner" icon={faUsers} skills={skills.po}/>
        <Skill text="Software Developer" icon={faLaptopCode} skills={skills.dev}/>
        <Skill text="Trainer" icon={faChalkboardTeacher} skills={skills.trainer}/>
    </section>;
}

function Hero() {
    return <IsVisible once>
        {isVisible => <section className={`${isVisible ? "animate-fadeIn" : "opacity-0"} hero `}>
            <Image
                src="/dino.jpg"
                alt="Bild von mir"
                width={1500}
                height={1000}
            />
            <div
                className="absolute right-0 top-1/4 p-8 flex flex-col
            bg-primary-light bg-opacity-50 rounded-l-full border-2
            ">
                <p className="xl:text-7xl text-5xl p-8 text-center">
                    Hi! <br/>
                    Ich bin Dino.
                </p>

            </div>
        </section>}
    </IsVisible>
}

let talks = [
    {id: "tcaPzIXwj8A", filename: "/talks/kafka_go.svg"},
    {id: "jKbIDyxQmOU", filename: "/talks/microservices.svg"},
    {id: "mGv79zsJ1K8", filename: "/talks/database_bottleneck.svg"},
    {id: "BRdRm3wwvjs", filename: "/talks/why_go.svg"},
    {id: "DsQgf6rgS_s", filename: "/talks/reactive_go.svg"},
    {id: "g-xWLYgeJ-M", filename: "/talks/serverless_go.svg"},
]

function Talks() {

    return <section className={`grid gap-1 sm:grid-cols-1 xl:grid-cols-2 justify-items-center justify-evenly`}>
        {talks.map(talk => {
            return <Talk key={talk.id} id={talk.id} filename={talk.filename}/>

        })}
    </section>;
}

function Talk({id, filename}: { id: string, filename: string }) {
    return <IsVisible once>
        {isVisible => <a
            className={`${isVisible ? "animate-fadeIn" : "opacity-0"} p-4 mx-auto transition duration-500 ease-in-out bg-highlight hover:bg-primary`}
            href={`https://www.youtube.com/watch?v=${id}`}>
            <Image className="hover" src={filename} width={640} height={360}/>
        </a>}
    </IsVisible>
}

export default function Home() {
    return (
        // TODO: Fix layout
        <div>
            <nav className={`flex flex-row h-10`}>
                    <Image className={"flex-none container h-16 w-16"} src={"/favicon.ico"} height={32} width={32}/>
                    <p className={"flex-none h-16 w-16"}>gomano.de</p>
            </nav>
        <div className={`flex flex-col bg-pr`}>
            <Hero/>
            <Skills/>
            <Talks/>
        </div>
        </div>
    )
}
