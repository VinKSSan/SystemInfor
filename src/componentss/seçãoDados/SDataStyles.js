import { styled } from "@/styles/indexSt";

export const SDat = styled("section" , {
    backgroundColor:"rgba(10 , 25 ,20 ,0.8)",
    height:"94.6vh",
    width:"100%",
    padding:'5rem',
    overflowY: 'scroll' ,
    ".SwRa":{
        width:"100%",
        display:"flex" , 
        padding:"2.5rem 0rem 2.5rem 0rem",
        justifyContent:"center",
        border:"solid 1px cyan",
        backgroundColor:"$blackOpa",
        ".DivRam":{
            padding:"0.5rem 16rem 0.5rem 4rem",
            borderRight:"solid 1px cyan"
        },
        ".DivSwap":{
            padding:"0.5rem 4rem 0.5rem 16rem",
            borderLeft:"solid 1px cyan"
        },
        p:{
            color:"cyan",
            marginTop:"1rem",
            fontSize: "12px",
            fontFamily: "'Times New Roman', Times, serif"
        },
        h4:{
            width:"100%",
            color:"cyan",
            textAlign:"center",
            marginBottom:"1rem",
            fontSize: "18px",
            fontFamily: "Arial, sans-serif"
        },
        
       
    },
    ".divBarC" : {
        backgroundColor:"rgba(10 , 25 ,20 ,0.8)",
        width:"100%",
        h1:{
            textAlign:"center",
            margin:"0 auto",
            padding: '1rem',
            color: 'lime'
        }
    },

    "@lgScreen2":{
        ".sec":{
            display:"flex",
            flexDirection:"column",
            width:"100%",
            height:"100%",
            ".SwRa":{
                maxWidth:"100%",
                ".LBDiv":{
                    display:"flex", 
                    flexDirection:"column",
                },
                ".DivRam":{
                    padding:"0.5rem 4rem 0.5rem 0rem",
                },
                ".DivSwap":{
                    padding:"0.5rem 0rem 0.5rem 4rem",
                },
            }
        }
    },
    "@tablet2":{
        ".sec":{
            display:"flex",
            flexDirection:"column",          
            ".SwRa":{
                maxWidth:"100%",
                marginBottom:"5rem",
                ".DivRam":{
                    padding:"0.5rem 2rem",
                },
                ".DivSwap":{
                    padding:"0.5rem 2rem",
                },
            }
        }
    }
    
});

export const DataSty = styled("div" , {
    

    backgroundColor:"rgba(10 , 25 ,20 ,0.8)",
    width:"100%",
    display:'flex',
    alignItems: 'center',
    
   ".Task":{
        backgroundColor:"rgba(10 , 25 ,20 ,0.8)", 
        border: "solid 1px lime",
        width: '100%',
        maxWidth: '90rem',     
        height:'60rem',
        padding:'2.5rem 1rem 2.5rem 2.5rem',
        h1:{
            fontSize: '2rem',
            marginBottom: '3rem',
            color: 'lime'
        },
        ".tab":{
            
            
            width: "100%",
            position:"relative",
            borderBottom:"solid 2px lime",
            
                thead:{
                    
                    position: 'sticky',
                    top: '0',
                    backgroundColor:"rgba(0,20,55,0.9)",
                    zIndex: 1
                },
                tr:{
                    border: "solid 2px lime",
                    maxWidth:"120rem",
                    td:{
                        border: "solid 2px lime",
                        textAlign:'center',
                        color: 'lime',
                        maxWidth:"11%"
                    },
                    th:{
                        padding:"0.2rem",
                        color: 'lime',
                        fontSize: '1.4rem',
                        border: "solid 2px lime",       
                    },
                }
            
        }},
    
    ".cpu" : {
         border: 'solid 1px lime',
        display: "flex",
        flexDirection: "column",
        alignItem: "center",
        overflow:"auto",
        ".DivGauge":{
            marginLeft:"2rem",
            ".info":{
                width:'100%',
                height: '5rem',
                justifyContent:'center',
                display:'flex',
                p: {
                    color: 'lime',
                    '&:not(:first-child)':{
                        marginLeft: '2rem',
                    },
                    marginBottom:'0px'
                },  
                "& > p:nth-child(2)":{
                    marginTop:'2rem',
                    color: 'lime',
                    fontSize: '12px',
                }
                         
            }
        },
        span:{
            margin:"0 auto",
            h1: {
                fontFamily:"'Times New Roman', Times, serif",
                margin:"0 auto",
                marginTop:15,
                fontSize: '3rem',
                fontWeight: '900',
                color: 'black',
                h1:{
                    fontFamily:"'Times New Roman', Times, serif",
                    position:'relative',
                    fontSize: '3rem',
                    top:-49,
                    left:1.5,
                    fontWeight: '900',
                    color: 'rgba(0,250,25,0.8)'
                }
            }
        }
        
    },
    ".Nucleos":{
        width:'100%',
        height: '25rem',
        border: 'solid 1px lime',
        overflowY: 'scroll',
        p:{
            color:"lime",
            fontSize: "9px",
            marginTop:"1rem",
            fontFamily: "Arial, sans-serif",
        },
        h1:{
            fontSize:'18px',
            margin:"0 auto",
            marginTop: '1.5rem',
            textAlign: 'center',
            color:'black',
            h1:{
                fontSize:'18px',
                position:'relative',
                top: -38,
                left: 1,
                color:'rgba(0,250,25,0.8)'
            }
        }
    },
    "@lgScreen":{
        ".Task":{
            maxWidth:'89.8rem',
        }
       
    },
    "@lgScreen1":{
        ".Task":{
            maxWidth:'74.8rem',
        }
       
    },
    "@lgScreen2":{
        ".Task":{
            maxWidth:'64.8rem',
        }  
    },
    
    "@tablet":{
        
        flexDirection: "column",
        ".Cpu" : {
            display:"flex",
            flexDirection: "row",
            width:"100%",
            
            ".cpu":{
                width:"100%",
                maxWidth:"35rem",
                display:"flex",
                alignItem:"center",
                justifyContent:"center",
                ".DivGauge":{
                    width:"100%",
                    maxWidth:"25rem",
                    transform:"translate( 21px, -10px)"
                },
            },
            ".Nucleos":{
                width:"100%",
                maxWidth:"35rem",
                height:"100%"
            }
        },
        ".Task":{
            maxWidth:'100%',
        }
       
    },
    "@tablet2":{
        ".Cpu" : {
            ".Nucleos":{
                h1:{
                    h1:{
                        top:-59,
                    }
                }
            }

        }
    }


})