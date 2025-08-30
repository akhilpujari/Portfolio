import javasvg from "../../svg/java-svgrepo-com (1).svg"
import pythonsvg from "../../svg/python-svgrepo-com.svg"
import javascriptsvg from "../../svg/javascript-svgrepo-com.svg"
import phpsvg from "../../svg/php-1-logo-svgrepo-com.svg"

import mysqlsvg from "../../svg/mysql-logo-svgrepo-com.svg"
import postgresqlsvg from "../../svg/postgresql-logo-svgrepo-com.svg"

import html from "../../svg/html-5-svgrepo-com.svg"
import css from "../../svg/css-3-svgrepo-com.svg"
import bootstrap from "../../svg/bootstrap-svgrepo-com.svg"
import tailwind from "../../svg/tailwind-svgrepo-com.svg"
import reactsvg from "../../svg/react-svgrepo-com.svg"
export default function Skills(){
    const programmingLanguages = [
        {
            name : "Java",
            image : javasvg,
            description : "Object Orientied"
        },
        {
            name : "Python",
            image : pythonsvg,
            description : "Object Orientied"
        },
        {
            name : "JavaScript",
            image : javascriptsvg,
            description : "Frontend & Backend"
        },
        {
            name : "PHP",
            image : phpsvg,
            description : "Server-Side Scripting"
        }
    ]

            const databases = [
                {
                    name : "MySQL",
                    image : mysqlsvg,
                    description : "Relational Database"
                },
                 {
                    name : "PostgreSQL",
                    image : postgresqlsvg,
                    description : "Relational Database"
                },
            ]

            const frontend = [
                {
                    name : "HTML",
                    image : html,
                    description : "Web Markup"
                },
                {
                    name : "CSS",
                    image : css,
                    description : "Styling"
                },
                {
                    name : "Bootstrap",
                    image : bootstrap,
                    description : "styling Framework"
                },
                {
                    name : "Tailwind",
                    image : tailwind,
                    description : "Styling Framework"
                },
                {
                    name : "React",
                    image : reactsvg,
                    description : "Frontend Framework"
                }
            ]

    return(
        <>
            <div className="container skills-container">

                
                <div>
               <div className="text-center">
                    <h3 className="d-inline-block mt-2  border-bottom border-3 border-danger pb-1">
                        Programming Languages
                    </h3>
                </div>
                <div className="d-flex justify-content-center align-content-center gap-5 mt-5 overflow-x-auto flex-nowrap horizontal-scroll " style={{ maxWidth: "100%" }}>
                    {programmingLanguages.map((item, index) => {
                    return (
                        <div
                        key={index}
                        className="col-md-2 text-center shadow card-skill flex-shrink-0 mt-3 mb-3 bg-dark rounded"
                        style={{ height: "230px", minWidth: "180px" }}
                        >
                        <img src={item.image} className="m-3 mt-4" style={{ width: "65px" }} alt={item.name} />
                        <p className="m-3 fs-4">{item.name}</p>
                        <p className="text-secondary">{item.description}</p>
                        </div>
                    );
                    })}
                    </div>
                </div>

                <div className="mt-5 mb-5">
                    <div className="text-center">
                    <h3 className="d-inline-block mt-2  border-bottom border-3 border-danger pb-1">
                        Frontend
                    </h3>
                </div>
                    <div className="d-flex justify-content-center align-content-center gap-4 mt-5 overflow-x-auto flex-nowrap horizontal-scroll" style={{ maxWidth: "100%" }}>
                    {frontend.map((item, index) => {
                    return (
                        <div
                        key={index}
                        className="col-md-2 text-center shadow card-skill flex-shrink-0 mt-3 mb-3 bg-dark rounded"
                        style={{ height: "230px", minWidth: "180px" }}
                        >
                        <img src={item.image} className="m-3 mt-4" style={{ width: "65px" }} alt={item.name} />
                        <p className="m-3 fs-4">{item.name}</p>
                        <p className="text-secondary">{item.description}</p>
                        </div>
                    );
                    })}
                    </div>
                </div>

                <div className="mt-5 mb-5">
                    <div className="text-center">
                    <h3 className="d-inline-block mt-2  border-bottom border-3 border-danger pb-1">
                        Data Bases
                    </h3>
                </div>
                    <div className="d-flex justify-content-center align-content-center gap-5 mt-5 overflow-x-auto flex-nowrap horizontal-scroll" style={{ maxWidth: "100%" }}>
                    {databases.map((item, index) => {
                    return (
                        <div
                        key={index}
                        className="col-lg-4 col-md-4 col-sm-2 text-center shadow card-skill flex-shrink-0 mt-3 mb-3 bg-dark rounded"
                        style={{ height: "230px", minWidth: "180px" }}
                        >
                        <img src={item.image} className="m-3 mt-4" style={{ width: "65px" }} alt={item.name} />
                        <p className="m-3 fs-4">{item.name}</p>
                        <p className="text-secondary">{item.description}</p>
                        </div>
                    );
                    })}
                    </div>
                </div>


            </div>

        </>
    )
}