import { MdPeopleAlt } from 'react-icons/md';
import Image from 'next/image';
import { Socials } from '../components';

export default function About() {
  return (
    <section className="bg-primary relative overflow-hidden text-secondary font-roboto py-32">
      <div className="w-550 h-200 absolute top-3/5 right-1/2 translate-x-1/2 rounded-full border-1 border-secondary/30 z-30"></div>
      <div className="flex flex-col items-center px-8 md:px-[25%] gap-4 pb-16">
        <h3 className="text-4xl uppercase font-display tracking-wider font-bold text-center">
          Con passione dal <span className="text-cta">2019</span>
        </h3>
        <p className="text-muted text-xl text-center">
          Quella che è iniziata come una piccola scommessa tra due fratelli è
          diventata, in 5 anni, il punto di riferimento per gli amanti
          dell'hamburger a Portici.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-[10%]">
        <div className="bg-secondary/5 flex flex-col justify-between backdrop-blur-lg rounded-3xl px-4 pt-8 pb-4 border-1 border-secondary/20 z-40">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 pb-2">
              <MdPeopleAlt className="text-4xl text-cta" />
              <h4 className="uppercase font-semibold text-3xl text-center md:text-start">
                due fratelli, un sogno
              </h4>
            </div>
            <p className="text-muted text-center md:text-start pb-8 md:pb-0">
              Siamo partiti con un obiettivo semplice: portare la qualità
              gourmet in un contesto giovane e informale. Ogni panino che
              serviamo racconta la nostra evoluzione e la ricerca costante dei
              migliori ingredienti.
              <br />
              <br />
              Non siamo solo noi due.{' '}
              <strong className="text-cta">Vida Burger</strong> è cresciuto
              grazie a uno staff eccezionale e, soprattutto,{' '}
              <strong>grazie a voi</strong> che ci scegliete dal primo giorno.
            </p>
          </div>
          <div className="w-full flex justify-center md:justify-start border-t-1 border-secondary/20">
            <Socials />
          </div>
        </div>
        <Image
          src="/images/burger.webp"
          alt="Foto dei fratello X1"
          width={500}
          height={500}
          className="bg-secondary/10 rounded-3xl border-1 border-secondary/50 shadow-secondary/20 shadow-md z-40"
        />
      </div>
    </section>
  );
}
