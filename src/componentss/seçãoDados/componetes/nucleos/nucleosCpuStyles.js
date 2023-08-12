import { styled } from "@/styles/indexSt";


export const Nucleos = styled('div' , {
    display:"grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto", /* Duas linhas de altura igual */
    gridGap:"10%",
    width: "100%",
    maxWidth:"40rem",
    ".item":{
        marginTop:20,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height:50,
        width:"100%",
        h4:{
            color: "lime",
            width:"100%",
            textAlign:"center",
            fontSize:'10px',
            marginBottom: '1rem'
        }
    },
    "@tablet2":{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        marginBottom:"2rem"
    }
})