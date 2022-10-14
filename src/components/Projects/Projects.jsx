import React, { useEffect } from "react";
import style from "./Projects.module.css";
import Slider from "../Proslider/Proslider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Projects = () => {
  const { t,} = useTranslation("global");
  
  const mockImagenes = [
        {
            link: "https://calculatorvirtual.netlify.app/",
            url: "https://th.bing.com/th/id/R.d0168f61e4182ee66d413cd79cc0e6b6?rik=k%2fI6vzQ2mYSCgw&riu=http%3a%2f%2fis4.mzstatic.com%2fimage%2fthumb%2fPurple128%2fv4%2f56%2f24%2f88%2f562488f3-e95f-6d20-d49b-4ae045832e78%2fsource%2f576x768bb.jpg&ehk=vNkjYCU0x7X9Pn%2b6TlE6CHuo0OBBmnwV226i%2bL2XmXU%3d&risl=&pid=ImgRaw&r=0",
            name: t("CALCULATOR "),
            description: t("Only Html Css and javascript used"),
        },
        {
            link: "https://tictactoevirtual.netlify.app/",
            url: "https://images-eu.ssl-images-amazon.com/images/I/812sMTUm3AL.png",
            name: t("TIC-TAC-TOE"),
            description: t("Only Html Css and javascript used"),
        },
        {
            link: "https://namastespa.netlify.app",
            url: "https://img.freepik.com/vector-gratis/manos-namaste-dibujado-mano_23-2147702367.jpg?w=2000",
            name: t("Namaste Samkhya"),
            description: t("Only Html Css"),
        },
        {
            link: "https://mycdesing.netlify.app",
            url: "https://cdn.searchenginejournal.com/wp-content/uploads/2020/01/which-web-design-platform-is-right-for-you-5e4d59fb941b9-1520x800.png",
            name: t("Web Site"),
            description: t("Only Html Css and javascript used"),
        },
        {
          link: "https://cobiinfo.netlify.app",
          url: "https://nationaltoday.com/wp-content/uploads/2021/07/Guinea-Pig-Appreciation-Day.jpg",
          name: t("Web Site Guinea Pig"),
          description: t("Only Html Css and javascript used"),
      },
      {
        link: "https://cobiinfo.netlify.app",
        url: "https://media-exp1.licdn.com/dms/image/C4D03AQH0c8oX6BgsUg/profile-displayphoto-shrink_200_200/0/1656885695410?e=1671062400&v=beta&t=jxCPFuqWX4FABQBiP_TQ627pL4zbDlW6ghRQe55NcZY",
        name: t("Porfolio"),
        description: t("React, Redux and javascript used"),
    },
    ];
    useEffect(() => {
        Aos.init({ duration: 1500, once: true });
      }, []);
    
      return (
        <section className={style.section} id='Projects'>
          <div className={style.container}>
            <div className={style.title}>
              <h1>{t("NavBar.Projects")}</h1>
            </div>
            <div data-aos='fade-right' className={style.carru}>
              <Slider imagenes={mockImagenes} />
            </div>
            <div className={style.mouseScroll}>
              <div className={style.arrowScroll}></div>
            </div>
          </div>
          ;
        </section>
      );
    };
    
    export default Projects;