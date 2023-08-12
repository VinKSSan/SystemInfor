import { styled } from "@/styles/indexSt"

import BackData from "../../../public/assets/PosterBinData.jpg"

export const SecHer  = styled('section', {
    

    backgroundColor: "rgba(255, 255 , 255 , 0.5)",
    backgroundImage: `url(${BackData})`,
    zIndex:10,
    borderBottom:"solid 2px lime",

    ".infor":{
        backgroundColor:"rgba(0, 0 , 0 , 0.8)",
        width:"100%",
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        h1:{
            color:'rgba( 0 , 255 , 255 , 0.8)',
            textAlign:"center",
            fontSize:"32px",
            padding:"5rem 3rem 0rem 3rem"
        }, 
        h3:{
            color:'rgba( 0 , 255 , 255 , 0.6)',
            textAlign:"center",
            fontSize:"18px",
            padding:"2rem 0rem 1rem 0rem"
        },
        h2:{
            color:"cyan",
            marginTop:"5rem",
            fontSize:"26px",
            maxWidth: "120rem",
        },   

        p:{
            color:"lime",
            fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            textIndent: "3rem",
            maxWidth: "120rem",
            marginLeft:"2rem",
            marginTop:"3rem",
            fontSize:"22px", 
        },
        ".divBen":{
            padding:"1rem"
        },
        ".beneficios":{
            "&:not(:first-child)":{
                marginBottom:"8rem",
                marginTop:"2rem",
            },
            "&:not(:last-child)":{
                marginTop:"8rem"
            },
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",   
            ".imaBene":{
                width:"60rem",
                borderRadius:"10px",
                border: "solid 0.5px cyan"
            },
            ".infoBene":{
                borderTop: "solid 0.5px cyan",
                maxWidth: "50%",
                height:"40rem",
                
                p:{
                    color:"lime",
                    fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    textAlign:"center",
                    maxWidth: "60rem",
                    marginLeft:"2rem",
                    marginTop:"1rem",
                    fontSize:"16px", 
                }
            }

        }
    },

    ".cardss": {
        padding:"2.5rem",
        backgroundColor:"black",
        ".cards":{
            ".card":{
                borderRadius:"12px",
                
                "&:not(:first-child)":{
                    marginTop:"2rem"
                }
            },
            
            ".divInfe":{
                padding:"0.5rem",
                borderRadius:"12px",
                backgroundColor: "$blackOpa",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height:"25rem",
                h3:{
                    textAlign:"center",
                    color:"cyan",
                    margin:"2rem",
                    fontSize:"22px",
                    maxWidth: "800px",
                },
                p:{
                    color:"lime",
                    textAlign:"center",
                    maxWidth: "80rem",
                    marginLeft:"2rem",
                    marginTop:"2rem",
                    fontSize:"18px", 
                    lineHeight:"2.5rem",
                },
                ".Imagem" : {
                    display:'flex',
                    alignItems:"center",
                    justifyContent:"center",
                    margin: "0rem 2rem 0rem 2rem" ,
                    backgroundColor:"$wayCyberBlue",
                    height:"100%",
                    width:"25%",


                }

            }
        }
    },
    "@tablet1":{
        width:"100%",
        p:{
            fontSize:"16px !important",
            padding:"0rem 2rem"
        },
        ".infor":{paddingBottom:"5rem"},
        ".beneficios":{
            width:"100%",
            flexDirection:"column",
            paddingTop:"5rem",
            ".infoBene":{
                width:"120rem",
                marginTop:"2rem",
                paddingTop:"1rem",     
                p:{
                    marginLeft: "0rem !important",
                }
            }
        },
        ".beneficios.ben2":{
            flexDirection: "column-reverse",
            marginBottom:"1rem !important"
        }
    },
    
})