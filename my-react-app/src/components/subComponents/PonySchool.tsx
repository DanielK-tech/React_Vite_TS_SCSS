import "./PonySchool.scss";




const PonySchool:React.FC = () => {
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent">
        <h2>Pony školička</h2>
        <div className="ActivityContentContainer"> 
        <div className="TextContent"> 
        <article>
          <p>Pony školička je určená nejmenším dětem do předškolního věku. Děti se hravou a nenáročnou formou seznámí se základní péčí o poníka, učí se jak s ním bezpečně manipulovat a základům správného, zdravého a jistého sedu. Jezdecké lekce probíhají formou her nebo v terénu, kde jsou děti nuceny překonáváním běžných terénních překážek a nástrah upevnit sed a uvolnit se v sedle.</p>           
          <p>Pro pony školičku využíváme jen naše spolehlivé starší poníky, kteří jsou na děti zvyklí a pod dozorem bezpeční. Jezdecká část probíhá vždy za asistence kvalifikovaného instruktora a proškolených pomocníků, nejmenší dětičky jsou v sedle jištěny. S ohledem na počet poníků a jejich aktuální zdravotní stav jsou místa v pony školičce omezená, lekce probíhají 1x týdně v zimních měsících a 2x týdně po zbytek roku. Platí se na místě vždy za jednotlivou lekci, docházka je přizpůsobena individuálně možnostem každého z dětí/rodičů.</p> 
          <p>Ve spolupráci s naší certifikovanou instruktorkou pro hiporehabilitaci v pedagogické a sociální praxi je nově možno domluvit i lekce zaměřené na logopedickou podporu předškolních dětí.</p> 
        </article> 
          </div>          
            <div className="backgroundPicture001"></div>
            <div className="backgroundPicture002"></div>
        </div>
      </div>
    </section>
  )
}

export default PonySchool