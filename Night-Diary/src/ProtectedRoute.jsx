import React,{useState,useContext} from 'react';
import { Outlet, Navigate} from 'react-router-dom';
import Protected from './Protection';
import { Spinner, Center, Text,Flex } from "@chakra-ui/react";


const PrivateRoute =  ({component: Component, ...rest}) => {
    
    
   
    const [check,setCheck] = useState(-1);
    Protected().then((pass)=>{setCheck(pass);console.log("Protection inside promise:",pass);})
    console.log("Protection inside private route:",check);
   
    
        if (check==-1) {
            return (
                <Center 
                h="100vh" 
                bgGradient="linear(360deg, #232A33 ,black)"
                >   
                <Flex 
                 direction="column"
                 w="full"
                 align="center"
                 >
                    <Spinner 
                      size="xl" 
                      color="white" />

                    <Text 
                     mt={5}
                     color="white"
                     fontFamily="monospace" 
                     fontSize="2xl">
                         Getting ready...
                    </Text>

                 </Flex>
                    
                </Center>
            );
        } else if (check==1 ) {
            console.log("found user");
            return (<Outlet />);
        } else {
            console.log("redirecting to landing page");
            return <Navigate to="/" />;
        }



   
    
};

export default PrivateRoute;
