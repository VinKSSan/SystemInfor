import icon_grafa from '../../../public/assets/grafana_icon.svg'
import system_icon from '../../../public/assets/logo_system.png'
import Image from 'next/image'

import setIconDown from '../../../public/assets/openArrow.svg'

import { Link as ScrollLink } from 'react-scroll';

import SimpleData from './simpleData/simpleData'
import { Hed, Div } from './styleCab'

const Cabeça = ({data})=> {



    let sysstem = data
    return(
    <Div id='cabeça'><div className='outDiv'>    
        <Hed>
            <h1>System Infor</h1>
            <div>
                <div className='logos'>
                    <a>
                        <Image 
                            height={80} width={120}
                            src={icon_grafa} alt="logo grafana"
                        />
                    </a>
                    <a>
                        <Image
                            height={80} width={120} 
                            src={system_icon} alt="logo SystemInfor"
                        />
                    </a>
                </div>
                <div className='divNav'>
                    <nav>
                        <ul>
                            <a>
                                <ScrollLink
                                    className='scroll'
                                    to="DataSec"
                                    spy={true}
                                    smooth={true}
                                    offset={-35}
                                    duration={500}
                                >
                                    <li>
                                        <Image
                                            className='imag'
                                            width={18}
                                            height={18}
                                            src={setIconDown}
                                        />
                                        <h3>Seus dados de systema</h3>
                                    </li>
                                </ScrollLink>
                            </a>
                            <a>
                                <ScrollLink
                                    className='scroll'
                                    to="grafana"
                                    spy={true}
                                    smooth={true}
                                    offset={-29}
                                    duration={500}
                                >
                                    <li>
                                        <Image
                                            className='imag'
                                            width={18}
                                            height={18}
                                            src={setIconDown}
                                        />
                                        <h3>Tutórial grafana</h3>
                                    </li>
                                </ScrollLink>
                            </a>
                            
                            <a>
                                <ScrollLink
                                    className='scroll'
                                    to="links"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <li>
                                        <Image
                                            className='imag'
                                            width={18}
                                            height={18}
                                            src={setIconDown}
                                        />
                                        <h3>Links</h3>
                                    </li>
                                </ScrollLink>
                            </a>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </Hed>
        <SimpleData data={sysstem}/>  
    </div></Div>
)}

export default Cabeça;