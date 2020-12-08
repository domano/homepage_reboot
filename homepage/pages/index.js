import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

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
                    <div className="absolute right-0 top-1/4 p-8 flex flex-col bg-primary-light bg-opacity-50 rounded-l-full border-2">
                        <p className="xl:text-7xl text-5xl p-8 text-center">
                            Hi! <br/>
                            Ich bin Dino.
                        </p>

                    </div>

                </div>
                <p className="p-8 text-3xl">

                    <p className="bg-primary">IT-Consultant</p>, Systemarchitekt, Product Owner, Entwickler und Trainer.
                    Ich liebe es komplexe Probleme mit Technologie zu lösen.
                </p>
            </div>
        </div>


    )
}
