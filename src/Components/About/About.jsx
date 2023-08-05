import { Box, Heading, Image, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./About.module.css";
import { FaDownload } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

export default function About() {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <div id="about" className="about section">
      <div
        id="About"
        style={{
          height: "10px",
          border: "0px solid blue",
          padding: "10px",
        }}></div>
      <Heading
        size={["xl", "xl", "xl", "xl"]}
        textAlign="center"
        fontFamily="Bree Serif, serif"
        color="white">
        About Me
      </Heading>
      <div>
        <div id={style.aboutDiv} color="white">
          <div id={style.first}>
            <Image
              className="home-img"
              src="MrunaliProfile.png"
              alt="Mrunali Gabhane"
            />
          </div>

          <div className={style.aboutDetails}>
            <div className="aboutMe" id="user-detail-intro">
              <p className={style.namep}>
                <span  id="user-detail-name">I am Mrunali Gabhane.</span> Highly skilled and motivated Full Stack Web Developer proficient in MERN stack with +1200 hours of coding experience. Demonstrated ability to build solo and collaborative projects, showcasing strong problem-solving skills. Adaptable and quick to grasp new tech stacks, including Generative AI. A valuable team player with a commitment to excellence and continuous learning.
              </p>
            </div>

            <div id={style.resumeDiv} backgroundColor="white">
              <a
                id="resume-link-2"
                className={style.resumeButton}
                href="https://drive.google.com/uc?id=1NoymNKYhExbh215o9-TVQ2v0_vFBJVre&export=download"
               >
                <div
                  style={{
                    border: "0px solid green",
                    padding: "5px",
                    marginRight: "5px",
                  }}
                  onClick={() =>
                    openLink(
                      "https://drive.google.com/file/d/1NoymNKYhExbh215o9-TVQ2v0_vFBJVre/view?usp=share_link"
                    )
                  }
                  id="resume-button-2">
                  Resume
                </div>
                <HiDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
