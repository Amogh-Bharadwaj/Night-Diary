import React,{useState} from "react"
import { useNavigate } from "react-router";
import {
    Flex,
    Stack,
    VStack,
    Text,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Button
} from "@chakra-ui/react";

import{
    ArrowRightIcon,
    LockIcon,
} from "@chakra-ui/icons"

const Entry=()=>{
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [error,setError]= useState("");
    const navigate= useNavigate();

    const getName=(e)=>{
        setName(e.target.value);
        //console.log("Name",name);
    }

    const getPass=(e)=>{
        setPass(e.target.value);
        //console.log("Pass",pass);
    }

    const Login=()=>{

      // Sanity checks.
      if(name.length==0){
        setError("[ Please enter your name. ]");
      }
      
      else if(name.length > 50){
        setError("[ Username too long. ]")
      }

      else if(pass.length==0){
        setError("[ Password cannot be empty. ]")
      }

      else if(pass.length>100){
        setError("[ Password size overflow. ]")
      }

      else{
        fetch(
          `/entry`,
          {
            method: "POST",
            body: JSON.stringify({
              username:name,
              password:pass,
            }),
            headers: {
             "Content-type": "application/json",
          },
          }
        )
          .then((response) => response.json())
          .then((json) => {
            let status = json.Status;
            if(status=="Successfully entered." || status=="New user account created."){
              localStorage.setItem("jwt", json.JWT);
              console.log(json.JWT)
              navigate('/diary/'+name,{state:{Name:name}});
            }
            else{

              setError(status);
            }
            
          })

      }
    }

    return(
        <Flex 
          direction="column"
          w="100vw"
          h="100vh"
          align="center"
          bgColor="black"
          justify="center"
          bgGradient="linear(360deg, #232A33 ,black)"
        >
            <VStack
              align="center"
              spacing={6}
              h="full"
              justify="center"
              textColor="whiteAlpha.100"
            >   

                <Text
                  textColor="blue.400"
                  fontSize={{base:"2xl",md:"4xl"}}
                  my={5}
                >
                    Night Diary
                </Text>

                <Text
                  textColor="blue.200"
                  fontSize={{base:"sm",md:"2xl"}}
                >
                    Your own safe space to let it all out.
                </Text>

                
                  <FormControl 
                   px={5}
                   h="30%">
                        <InputGroup my={5}>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<ArrowRightIcon color="white"/>}
                        />
                          
                        
                        <Input 
                        focusBorderColor="white"
                          textColor="white"
                          onChange={getName}
                          placeholder="Your name.."></Input>
                        
                        </InputGroup>

                        <InputGroup>
                         <InputLeftElement 
                           pointerEvents="none"
                           children={<LockIcon color="white"/>}
                           />
                           <Input 
                            type="password"
                            focusBorderColor="white"
                            textColor="white"
                            onChange={getPass}
                            placeholder="Enter your password.." />

                       
                        </InputGroup>

                        <Button
                          h="15%"
                          w="100%"
                          onClick={Login}
                          bgColor="#093A53"
                          textColor="whiteAlpha.600"
                          _hover={{bgColor:"#0C3E66"}}
                          boxShadow="0px 4px 4px #031A2D "
                          _selected={{bg:"None"}}
                          _active={{bg:"None"}}
                          mt={5}
                          mb={7}
                        >
                            <Text fontSize="lg">Enter</Text>
  
                        </Button>
                </FormControl>

                <Text 
                 textColor="red.700"
                 fontSize="2xl"
                >
                  {error}
                </Text>
              
                <Text
                 mt={5}
                 px={5}
                 textColor="#B5E1F8"
                >This site can't see your password. <Link textColor="#67C1EF">Learn more.</Link></Text>


            </VStack>
          

        </Flex>
    )
}

export default Entry;
