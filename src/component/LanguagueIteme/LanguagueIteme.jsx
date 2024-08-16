import htmllogo from '../../assets/images/icon-html.svg'


function  LanguagueIteme (props){
    
    return(
       <button> 
        <img src={props.LanguageIcone}></img>
        <span>{props.languagename}</span>
       </button>
       );}
export default LanguagueIteme