import'./Languageswrapper.css'
import htmllogo from '../../assets/images/icon-html.svg';
import csslogo from '../../assets/images/icon-css.svg';
import javalogo from '../../assets/images/icon-js.svg';
import accesslogo from '../../assets/images/icon-accessibility.svg';
import LanguagueIteme from '../LanguagueIteme/LanguagueIteme'

function  Languageswrapper (){
    return(
        <div id='Languageswrapper'>
           <LanguagueIteme languagename="HTML" LanguageIcone={htmllogo}  ></LanguagueIteme>
           <LanguagueIteme languagename="CSS" LanguageIcone={csslogo}></LanguagueIteme>
           <LanguagueIteme languagename="JavaScript" LanguageIcone={javalogo}></LanguagueIteme>
           <LanguagueIteme languagename="Accessibility" LanguageIcone={accesslogo}></LanguagueIteme>
        </div>
    );}
export default Languageswrapper