import { styled } from "@/styles/indexSt";


export const SetaSty = styled('svg',{
    cursor: "pointer",
    transformOrigin: "center",
    "&:hover":{
        stroke:"lime",
    }
})
export const BacSeta = styled('div',{
    position: 'fixed', 
    bottom: '40px',
    right: '20px',
    width: '40px',
    height: "40px",
    backgroundColor:'$darkCyberBlue',
    border: "solid 0.5px cyan",
    borderRadius:"50%",
    zIndex: "1000",
    "&:hover":{
        padding:'0.5rem',
        backgroundColor:"$blackOpa",
        border: "solid 0.5px lime",
    }
})