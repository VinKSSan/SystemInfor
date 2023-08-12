//position:"fixed",
import { styled } from "@stitches/react";


export const Ddiv = styled("div", {
    backgroundColor:"black",
    border:"solid 2px #000",
    height:"2.5rem",
    display:"flex",
    alignItems:"center",
    overflow:'hidden',
    justifyContent:"space-between",
    padding:"0px 20px 0px 20px",
    whiteSpace:"nowrap",
    zIndex: 1000,

    div:{
        ".topic":{
            width:"25%",
            height:25,
            display:"inline-block",
            padding:"0px 20px 0px 5px",
            textAlign:"center",
            borderLeft: 'solid 1px green',
            h4:{
                fontSize:"11.5px",
                margin:"5px 0px 0px 0px",
                color:'Green'
            }
        }
        
    }

})