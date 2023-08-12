

import { styled } from "@/styles/indexSt"


export const FolStyle = styled('footer', {
    backgroundColor: "$darkCyberBlue",
    padding: "1rem  6rem 1rem 6rem",
    ".fechar":{
        padding:"0.5rem 2rem",
            borderRadius:"2px",
            border:"solid 2px cyan",
            backgroundColor:"rgba(0, 255, 155, 0.2)",
            color: "lime",
            marginLeft:"0.5rem",
            "&:hover":{
                color:"rgba(0, 255, 95, 1)",//ver texto
                backgroundColor:"$blackOpa",
                border:"solid 1.5px rgba(0, 250, 155, 0.6)"
            }
    },
    ".formEsc":{
        backgroundColor:"rgba(0, 0, 0, 0.8)",
        width:"100%",
        height:"100vh",
        position:"fixed",
        padding:"5rem 0rem 0rem 10rem",
        top:0,
        left:0,
        ".formu":{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            zIndex:2000,
            label:{
                zIndex:2000,
                textAlign:'center',
                color:'cyan',
                padding:"0.4rem 0.5rem 0.25rem 0.4rem",
                display:'flex',
                flexDirection:"column-reverse",
                border:'solid 2px cyan',
                borderRadius:"4px",
                cursor: 'text',
                fontSize:"14px",
                fontFamily:"'Times New Roman', Times, serif'" ,
                "&:not(:first-child)":{
                    marginLeft:'12rem'
                },
                ".camp":{
                    zIndex:2000,
                    color:'lime',
                    padding:"0.2rem",
                    backgroundColor:"$darckCyberGreen",
                    borderRadius:"6px",
                    border:"solid 2px lime",
                    marginBottom:"0.5rem",
                    "&:focus":{
                        border:"solid 3px",
                        borderImage: "linear-gradient(to left, lime, cyan)",
                        borderImageSlice: 1
                    },
                    
                },
                "&:focus-within":{
                    border:"solid 3px",
                    borderImage: "linear-gradient(to right, lime, cyan)",
                    borderImageSlice: 1
                },
                
            },
            button:{
                zIndex:2000,
                padding:"1rem 2rem",
                borderRadius:"2px",
                border:"solid 2px cyan",
                backgroundColor:"$whiteCyberGreen",
                color: "$darckCyberBlue",
                marginLeft:"2rem",
                transform:"translateY(-10rem)",
                "&:hover":{
                    color:"lime",//ver texto
                    backgroundColor:"$blackOpa",
                    border:"solid 1.5px cyan"
                }
            }
        },
        ".fechar":{
            zIndex:2000,
            padding:"1rem 2rem",
                borderRadius:"2px",
                border:"solid 2px cyan",
                backgroundColor:"rgba(255, 0, 155, 0.2)",
                color: "rgba(255, 0, 95, 1)",
                marginLeft:"0.5rem",
                "&:hover":{
                    color:"rgba(255, 0, 95, 1)",//ver texto
                    backgroundColor:"$blackOpa",
                    border:"solid 1.5px rgba(255, 0, 155, 0.6)"
                }
        },
        ".labH":{
            color:"cyan"
        },
        ".Ccyan":{
            padding:"0.5rem",
            color:"cyan",
            backgroundColor:"rgba(0, 155, 255, 0.15)",
            border:"solid 2px cyan",
            borderRadius:"4px",
            maxWidth:"40%",
            marginBottom:"1rem"
        },
        ".labH.Cgreen":{
            padding:"0.5rem",
            color:"lime",
            backgroundColor:"rgba(0, 255, 155, 0.15)",
            border:"solid 2px $CyberGreen",
            borderRadius:"4px",
            maxWidth:"40%",
            marginBottom:"1rem"
        },
        ".labH.Cred":{

            padding:"0.5rem",
            color:"rgba(255, 0, 95, 1)",
            backgroundColor:"rgba(255, 0, 155, 0.15)",
            border:"solid 2px rgba(255, 0, 155, 0.6)",
            borderRadius:"4px",
            maxWidth:"40%",
            marginBottom:"1rem"
        }
    },
    ".mensageEnvioN":{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        padding:"0.5rem",
        p:{
            color:'red'
        }
    },
    ".mensageEnvioS":{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        padding:"0.5rem",
        p:{
            color:'lime'
        }
    },
    ".escrever":{
        padding:"2rem 0.5rem 3rem 0.5rem",
        display: "flex",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottom:"solid 0.5px $whiteCyberGreen",
        ".Hh":{
            marginLeft:"1.5rem",
            marginTop:'1.8rem',
            fontSize: "2.4rem",
            opacity:0,
            transition:"all 6s ease",
            color: "$wayCyberBlue",
            ".Hh2":{
                transform:"translateY(-30.5px) translateX(1.8px)",                
                fontSize: "2.4rem",
                color:'$whiteCyberGreen'
            }
        },
        ".elemento":{    
            transform: "translate(-150px)",
            opacity:0,
            transition:"transform 3s ease , opacity 2s ease",
            
        },
        ".elemento.ativo":{           
            transform:"translate(0px)",
            opacity:1,
            ".Hh.hativo":{
                opacity:1,
            },       
        },
        
        
        div:{
            display: "flex",
            alignItems:"center",
            justifyContent:"space-between",
            padding: "0.5rem",
            "&:not(:last-child)":{
                marginLeft:"1rem"
            }
        },
        ".enviar":{
            flexDirection:"column",
            transition:"transform 2s ease , opacity 2s ease",
            transform:"translateY(50px)",
            opacity:0,
            div:{
                justifyContent:"space-between",
                input:{
                    border:'solid 1px $whiteCyza',
                    height:"4rem",
                    width:"25rem",
                    backgroundColor:"$whiteCyberGreen",
                    color: "$BlaCyberBlue",
                    borderRadius: "4px",
                    "&:focus":{                        
                        padding:"0.5rem",
                        backgroundColor:"rgba(0 , 255 ,200 ,0.4)" ,
                        border:'solid 1px white',
                        color:"lime"
                    }
                },
                button:{
                    marginLeft: '0.5rem',
                    borderRadius: "4px",
                    height:"4rem",
                    width:"15rem",
                    border:'solid 1px $whiteCyza',
                    cursor:"pointer",
                    backgroundColor: "$BlaCyberBlue",
                    color:"$whiteCyberGreen",
                    transition:"all 0.25s ease",
                    "&:hover":{
                        border:"solid 1px lime",
                        backgroundColor:"$wayCyberBlue",
                        color:"lime",
                        scale:1.05
                    }
                }
            },
            h4:{
                color: "white",
                marginTop: "0.2rem",

            }
        },
        ".enviar.ativo":{
            transform:"translate(0px)",
            opacity:1
        }   
    },
    ".Links1":{
        padding:"1rem 0.5rem 1.5rem 0.5rem",
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottom:"solid 0.5px $whiteCyberGreen",
        ".SysLog":{
            h2:{
                fontSize:"25px",
                transform:"translateY(12px)",
                color:"steelblue",
                marginLeft: "2rem",
                textAlign:"center"
            },
            ".LogSys":{
                opacity:0,
                transition:"all 5s ease"
            },
            ".LogSys.ativo":{
                opacity:1,
            }
        },
        ".socialIcons":{
            display: "flex",
            justifyContent:"space-between",
            alignItems:"center",
            
            ".icona":{
                display: 'flex',
                alignItems:"center",
                justifyContent:"center",
                padding:"1px",
                backgroundColor:"white",
                height:"4rem",
                width:"4rem",
                borderRadius:"50%",
                border:"solid 2px cyan",
                transition:"scale 0.5s ease",
                "&:not(:first-child)":{
                    marginLeft:"5px"
                },
                "&:hover":{
                    scale:1.2
                },
                ".icon":{
                    borderRadius:"10px",
                    height:"3rem",
                    width:"3rem"
                }
                
            },
        }

    },
    ".listaLink":{
        padding:"2rem 0.5rem 3rem 0.5rem",
        display:"flex",
        justifyContent:"space-between",
        width:"80rem",
        borderBottom:"solid 0.5px $whiteCyberGreen",
        ul:{
            width:"25%",
            padding:"0% 3% 0% 2%",
            "&:not(:last-child)":{
                borderRight:"solid 0.5px $whiteCyberGreen"
            },
            h3:{
                color:"cyan",
                marginBottom:"15px"
            },
            li:{
                color:"$whiteCyza",
                marginTop:"8px", 
                a:{
                    color:"$whiteCyza",
                    cursor:'pointer',
                    "&:hover":{
                        color:"cyan",
                        padding:"0.1rem"
                    }
                },       
            }

        }
    },
    ".fim":{
        padding:"2rem 0.5rem 3rem 0.5rem",
        width:"100%",
        ".polic":{
            padding:"0rem 2rem 0rem 2rem",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            div:{
                width:"35%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
            },
            h4:{
                fontSize:'11px',
                color:"$wayCyberBlue"
            }
        },
        ".Copy":{
            width:"100%",    
            marginTop:"3rem",
            display:'flex',
            justifyContent:"center",
            flexDirection:'column',
            h5:{
                margin:"0 auto",
                color:'white'
            },
            h6:{
                fontSize:'8.3px',
                paddingTop:"2px",
                margin:"0 auto",       
                color:'lime',
            }
        }
    },
    "@lgScreen":{
        ".escrever":{
            ".Hh":{
                ".Hh2":{
                    transform:"translateY(-59.5px) translateX(1.8px)"
                }
            }
        }
    },
    "@lgScreen2":{
        ".escrever":{
            
            ".Hh":{
                ".Hh2":{
                    transform:"translateY(-88.5px ) translateX(1.8px)"
                }
            }
        }
    },
    "@tablet":{
        ".escrever":{
            ".elemento":{width:"100%",},
            width:"100%",
            flexDirection:"column",
            ".Hh":{
                textAlign:"center",
                width:"100%",
                ".Hh2":{
                    textAlign:"center",
                    transform:"translateY(-30.5px ) translateX(1.8px)"
                }
            }
        },
    },

    "@tablet1":{
        ".escrever":{
            ".Hh":{
                ".Hh2":{
                    transform:"translateY(-59.5px ) translateX(1.5px )"
                }
            }
        },
        ".listaLink":{
            maxWidth:"60rem"
        },
        ".fim":{
            padding:"2rem 0rem 3rem 0rem",
            ".polic":{
                justifyContent:"center",
                div:{
                    width:"100%",
                    
                }
            },
            h4:{
                textAlign:"center",
                fontSize:'8px',
            }    
        },
        ".formu":{
            
            flexDirection:"column",
            label:{
                "&:not(:first-child)":{
                    marginTop:"5rem",
                    marginRight:"15rem"

                } 
           },
           button:{
            backgroundColor:"blue",
            transform: "translate(20rem, -45rem) !important" 
        }  
        }
    },
    

})
