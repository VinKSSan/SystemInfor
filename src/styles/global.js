import { globalCss} from "./indexSt";

export const GlobalStyles = globalCss({
    "*": {
        padding:0,
        margin:0,
        boxSizing: "border-box",
        textDecoration: "none",
        listStyle:"none",

    },
    html: {
        fontSize: "62.5%",
        /* CSS */
        input:{
            all: "unset"
        },
        textarea:{
            all: "unset"
        }
  
        
        
          
    },
    body: {        
        "webKit-font-smoothing": "antialiased",
        background: "linear-gradient( 119.36deg ,#010101 0%, #000000 100%)",
        color: "$white",
        
    },
    img: {
        maxWidth:"100%",
        display: "block"
    },
    button: {
        cursor:"pointer",
    },
    input: {
        appearance: "none",
        outline: "none",
      }

})