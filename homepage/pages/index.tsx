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
import {useVisible} from "./hooks/useVisible";

function Bubble({text}) {
    return <p className="text-highlight bg-primary rounded-full text-center flex-0 shadow-xl pl-2 pr-2">{text}</p>;
}

function Skill({text, icon, skills}: { text: string, icon: IconDefinition, skills: Array<string> }) {
    return <div className="flex flex-col bg-highlight rounded-2xl p-4 border-2 shadow gap-1">
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
    </div>
}

function Skills() {
    const [targetRef, isVisible] = useVisible((vi: number) => vi > 0)

    let skills = {
        consulting: ["Lean Innovation", "Requirements Engineering", "MVP", "Validation", "Concept"],
        architect: ["Microservices", "Cloud", "Serverless", "Event Driven Systems", "CQRS", "Data integration", "Scalability"],
        po: ["Scrum", "PSPO 1", "Kanban", "Requirements Engineering", "Validation", "Technical"],
        dev: ["Go", "Javascript", "Typescript", "Dart", "Apache Kafka", "SQL",
            "Reactive Programming", "Functional Programming", "Flutter", "node", "Java", "Spring", "Robot Testing Framework", "Pact", "Bash",],
        trainer: ["Go Basics", "Advanced Go", "Microservices", "Custom Trainings"],
    }
    return <section className={`flex flex-nowrap justify-evenly gap-1 ${isVisible?"animate-fadeIn":"opacity-0"}`}>
        <Skill text="IT-Consultant" icon={faHandsHelping} skills={skills.consulting}/>
        <Skill text="Systems Architect" icon={faProjectDiagram} skills={skills.architect}/>
        <Skill text="Product Owner" icon={faUsers} skills={skills.po}/>
        <Skill text="Software Developer" icon={faLaptopCode} skills={skills.dev}/>
        <Skill text="Trainer" icon={faChalkboardTeacher} skills={skills.trainer}/>
    </section>;
}

function Hero() {
    const [targetRef, isVisible] = useVisible((vi: number) => vi > 0)
    return <section className={`hero ${isVisible?"animate-fadeIn":"opacity-0"}`}>
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
    </section>;
}

function Talks() {
    const [targetRef, isVisible] = useVisible((vi: number) => vi > 0)
    // @ts-ignore
    return <section ref={targetRef} className={`grid gap-1 sm:grid-cols-1 xl:grid-cols-2 justify-items-center justify-evenly ${isVisible?"animate-fadeIn":"opacity-0"}`}>
        <Talk id={"tcaPzIXwj8A"} filename={"/talks/kafka_go.svg"}/>
        <Talk id={"jKbIDyxQmOU"} filename={"/talks/microservices.svg"}/>
        <Talk id={"mGv79zsJ1K8"} filename={"/talks/database_bottleneck.svg"}/>
        <Talk id={"BRdRm3wwvjs"} filename={"/talks/why_go.svg"}/>
        <Talk id={"DsQgf6rgS_s"} filename={"/talks/reactive_go.svg"}/>
        <Talk id={"g-xWLYgeJ-M"} filename={"/talks/serverless_go.svg"}/>
    </section>;
}

function Talk({id, filename}:{id: string, filename: string}) {
    return <a className="p-4 mx-auto transition duration-500 ease-in-out bg-highlight hover:bg-primary" href={`https://www.youtube.com/watch?v=${id}`}>
        <Image className="hover" src={filename} width={640} height={360}/>
    </a>
}

export default function Home() {
    return (
        <div className={`flex flex-col bg-pr`}>
            <Hero/>
            <Skills/>
            <Talks/>
        </div>
    )
}
