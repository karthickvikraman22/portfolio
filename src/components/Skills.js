function Skills() {

    const skill = [{
        skillName: "JAVA",
        skillPercent: "90%"
    }, {
        skillName: "JavaScript",
        skillPercent: "90%"
    }, {
        skillName: "React.js",
        skillPercent: "75%"
    }, {
        skillName: "Tailwind CSS",
        skillPercent: "80%"
    }, {
        skillName: "Express.js",
        skillPercent: "70%"
    }, {
        skillName: "MySQL",
        skillPercent: "95%"
    }, {
        skillName: "Mongo Db",
        skillPercent: "85%"
    }]

    return <>
        <section className="mt-20 px-5 flex flex-col" id='skill' >
            <div className="md:px-20">
                <h1 className="text-4xl text-white font-hero-font border-white border-b-2 w-[100px] bc">Skills</h1>
            </div>
            <div className="w-full grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 gap-8 mt-14 px-5 md:px-20">
                { skill.map((s,index)=>(
                    <div key={index}>
                        <div className="flex justify-between">
                            <h3 className="heading1 text-white">{s.skillName}</h3>
                            <p className="percent">{s.skillPercent}</p>
                        </div>
                        <div className="bar">
                            <div style={{ width: `${s.skillPercent}` }} className="inner-bar"></div>
                        </div>
                    </div>
                )
                )}
            </div>
        </section>
    </>
}

export default Skills;