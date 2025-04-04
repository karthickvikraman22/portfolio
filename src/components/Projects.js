function Projects() {

   const project = [{
      projectName: "Code Efficiency Analyzer",
      projectDescription: "The Code Efficiency Analyzer is a platform to analyze and assess the efficiency of their code through sophisticated algorithms.",
      projectTechStack: "The tech stack are React.js, Express.js, Tailwind CSS and Mongo Db."
   }, {
      projectName: "Food Recipe Search Platform",
      projectDescription: "The Food Recipe Platform presents the user with a variety of recipes, including ingredients, preparation steps, cooking time, and nutritional information.",
      projectTechStack: "The tech stack includes React.js, Tailwind CSS, and API integration."

   }, {
      projectName: "Online Examination System",
      projectDescription: "The project provide a user-friendly and efficient environment for conducting online quizzes, facilitating seamless examination processes and result management.",
      projectTechStack: "The tech stack are Java, Servlet, JDBC and MySQL."
   }];

   return <>
      <section className="flex flex-col mt-10 px-5" id='pro'>
         <div className="md:px-20 my-5 ">
            <p className="text-4xl border-b-2 border-white w-[140px] font-bold font-hero-font bc">Projects</p>
         </div>

         <div className="flex flex-col md:flex-row w-full items-center md:justify-center px-14 pt-8">
            {project.map((p,index) => (
               <div key={index} className="box-container">
                  <p className="heading">{p.projectName}</p>
                  <div className="des">
                     <p className="detail py-5">{p.projectDescription}</p>
                     <p className="detail">{p.projectTechStack}</p>
                  </div>
               </div>
            )
            )}
         </div>
      </section>
   </>
}

export default Projects;