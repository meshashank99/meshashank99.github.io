import React,{useEffect} from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";

export const Github = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="sections">
      <h1 className="heading"><span className="sauce"> My Contributions and Stats</span></h1>
      <div data-aos="fade-up">

      <GitHubCalendar
        fontSize={16}
        blockSize={15}
        year={2023}
        username="meshashank99"
      />
      </div>
      <div data-aos="fade-up" style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'3rem'}}>

        <img
        id="github-top-langs"
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=meshashank99&theme=neon&border_radius=2.7"
          alt="meshashank99"
        />
      </div>
      <div  data-aos="fade-up" style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'3rem'}} id="github-stat" >
        <img
        id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=meshashank99&theme=neon&border_radius=2.7&show_icons=true"
          alt="meshashank99"
        />
        <img
        id="github-streak-stats"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=meshashank99&theme=neon&border_radius=2.7&date_format=M%20j%5B%2C%20Y%5D"
          alt="meshashank99"
        />
      </div>
    </section>
  );
};
