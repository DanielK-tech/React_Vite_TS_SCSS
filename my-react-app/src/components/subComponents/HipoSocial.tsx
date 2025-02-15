import "./HipoSocial.scss";
import { NavLink } from "react-router-dom";

const HipoSocial: React.FC = () => {
  const handleScroll = () => {
    window.scrollBy({ top: 560, behavior: "smooth" }); // 10rem = 160px
  };
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent">
        <h2>Hiporehabilitace v pedagogické a sociální praxi</h2>
        <div className="ActivityContentContainer">
          <div className="TextContent">
            <article>
              <p>
                Hiporehabilitace v pedagogické a sociální praxi (dále jen HPSP)
                je jedna z disciplín hiporehabilitace - certifikovaný instruktor
                HPSP (pedagogické, sociální nebo zdravotně-sociální vzdělání)
                cíleně využívá kontakt a interakci s koněm a prostředí určené
                pro chov koní, jako prostředku k motivaci, aktivizaci, výchově a
                vzdělávání lidí se speciálními potřebami, tedy lidí se
                zdravotním znevýhodněním nebo v nepříznivé sociální situaci nebo
                lidí těmito znevýhodněními ohrožených v rámci aplikovaných
                disciplín pedagogiky, sociální práce a sociální terapie.
              </p>
              <p>
                Naše certifikovaná instruktorka{" "}
                <NavLink to="/about/our-team" onClick={handleScroll}>
                  <span className="SpecialNav">Eva Kolegarová, DiS</span>
                </NavLink>{" "}
                . se již dlouhodobě specializuje na HPSP u dětí a mládeže se
                zdravotním či sociálním znevýhodněním. Pro HPSP využíváme pouze
                naše prověřené a vyzkoušené koně a pony, kteří budou v roce 2025
                přihlášeni ke složení specializační zkoušky České
                hiporehabilitační společnosti právě pro tyto aktivity.
              </p>
              <p>
                Posláním HPSP je pomáhat lidem se zdravotním znevýhodněním nebo
                specifickými potřebami, a to především v oblasti rozvoje
                sociálních schopností a dovedností. Naši klienti se pohybují v
                prostředí stájí a výběhů, kde je třeba dodržovat jasná pravidla
                chování, spolupráci ve skupině, kontakt se zvířaty – jejich
                hlazení, čistění srsti a česání hřívy, vodění koní a plnění
                různých úkolů a nakonec i jízda na koni. To všechno jsou
                neuvěřitelně působivé faktory, které mají na tento osobní rozvoj
                blahodárný vliv.
              </p>
            </article>
          </div>
          <div className="backgroundPicture0001"></div>
          <div className="backgroundPicture0002"></div>
        </div>
      </div>
    </section>
  );
};

export default HipoSocial;
