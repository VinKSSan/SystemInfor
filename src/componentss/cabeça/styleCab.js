
import { styled } from "../../styles/indexSt";
import cyanInter from "../../../public/assets/interCyan.jpg"

export const Div = styled("div",{
    backgroundImage:`url(${cyanInter.src})`,
    backgroundSize:"100%100%",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    width:"100%",
    height:"26rem",
    ".outDiv":{
        backgroundColor:"rgba(0,0,0,0.6)",
    }
}) 

export const Hed = styled("header",{
    margin:"0rem 25rem 0rem 25rem",
    borderRadius:"10px",
    height:"24rem",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-between",
    borderLeft: "solid 2px $wayCyberBlue",
    borderRight: "solid 2px  $wayCyberBlue",
    backgroundColor:"$darkCyberBlue",
    h1:{
        textAlign:"center",
        color:"$wayWhiteCy",
        fontSize:"32px"
    },
    div:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        '.logos':{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection: "column",
            a:{
                margin:10,
            }
        },
        '.divNav':{
            width:600,       
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
           
            nav:{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                ul:{
                    width:400,
                    justifyContent:"end",
                    display:"flex",
                    flexDirection:"column",
                    a:{
                        justifyContent:"end",
                        display:"flex",
                        cursor:"pointer",
                        
                        "&:not(:last-child)": {
                            marginBottom:"0.2rem"
                        },
                        
                        li:{
                            backgroundColor:"$blackOpa",
                            "&:hover":{
                                padding:"0.2rem",
                                color:"blue",
                                border:"solid 1px lime",
                                backgroundColor:"$blackOpa",
                                h3:{
                                    color:"lime",
                                    marginRigth:5,
                                },
                                ".imag":{
                                    transition:"all ease 0.5s",
                                    transformOrigin:"center",
                                    transform:"rotate(90deg)",
                                    padding:"0.1rem",
                                    backgroundColor:"$whiteCyza",
                                    border:"solid 0.2px lime",
                                    borderRadius:"50%",
                                    zIndex:0,
                                }
                            },
                            
                            paddingRight:10,
                            width:400,
                            display:"flex",
                            alignItems:"center",
                            flexDirection:"row",
                            justifyContent:"space-between",
                            border:"solid 1px $wayCyberBlue",
                            h3:{
                                color:"cyan",
                                marginRigth:5,
                            },
                            ".scroll":{
                                cursor: 'pointer',
                                color:"$CyberGreen",
                                border:"none",
                                borderRight:"solid 1px white",
                                width:"20%",
                                height:"100%",
                                marginRigth: "100px",
                                backgroundColor:"transparent"
                            }

                        }
                    }    
                }    
            }           
        }
    },
    "@tablet2":{
        margin:"0rem 20rem 0rem 20rem",
        '.logos':{
            transform:"translateY(-2rem)",
        }

    }

})