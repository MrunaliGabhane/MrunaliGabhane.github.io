import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "./Project.module.css";
import { FaArrowRight, FaGithub } from "react-icons/fa";

export default function MajorProject({ colorMode }) {
  return (
    <div id="projects" className={style.majorMain}>
      <div className="project-card" id={style.major_projectDiv}>
        <Box className={style.major_project_imgDiv}>
          <Image
            className="project-skills-card-img"
            src="./infinityStone.png"
            alt="Infinity Stone"
          />
        </Box>

        <Box
          className={style.major_project_detailsDiv}
          color={colorMode === "light" ? "#4C3575" : "#371B58"}>
          <Heading
            className="project-title"
            id={style.major_project_detailsDiv_Heading}
            size={["md", "md", "md", "lg"]}>
            Infinity Stone
          </Heading>
          <Heading
            className="project-description"
            id={style.major_project_detailsDiv_detail}
            fontWeight="500"
            size={["xs", "sm", "sm", "md"]}>
            CaratLane is an Indian physical and online jewelry retailer,
            headquartered in Chennai, India
          </Heading>
          <Heading
            className="project-tech-stack"
            id={style.major_project_detailsDiv_tehcs}
            size={["sm", "sm", "sm", "sm"]}>
            Tech Stack: React.js | Redux | CSS | ChakraUI | MongoDB | Node.js | Express.js
          </Heading>
          <Box
            className="project-card-btn"
            id={style.major_project_detailsDi_btnDiv}>
            <Button
              className="project-card-btn"
              size={["xs", "sm", "sm", "sm"]}>
              <a
                className="project-github-link"
                id={style.links}
                rel="noreferrer"
                href="https://github.com/VivekTomar03/CaratLane--Clone"
                target="_blank">
                Source Code
              </a>
              &nbsp;
              <FaGithub />
            </Button>
            <Button
              className="project-deployed-link"
              size={["xs", "sm", "sm", "sm"]}>
              <a
                className={style.links}
                rel="noreferrer"
                href="https://infinity-stone.vercel.app/"
                target="_blank">
                Live
              </a>
              &nbsp;
              <FaArrowRight />
            </Button>
          </Box>
        </Box>
      </div>

      <div className="project-card" id={style.major_projectDiv}>
        <Box className={style.major_project_imgDiv}>
          <Image
            className="project-skills-card-img"
            src="./tripbuddy.png"
            alt="tripbuddy"
          />
        </Box>

        <Box
          className={style.major_project_detailsDiv}
          color={colorMode === "light" ? "#4C3575" : "#371B58"}>
          <Heading
            className="project-title"
            id={style.major_project_detailsDiv_Heading}
            size={["sm", "sm", "sm", "lg"]}>
            TripBuddy
          </Heading>
          <Heading
            className="project-description"
            id={style.major_project_detailsDiv_detail}
            fontWeight="500"
            size={["xs", "sm", "sm", "md"]}>
            TripBuddy is a comprehensive platform for unforgettable stays and
            seamless travel experiences.
          </Heading>
          <Heading
            className="project-tech-stack"
            id={style.major_project_detailsDiv_tehcs}
            size={["sm", "sm", "sm", "sm"]}>
            Tech Stack: Angular | Python | Flask | MongoDB | Gen-Al
          </Heading>
          <Box
            className="project-card-btn"
            id={style.major_project_detailsDi_btnDiv}>
            <Button
              className="project-card-btn"
              size={["xs", "sm", "sm", "sm"]}>
              <a
                className="project-github-link"
                id={style.links}
                rel="noreferrer"
                href="https://github.com/MrunaliGabhane/TripBuddy"
                target="_blank">
                Source Code
              </a>
              &nbsp;
              <FaGithub />
            </Button>
            <Button
              className="project-deployed-link"
              size={["xs", "sm", "sm", "sm"]}>
              <a
                className={style.links}
                rel="noreferrer"
                href="https://transcendent-strudel-df4d5f.netlify.app"
                target="_blank">
                Live
              </a>
              &nbsp;
              <FaArrowRight />
            </Button>
          </Box>
        </Box>
      </div>

      <div className="project-card" id={style.major_projectDiv}>
        <div className={style.major_project_imgDiv}>
          <Image
            className="project-skills-card-img"
            src="./royalElectronics.png"
            alt="aerowear"
          />
        </div>

        <div
          className={style.major_project_detailsDiv}
          color={colorMode === "light" ? "#4C3575" : "#371B58"}>
          <Heading
            className="project-title"
            id={style.major_project_detailsDiv_Heading}
            size={["md", "md", "md", "lg"]}>
            RoyalElectronics.com
          </Heading>
          <Heading
            className="project-description"
            id={style.major_project_detailsDiv_detail}
            fontWeight="500"
            size={["xs", "sm", "sm", "md"]}>
            Royal Electronics is a clone of Bestbuy.com. It is E-Commerce
            platform that provides Electronic gadgets.
          </Heading>
          <Heading
            className="project-tech-stack"
            id={style.major_project_detailsDiv_tehcs}
            size={["sm", "sm", "sm", "sm"]}>
            Tech Stack: HTML| CSS | JavaScript
          </Heading>
          <div
            className="project-card-btn"
            id={style.major_project_detailsDi_btnDiv}>
            <Button
              // id={style.btn_Prj}
              className="project-card-btn"
              size={["xs", "sm", "sm", "sm"]}>
              <a
                className="project-github-link"
                id={style.links}
                rel="noreferrer"
                href="https://github.com/faizal-siddiqui/Royal-Electronics"
                target="_blank">
                Source Code
              </a>
              &nbsp;
              <FaGithub id={style.links} />
            </Button>
            <Button
              className="project-deployed-link"
              size={["xs", "sm", "sm", "sm"]}
              // id={style.btn_Prj}
            >
              <a
                id={style.links}
                rel="noreferrer"
                href="https://animated-snickerdoodle-485283.netlify.app/index.html"
                target="_blank">
                Live
              </a>
              &nbsp;
              <FaArrowRight id={style.links} />
            </Button>
          </div>
        </div>
      </div>

      <div className="project-card" id={style.major_projectDiv}>
        <Box className={style.major_project_imgDiv}>
          <Image
            className="project-skills-card-img"
            src="./SquidGame.png"
            alt="SquidGame"
          />
        </Box>

        <Box
          className={style.major_project_detailsDiv}
          color={colorMode === "light" ? "#4C3575" : "#371B58"}>
          <Heading
            className="project-title"
            id={style.major_project_detailsDiv_Heading}
            size={["md", "md", "md", "lg"]}>
            Squid Game
          </Heading>
          <Heading
            className="project-description"
            id={style.major_project_detailsDiv_detail}
            fontWeight="500"
            size={["xs", "sm", "sm", "md"]}>
            The Green Light Red Light Game is a web based recreation of the
            iconic green light/red light game from Squid Games.
          </Heading>
          <Heading
            className="project-tech-stack"
            id={style.major_project_detailsDiv_tehcs}
            size={["sm", "sm", "sm", "sm"]}>
            Tech Stack: React.js | Redux | CSS | ChakraUI | MongoDB | Node.js | Express.js
          </Heading>
          <Box
            className="project-card-btn"
            id={style.major_project_detailsDi_btnDiv}>
            <Button
              className="project-card-btn"
              size={["xs", "sm", "sm", "sm"]}>
              <a
                className="project-github-link"
                id={style.links}
                rel="noreferrer"
                href="https://github.com/MrunaliGabhane/IconicGreenRed_light_game"
                target="_blank">
                Source Code
              </a>
              &nbsp;
              <FaGithub />
            </Button>
            <Button
              className="project-deployed-link"
              size={["xs", "sm", "sm", "sm"]}>
              <a
                className={style.links}
                rel="noreferrer"
                href="https://resilient-toffee-9bded5.netlify.app/"
                target="_blank">
                Live
              </a>
              &nbsp;
              <FaArrowRight />
            </Button>
          </Box>
        </Box>
      </div>

      <div className="project-card" id={style.major_projectDiv}>
        <Box className={style.major_project_imgDiv}>
          <Image
            className="project-skills-card-img"
            src="./mealMover.png"
            alt="Toptrip"
          />
        </Box>

        <Box
          className={style.major_project_detailsDiv}
          color={colorMode === "light" ? "#4C3575" : "#371B58"}>
          <Heading
            className="project-title"
            id={style.major_project_detailsDiv_Heading}
            size={["md", "md", "md", "lg"]}>
            MealMover.com
          </Heading>
          <Heading
            className="project-description"
            id={style.major_project_detailsDiv_detail}
            fontWeight="500"
            size={["xs", "sm", "sm", "md"]}>
            MealMover is the clone of El Pollo Loco.com. It is a flame-grilled
            chicken delivery website .
          </Heading>
          <Heading
            className="project-tech-stack"
            id={style.major_project_detailsDiv_tehcs}
            size={["sm", "sm", "sm", "sm"]}>
            Tech Stack: React.js | Javascript | chakra UI | CSS
          </Heading>
          <Box
            className="project-card-btn"
            id={style.major_project_detailsDi_btnDiv}>
            <Button
              className="project-card-btn"
              size={["xs", "sm", "sm", "sm"]}>
              <a
                className="project-github-link"
                id={style.links}
                rel="noreferrer"
                href="https://github.com/MrunaliGabhane/haloed-haircut-8824"
                target="_blank">
                Source Code
              </a>
              &nbsp;
              <FaGithub />
            </Button>
            <Button
              className="project-deployed-link"
              size={["xs", "sm", "sm", "sm"]}>
              <a
                className={style.links}
                rel="noreferrer"
                href="https://astonishing-pika-ce8ecd.netlify.app/"
                target="_blank">
                Live
              </a>
              &nbsp;
              <FaArrowRight />
            </Button>
          </Box>
        </Box>
      </div>

      
    </div>
  );
}
