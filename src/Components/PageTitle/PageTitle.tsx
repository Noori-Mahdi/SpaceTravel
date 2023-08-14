import './style.css'

type pageTitleProps ={
    id:number
    pageTitle:string;
}

const PageTitle = ({id,pageTitle}:pageTitleProps) => {
    return ( 
        <div className="pageTitle">
            <span>0{id}</span><span>{pageTitle}</span>
        </div>
     );
}
 
export default PageTitle;