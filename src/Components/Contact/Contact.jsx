import "./contact.css";
import emailjs from "@emailjs/browser";
import {
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import {
    AiOutlineInstagram,
    AiOutlineCodepen,
    AiFillLinkedin,
} from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";

// You can also use <link> for styles
import { useRef, useState } from "react";
// ..


function Contact() {
    const openLink = (url) => {
        window.open(url);
    };
    const toast = useToast();
    const form = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if (name !== "" || email !== "" || message !== "") {
            emailjs
                .sendForm(
                    "service_wy6n8et", //YOUR_SERVICE_ID
                    "template_wh6p0ek", //YOUR_TEMPLATE_ID
                    e.target,
                    "HYRUmW_c-FTx9yL3b" //YOUR_PUBLIC_KEY
                )
                .then(
                    (result) => {
                        console.log(name, email, message);
                        toast({
                            title: "Message sent",
                            description:
                                "Your message have been sent successfully",
                            status: "success",
                            duration: 2500,
                            isClosable: true,
                            position: "top",
                        });
                        setName("");
                        setEmail("");
                        setMessage("");
                        console.log(result.text);
                    },
                    (error) => {
                        toast({
                            title: "Error occurred",
                            description: "Something went wrong",
                            status: "error",
                            duration: 2500,
                            isClosable: true,
                            position: "top",
                        });
                        console.log(error.text);
                    }
                );
        } else if (name === "" || email === "" || message === "") {
            toast({
                title: "Please fill all details !",
                description: "",
                status: "warning",
                variant: "left-accent",
                duration: 2500,
                isClosable: true,
                position: "top",
            });
        }
    };
    return (
        <div className="contact-main" id="contact">
            <div className="text-divider-contact"></div>
            <div className="headingwrapper">
                <h1 className="contactheading">Contact</h1>

                <Box
                    bg="#1a1a1a transparent"
                    color="white"
                    id="contact_all"
                    border={"1px solid rgba(255, 255, 255, 0.125)"}
                    borderRadius="15px"
                    m={{ sm: 2, md: 12, lg: 8 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box
                        
                        className="contact_main"
                       
                    >
                        <Box
                            
                            id="contact_details">
                            <Box>
                                <Heading>Details</Heading>
                                <Text
                                    mt={{ sm: 3, md: 3, lg: 5 }}
                                    color="gray.500">
                                    Fill up the form below to contact
                                </Text>
                                <Box
                                    py={{
                                        base: 5,
                                        sm: 5,
                                        md: 8,
                                        lg: 10,
                                    }}>
                                    <VStack
                                        pl={0}
                                       
                                        textAlign="left">
                                        <Button
                                          
                                            border={"2px solid transparent"}
                                            size="md"
                                            height="48px"
                                            width="80%"
                                            variant="ghost"
                                            color="#DCE2FF"
                                            textAlign="left"
                                            id="contact-phone"
                                            _hover={{
                                                border: "2px solid rgba(255, 255, 255, 0.125)",
                                            }}
                                            onClick={() =>
                                                openLink("tel:9011331705")
                                            }
                                            leftIcon={
                                                <MdPhone
                                                    color="#3a78ec"
                                                    size="20px"
                                                />
                                            }>
                                            +919011331705
                                        </Button>
                                        <Button
                                           
                                            border={"2px solid transparent"}
                                            size="md"
                                            height="48px"
                                            width="80%"
                                            variant="ghost"
                                            color="#DCE2FF"
                                            id="contact-email"
                                            textAlign="left"
                                            _hover={{
                                                border: "2px solid rgba(255, 255, 255, 0.125)",
                                            }}
                                            onClick={() =>
                                                openLink(
                                                    "mailto:mrunagabhane@gmail.com"
                                                )
                                            }
                                            leftIcon={
                                                <MdEmail
                                                    color="#3a78ec"
                                                    size="20px"
                                                />
                                            }>
                                            mrunagabhane@Gmail.com
                                        </Button>
                                    </VStack>
                                </Box>
                                <Box
                                    mt={{ lg: 10, md: 10 }}
                                    spacing={5}
                                    px={5}
                                    alignItems="flex-start">
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        isRound={true}
                                        id="contact-github"
                                        onClick={() =>
                                            openLink(
                                                "https://github.com/MrunaliGabhane"
                                            )
                                        }
                                        _hover={{
                                            bg: "rgba(255, 255, 255, 0.125)",
                                        }}
                                        icon={<BsGithub size="28px" />}
                                    />
                                    <IconButton
                                        aria-label="codepen"
                                        variant="ghost"
                                        size="lg"
                                        isRound={true}
                                        onClick={() =>
                                            openLink(
                                                "https://codesandbox.io/u/MrunaliGabhane"
                                            )
                                        }
                                        _hover={{
                                            bg: "rgba(255, 255, 255, 0.125)",
                                        }}
                                        icon={<AiOutlineCodepen size="28px" />}
                                    />
                                    <IconButton
                                        aria-label="linkedin"
                                        id="contact-linkedin"
                                        variant="ghost"
                                        size="lg"
                                        isRound={true}
                                        onClick={() =>
                                            openLink(
                                                "https://www.linkedin.com/in/mrunali-gabhane-456b2a232/"
                                            )
                                        }
                                        _hover={{
                                            bg: "rgba(255, 255, 255, 0.125)",
                                        }}
                                        icon={<AiFillLinkedin size="28px" />}
                                    />
                                    <IconButton
                                        aria-label="instagram"
                                        variant="ghost"
                                        size="lg"
                                        isRound={true}
                                        _hover={{
                                            bg: "rgba(255, 255, 255, 0.125)",
                                        }}
                                        onClick={() =>
                                            openLink(
                                                "https://www.instagram.com/mrunali_gabhane/"
                                            )
                                        }
                                        icon={
                                            <AiOutlineInstagram size="28px" />
                                        }
                                    />
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            
                            bg="rgba(255, 255, 255, 0.125)"
                            borderRadius="lg"
                            id="contact_fill"
                            border={"1px solid rgba(255, 255, 255, 0.125)"}>
                            <Box m={8} color="white">
                                <form
                                   
                                    ref={form}
                                    onSubmit={sendEmail}>
                                    <FormControl id="name">
                                        <FormLabel
                                            style={{
                                                margin: "20px 0px 0px 0px",
                                            }}>
                                            Your Name
                                        </FormLabel>
                                        <InputGroup borderColor="#E0E1E7">
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={
                                                    <BsPerson color="gray.800" />
                                                }
                                            />
                                            <Input
                                                type="text"
                                                size="md"
                                                name="name"
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                placeholder="Your name"
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl id="name">
                                        <FormLabel
                                            style={{
                                                margin: "20px 0px 0px 0px",
                                            }}>
                                            Email
                                        </FormLabel>
                                        <InputGroup borderColor="#E0E1E7">
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={
                                                    <MdOutlineEmail color="gray.800" />
                                                }
                                            />
                                            <Input
                                                type="email"
                                                size="md"
                                                name="email"
                                                placeholder="Email address"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl id="name">
                                        <FormLabel
                                            style={{
                                                margin: "20px 0px 0px 0px",
                                            }}>
                                            Message
                                        </FormLabel>
                                        <Textarea
                                            borderColor="gray.300"
                                            _hover={{
                                                borderRadius: "gray.300",
                                            }}
                                            placeholder="Write your greeting"
                                            name="message"
                                            value={message}
                                            onChange={(e) =>
                                                setMessage(e.target.value)
                                            }
                                        />
                                    </FormControl>
                                    <FormControl id="name" float="right">
                                        <Button
                                            style={{
                                                margin: "20px 0px 20px 0px",
                                            }}
                                            variant="solid"
                                            border={"2px solid transparent"}
                                            bg="linear-gradient(
                                                90deg,
                                                #fbcd59,
                                                rgba(91, 91, 236, 1) 44%,
                                                rgba(26, 150, 236, 1) 99%
                                              );"
                                            transition={"all .2s ease-in-out"}
                                            color="white"
                                            type="submit"
                                            value="Send"
                                            _hover={{
                                                bgColor: "transparent",
                                                border: "2px solid blue",
                                                boxShadow:
                                                    "rgba(255, 255, 255, 0.125) 0px 3px 8px",
                                            }}>
                                            Send Message <span>&nbsp;</span>
                                            <FiSend />
                                        </Button>
                                    </FormControl>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default Contact;