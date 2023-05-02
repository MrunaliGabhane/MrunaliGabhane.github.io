import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaTwitter, FaGofore } from 'react-icons/fa'
import style from './Footer.module.css'



export default function Footer({ colorMode }) {
    return (
      <Box
        className="footer"
        id={style.footer_mainDiv}
        
      >
        <Box
          id={style.footer_mainDiv1}
          color= "white"
        >
          <Heading fontFamily="Bree Serif, serif" id={style.footer_head}>
            Get In Touch
          </Heading>
          <Heading fontFamily="Bree Serif, serif" id={style.footer_head1}>
            You can reach out to me at
          </Heading>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <FaGofore />
            &nbsp; <p>mrunagabhane@gmail.com</p>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <FaPhone />
            &nbsp; <p>+91 9011331705</p>
          </Box>
        </Box>

        <Box
          id={style.footer_mainDiv2}
          backgroundColor="white"
        >
          <Box id={style.footer_aDiv}>
            <a
              href="https://www.instagram.com/mrunali_gabhane/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
             
            <a
              href="https://www.linkedin.com/in/mrunali-gabhane-456b2a232/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/mrunaligabhane"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </Box>
        </Box>
        <Box
          id={style.footer_mainDiv3}
          backgroundColor= "white"
        >
          <p>Created By Mrunali Gabhane | © 2023. All Rights Reserved</p>
        </Box>
      </Box>
    );
}
