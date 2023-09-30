import IssueItem from './IssueItem'
import { useLocation } from 'react-router-dom';
export const IssueList = () => {
  const location = useLocation();
  const { issues } = location.state;
  console.log(issues)
  return (
    <>
    <section className="text-gray-400 body-font min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1
            className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white"
            
          >
            {" "}
            {" "}
            <span className="text-4xl text-yellow-400 font-extrabold animate-pulse">
              Good First Issues
            </span>{" "}
          </h1>
        </div>
          
            <div className="flex flex-wrap -m-2 justify-center items-center">{issues.map((issue, index) => {
              return (<>
                <IssueItem key={index} title={issue.title} description={issue.description} url={issue.url} />
              </>);
                  
            })}
            </div>
            
        
      </div>   
    </section>
    </>
  )
}
