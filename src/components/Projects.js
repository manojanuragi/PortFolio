import ecommerceImg from "../images/ecommerce.png";
import quizImg from "../images/Quiz.png";
import foodImg from "../images/food.png";
import Chatbot from "./ChatWithPdf.jsx";
export default function Projects() {
    const projects=[
    {title:"REACT QUIZ",img:quizImg,link:"https://xgy28r-5173.csb.app/", description:"This project buit on react to perform basick functionality of quiz website. It has 10 question on based of react fundamental concepts with time limitation. "},
    {title:"Ecommerce_web",img:ecommerceImg,link:"https://rz9w7r.csb.app/",description:"This project include all the basic functionality of ecommerce website. I have implemented all the concept of react and nextjs and data is fetched by an api."},
    {title:"RESTROFOOD" , img:foodImg,link:"https://k9wymn-3000.csb.app/", description:"	This project include all the basic functionality of food community website. I have implemented all the concept of react and nextjs and data is fetched by an api."}
    ]
	return (
		<section id="projects"
				className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
			<h2 className="text-5xl text-stone-500 font-bold text-center">
				My Projects
			</h2>
	    
            <ul style={{listStyle:'none', }}>
                 <Chatbot/>

                {projects.map((project)=>
                       <li key={project.title} className="pt-5"> <div className="p-10 bg-stone-200 flex flex-col justify-center items-center
                       gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
                       hover:shadow-xl hover:scale-[102%] w-full">
           <div className="w-80 rounded">
               <a href={project.link}

                   className="w-full h-full">
                   <img src={project.img}
                       alt="Project 1"
                       className="w-full h-full 
                                   bg-cover rounded"/>
               </a>
           </div>
           <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
               <h2 className="font-bold text-3xl text-center">
                   <a className="hover:underline"
                 href="https://xgy28r-5173.csb.app/">
            
                     {project.title}
                   </a>
               </h2>
               <p>{project.description} </p>
                   
           </div>
       </div></li>
                    )
}
            </ul>
			
		</section>
	);
}
