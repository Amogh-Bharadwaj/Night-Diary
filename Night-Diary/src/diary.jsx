import React,{useState,useEffect} from "react"
import { useNavigate,useParams } from "react-router";
import {
    Flex,
    Box,
    Stack,
    VStack,
    Text,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Button,
    Textarea,
    Divider,
    Spinner
} from "@chakra-ui/react";

import{
    ArrowRightIcon,
    LockIcon,
    Search2Icon
} from "@chakra-ui/icons"

const Diary=()=>{
    // States
    const [myDiary,setDiary] = useState([]);
    const [message,setMessage] = useState("");
    const [loading,setLoading] = useState("none");
    const [title,setTitle]=useState("");
    const [searchQuery, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [error,setError] = useState("");
    // Routing
    const {name} = useParams();
    const navigate = useNavigate();

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    
    const getDate=()=>{
        let dateObj = new Date();
        let month = monthNames[dateObj.getMonth()];
        let h = dateObj.getHours();
        let m = dateObj.getMinutes();
        let day = String(dateObj.getDate()).padStart(2, '0');
        let year = dateObj.getFullYear();

        let zero = "";
        if(h==0)zero="0"
    
        let output = month  + ' '+ day  + ',' + year+' '+zero+h+':'+m;
        return output;
    }


    const Open=(t,m)=>{
        setTitle(t);
        setMessage(m);
    }
    
    const getTitle=(e)=>{
        setTitle(e.target.value);
    }
    const getMessage=(e)=>{
        setMessage(e.target.value);
    }

    const Clear=()=>{
        setMessage("");
    }

    const Exit=()=>{
        navigate('/');
    }
   
    const Delete=(time)=>{
        fetch(
            `/delete`,
            {
              method: "POST",
              body: JSON.stringify({
                time: time,
              }),
              headers: {
               "Content-type": "application/json",
            },
            }
          ).then((response) => response.json())
            .then((json) => {
              Diaries();
            })

    }
    
    
    const Post=(date)=>{  
        setLoading("block");  
       

        fetch(
            `/new`,
            {
              method: "POST",
              body: JSON.stringify({
                name:name,
                message:message,
                title:title,
                time: date,
              }),
              headers: {
               "Content-type": "application/json",
            },
            }
          ).then((response) => response.json())
            .then((json) => {
              let status = json.Status;
              if(status=="Successfully entered."){
                  console.log("Submit: ",status);
                
              }
              else{
                setError(status);
              }
              setLoading("none");  
              
            })
            setLoading("none"); 
    }

    const Diaries=()=>{
        
        setLoading("block");  
        fetch(
            `/diaries`,
            {
              method: "POST",
              body: JSON.stringify({
                name:name,
              }),
              headers: {
               "Content-type": "application/json",
            },
            }
          )
            .then((response) => response.json())
            .then((json) => {
              let diaries = json.Diaries;
              let i=0;
              setDiary(diaries);
              
            })
            setLoading("none");  
    }

    useEffect(() => {
     
        Diaries();
     }, [myDiary]);

    return(
        <Flex 
          direction="column"
          w="full"
          align="center"
          justify="center"
          p={10}
          bgGradient="linear(360deg, #232A33 ,black)"
        >

            <Text
             fontSize="5xl"
             textColor="white"
             my={10}
            >
                {name}'s Entry

            </Text>
            <Input 
             mt={10}
             mb={6}
             value={title}
             fontSize="2xl"
             fontWeight="bold"
             textColor="#b1caf0"
             placeholder="Title..."
             onChange={getTitle}
             w="full"
             h="8vh"
            />

            <Textarea
                w="full"
                h="60vh"
                bg="#292C2D"
                value={message}
                focusBorderColor="#292C2D"
                border="none"
                _focus={{boxShadow:"0px 5px 5px black"}}
                onChange={getMessage}
                boxShadow="0px 5px 5px black"
                fontSize="2xl"
                textColor="white"
                p={10}
                resize="none"
            />

           <Flex
            direction="row"
            bgGradient="linear(#676579,#01101a)"
            align="center"
            justify="space-evenly"
            boxShadow="0px 5px 5px black"
            w="45%"
            h="10vh">

            <Button
             w="15%"
             bgGradient="linear(green.500,green.700)"
             boxShadow="0px 5px 5px black" 
             _hover={{bgGradient:"linear(green.700,green.800)"}}
             onClick={()=>{Post(getDate())}}
            >
                <Text
                fontSize="lg"
                textColor="white"
                >
                    Post
                </Text>

            </Button>

            <Button
             w="15%"
             bgGradient="linear(yellow.300,yellow.500)"
             boxShadow="0px 5px 5px black" 
             _hover={{bgGradient:"linear(yellow,yellow.700)"}}
             onClick={Clear}
             mx={3}
            >
                <Text
                fontSize="lg"
                textColor="black"
                >
                    Clear
                </Text>

            </Button>

            <Button
             w="15%"
             bgGradient="linear(red.800,red.700)"
             boxShadow="0px 5px 5px black" 
             _hover={{bgGradient:"linear(red.800,red.500)"}}
             onClick={Exit}
             mx={3}
            >
                <Text
                fontSize="lg"
                textColor="black"
                >
                    Exit
                </Text>

            </Button>
        </Flex>

        <Divider w="75%" mt={10}/>

        <Text 
         my={7}
         fontSize="5xl"
         textColor="white"
        >
            My Diary
        </Text>

        <VStack
          spacing={6}
          mt={10}
          w="50%"
          h="50vh"
          overflowY="auto"

          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: "#3888ff",
              borderRadius: '24px',
            }}}

        >
            {
                (loading=="none" && myDiary.map((entry)=> {return(
                    <Box
                     
                     w="full"
                     h="25vh"
                     boxShadow="0px 2px 2px white"
                     textColor="white"
                     bgGradient="linear(to-r,#2a3545,black)"
                     p={10}
                    >
                        <Text 
                         fontSize="2xl"
                         >
                             {entry.time}
                             <br/>
                             {entry.title}
                         </Text>

                         <Button
                            w="15%"
                            
                            bgGradient="linear(green.300,green.700)"
                             mt={2}
                            _hover={{bgGradient:"linear(green.700,green.800)"}}
                            onClick={()=>{Open(entry.title,entry.message)}}
                        >
                            <Text
                            fontSize="lg"
                            textColor="white"
                            >
                                Open
                            </Text>

                        </Button>   

                        <Button
                            w="15%"
                            bgGradient="linear(red.300,red.700)"
                             mt={2}
                             ml={4}
                            _hover={{bgGradient:"linear(red.700,red.800)"}}
                            onClick={()=>{Delete(entry.time)}}
                        >
                            <Text
                            fontSize="lg"
                            textColor="white"
                            >
                                Delete
                            </Text>

                        </Button>   
                    </Box>
                )
                
            })
            )
            }
                <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
                display={loading}
                />

            

        </VStack>


        </Flex>
    )
}

export default Diary;
