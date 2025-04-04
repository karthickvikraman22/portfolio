function Education() {

  const education = [{
    schoolName: "GCE-Tirunelveli",
    year: "2024",
    course: "BE-CSE",
    percent: "83"
  },
  {
    schoolName: "KA Hr. Sec. School",
    year: "2020",
    course: "",
    percent: "82.5"
  },
  {
    schoolName: "KA Hr. Sec. School",
    year: "2018",
    course: "",
    percent: "78"
  }]

  return <>
    <section className="mt-10" id="edu">
      <div className="md:px-20 my-5 mx-5">
        <p className="text-4xl border-b-2 border-white w-[165px] font-bold font-hero-font bc">Education</p>
      </div>
      <div className="flex flex-col mx-20 md:mx-28 mt-10 h-[450px] border-l">
        {education.map((e, index) => (
          <div key={index} className="flex">
            <p className="ml-2 mt-[93px] text-white text-xs font-hero-font">{e.year}</p>
            <div className="ml-2 mt-[100px] border-t w-[100px] border-white"></div>
            <div className="edu">
              <p className="font-hero-font text-lg text-white">{e.schoolName}<br /><span className="text-sm text-white font-hero-font">{e.course}</span></p>
              <p className="text-sm font-hero-font text-white">Percenage-{e.percent}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
}

export default Education;