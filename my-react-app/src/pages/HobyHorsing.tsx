import { NavLink } from "react-router-dom";
import Breadcrumb from "../components/BreadCrumb";
/** Styl */
import "../styles/HobyHorsing.scss";

//vytvoř speciální třídu scss na text v aktivity co bude společná + struktura jako tady a obrázek
const HobyHorsing: React.FC = () => {
  const handleScroll = () => {
    window.scrollBy({ top: 560, behavior: "smooth" }); // 10rem = 160px
  };
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent">
        <h2>Hobby horsing</h2>
        <Breadcrumb currentPage="Hobby horsing" />
        <div className="ActivityContentContainer">
          <div className="TextContent">
            <article>
              <p>
                Hobby horsing se v našem klubu rozjel zejména nadšením v řadách
                našich dětských členů, protože ale tento sport zažívá v
                posledních letech neskutečný boom a rozvoj, nezůstali jsme
                pozadu a rozhodli se podpořit a zpřístupnit i tyto "koňské
                nekoňské" aktivity široké veřejnosti a všem nadšencům. Nabízíme
                možnost stát se členy čistě jen hobby horsingového kroužku.
              </p>
              <p>
                Scházíme se 1x týdně na trénink v tělocvičně ZŠ Březová během
                školního roku a přes prázdniny máme vedle stáje k dispozici i
                čistě hobby horsingové tréninkové kolbiště. Do začátku můžeme
                hobby horsíky zapůjčit, případně poradit s jejich pořízením na
                míru danému dítěti a jeho sportovním prioritám. S dětmi se
                účastníme hobby horsingových soutěží nejen v okolí. Naši mladí
                členové zaznamenali i v této disciplíně mnohé úspěchy a postupně
                se propracovali mezi republikovou špičku. V roce 2024 se pětici
                našich svěřenců podařilo splnit kvalifikaci a zúčastnit se MČR v
                hobby horsingu v Praze pod záštitou České hobby horsingové
                federace, kde naše 7letá členka Sofia Chromčáková vybojovala ve
                své kategorii titul druhého vícešampióna ČR!!
              </p>
              <p>
                Náš klub je členem České hobby horsing asociace (ČHHA),
                pravidlené tréninky vede{" "}
                <NavLink to="/about/our-team" onClick={handleScroll}>
                  <span className="SpecialNav">Bc. Jana Pospíšilová</span>
                </NavLink>{" "}
                , která je od roku 2024 také certifikovaným rozhodčím ČHHA pro
                disciplíny drezura, parkur a skok mohutnosti.
              </p>
            </article>
          </div>
          <div className="backgroundPicture"></div>
          <div className="backgroundPicture2"></div>
        </div>
      </div>
    </section>
  );
};

export default HobyHorsing;
