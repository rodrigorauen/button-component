import React from "react";
import { Button, ButtonDiv } from "../../styles/button/style";
import { FiArrowRight, FiCheck, FiRefreshCw } from "react-icons/fi"


export function ButtonComponent(props) {
    const objPrimary = {
        normal:{
            background: '#026C00',
            color: 'white',
        },
        hover:{
            background: '#079504',
            color: 'white',
        },
        active: {
            background: '#013C00',
            color: 'white',
        },
        disabled:{
            background: '#B7D0B6',
            color: 'white',
        },
    };

    const objSecondary ={
        normal:{
            background: '#F7C346',
            color: 'black',
        },
        hover:{
            background: '#FFDF77',
            color: 'black',
        },
        active: {
            background: '#DCAC0D',
            color: 'black',
        },
        disabled:{
            background: '#FFE58D',
            color: 'white',
        },
    };

    let obj = objPrimary
    props.primary ? obj = objPrimary : obj = objSecondary

    let icon = props.icon;
        switch (icon){
            case 'arrow-right':
                icon = <FiArrowRight/>
                break;
            case 'check':
                icon = <FiCheck/>
                break;
            case 'refresh':
                icon = <FiRefreshCw/>
                break;
            default :
                icon = '';
                break; 
        };
    
    return(
       
        <Button disabled={props.desativado} primary={props.primary} color={obj}>
            {props.text}
            {icon}
        </Button>
        
        
        
    );
};
