import { NavLink } from "react-router-dom";
import { Language } from "../../interfaces/language";
import LanguagesOptions from "./LanguagesOptions";
interface Props {
  language: Language;
  className?: string;
}

const LanguageComponent = ({language,className}:Props) => {
  return (

    <div className={`flex flex-col border-2 shadow-lg rounded-lg ${className}`}>
       <NavLink to={`/languages/${language.id}`}>

        <div >

          <div className="p-2">
          
            <h3 className="h-3 text-2xl text-gray-900 font-bold"> {language.name}</h3>
          </div>
          <div className="p-2">
          
            <img className=" object-contain h-96" src={language.image} alt={language.name} />
          </div>
          <div className="p-2">
            
          </div>
        </div>
       </NavLink>
      <div className="my-auto p-3">
        <LanguagesOptions language={language}></LanguagesOptions>
      </div>
    </div>
  );
}

export default LanguageComponent