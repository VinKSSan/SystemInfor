import { styled } from "@/styles/indexSt";
import grafaImage from "../../../public/assets/grafaIma.jpg"
import grafanaThumb from "../../../public/assets/grafanaThumb.jpg"

export const grafaI = grafaImage.src

const grafThum = grafanaThumb.src
export const GrafSecSty = styled('section', {
    backgroundImage:`url(${grafaI})`,
    backgroundSize:"cover",
    backgroundPosition:"center",
    height:"96.6vh",
    padding:'5rem',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width:"100%",
    overflow:"auto",
    borderBottom:"solid 2px blue",
    display:"flex",
    flexDirection: "column",
    ".grafaDiv":{
        padding:"5rem",
        display:"flex",
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderTop:"solid 4px cyan",
        p:{
            fontSize: "18px",
            color:"rgba(0, 250,250, 0.9)",
            marginTop:"2rem"
        },
        h2:{
            fontSize:"20px",
            color:"cyan",
        }

    },
    ".divVid":{
        marginTop:"5rem",
        ".thumb":{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            height:"30rem",
            margin:"0 auto",
            width:"40%",
            backgroundImage:`url(${grafThum})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            borderRadius:"5px",
            border:"solid 2px cyan",
            button:{
                border:"solid 1px cyan",
                backgroundColor:"$blackOpa",
                padding:"1rem 0rem 1rem 1.5rem",
                borderRadius:"50%"
            }

        }
    },
    ".divVid.ativo":{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        position:"fixed",
        left:0,
        top:0,
        zIndex:2000,
        height:"100vh",
        width:"100%",
        backgroundColor:"$blackOpa",
        ".btnFechar":{
            width:"80%",
            height:"8rem",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"$wayCyberBlue",
            button:{
                padding:"1rem",
                textAlign:"center",
                color:"lime",
                borderRadius: "10px",
                backgroundColor:"$blackOpa",
                width:"22rem",
                
            }
        }
    },
    ".divVideo":{
        height:"80vh",
        maxWidth:"100%",
        backgroundColor:"$blackOpa",

        ".video" :{
            width:"100%",
            maxHeight:"100%",
            backgroundColor: 'rgba(0,0,0,0.4)',
        }
    }

    


} )