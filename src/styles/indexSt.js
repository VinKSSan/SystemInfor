import {createStitches } from "@stitches/react";

export const {styled, globalCss,keyframes, getCssText, Theme } = createStitches({
    theme: {
        colors:{
            CyberGreen: "rgba(0 , 255 ,25, 0.5)",
            whiteCyberGreen: "rgba(0 , 255 ,200 ,0.8)",
            darkCyberBlue: "rgba(0 , 20 ,45 ,0.8)",
            darckCyberGreen: "rgba(0 , 25 ,20 ,0.8)",
            BlaCyberBlue : "rgba(0,10,50,0.8)",
            wayCyberBlue: "rgba(0, 250,250, 0.6)",
            CyberBlue: "rgba(0,100,200,0.7)" , 
            blackOpa: "rgba(0 , 0 ,0 ,0.5)",
            whiteCyza: "rgba(150,150,200,0.4)",
            wayWhiteCy:"rgba(90, 190 ,255 , 0.90)",
            redCybeP:"rgb(255, 0, 128)",

        }
    },
    media: {
        lgScreen:"(max-width:1350px)",
        lgScreen1:"(max-width:1250px)",
        lgScreen2:"(max-width:1100px)",
        tablet:"(max-width:1000px)",
        tablet1:"(max-width:900px)",
        tablet2:"(max-width:750px)",
        mobile:"(max-width:600px)",
        mobile2:"(max-width:450px)",
        mobile3:"(max-width:350px)",
    }
})