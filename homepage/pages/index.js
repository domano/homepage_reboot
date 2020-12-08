import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandsHelping} from "@fortawesome/free-solid-svg-icons"

function Bubble({text, icon}) {
    return <div className="flex flex-col bg-primary rounded-2xl p-2 border-2 shadow ">
        <div className="flex items-center justify-center"><FontAwesomeIcon className="text-5xl text-highlight" icon={faHandsHelping}/></div>
        <p className="text-highlight justify-center items-center text-3xl">{text}</p>
    </div>
}

export default function Home() {
    return (
        <div className="App flex flex-col">
            <div className="App flex flex-col bg-pr">

                <div className="">
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

                </div>
                <div className="flex flex-nowrap justify-evenly">
                    <Bubble text={"IT-Consultant"}/>
                    <Bubble text={"Systems Architect"}/>
                    <Bubble text={"Product Owner"}/>
                    <Bubble text={"Software Developer"}/>
                    <Bubble text={"Trainer"}/>
                </div>
                <p className="p-8 text-3xl">

                </p>
            </div>
        </div>


    )
}
