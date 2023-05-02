import { Flex, VStack, Image, Box, Heading, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import style from "./Home.module.css"

export default function Home() {

    const [isSmallScreen] = useMediaQuery('(min-width: 680px)')
    const [isMediumScreen] = useMediaQuery('(min-width: 1180px)')

    return (
      <div id="home">
        <div
          id={style.home}
          style={{ color:  "white" }}
        >
          <div className={style.img_txt_wrapper}
            
          >
            <img
              id={style.myImg}
              src="https://camo.githubusercontent.com/6f5e3ead776bc722fbfc3da2c8b1454a7a5f27a07b34c0ced075f90a6c25a3be/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313630302f302a4b32574c4d5445784c79696461374f522e676966"
              alt="logo"
            />
            <div id={style.myDetailsDiv}>
              <h1 id={style.myName}>
                <span>
                  Hey,
                </span>
                <br /> I am Mrunali Gabhane
              </h1>
              <h3 id={style.title}>Full Stack Web Developer</h3>
            </div>
          </div>
          <div className={style.quote} style={{ marginTop: "20px",fontFamily: 'Bree Serif, serif' }}>
            <img  
              src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=light"
              alt=""
            />
          </div>
        </div>
      </div>
    );
}
