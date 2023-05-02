import { Heading } from '@chakra-ui/react'
import React from 'react'
import MajorProject from './MajorProject'

import style from './Project.module.css'

export default function Project({ colorMode }) {
    return (
      <div
        id="projects"
       
      >
        <div id="Projects" style={{ height: "100px" }}></div>
        <div className="projects-projects" id={style.projects}>
          <Heading
            size={["xl", "xl", "xl", "xl"]}
            textAlign="center"
             fontFamily= "Bree Serif, serif"
            color="white"
          >
            Projects
          </Heading>
          <MajorProject colorMode={colorMode} />
        </div>
      </div>
    );
}
