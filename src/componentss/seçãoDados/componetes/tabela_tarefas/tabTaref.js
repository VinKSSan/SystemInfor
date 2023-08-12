import React from "react"


const TabTaf = ({data})=>{

    const profts = data.listProcesses
    

    const PID = profts.pid 
    const taskName = profts.name
    const Mem = profts.mem
    const memVsz = profts.memVsz 
    const MemRss  =  profts.memRss
    const start =  profts.started
    const user = profts.user
    const comand = profts.command
    const path = profts.path 

    const tasks = []

    profts.forEach(e => {
        tasks.push(
                <tr>
                    <td>{e.pid}</td>
                    <td>{e.name}</td>
                    <td>{e.started}</td>
                    <td>{e.mem}</td>
                    <td>{e.memVsz}</td>
                    <td>{e.memRss}</td>
                    <td>{e.path}</td>
                    <td>{e.user}</td>
                    <td>{e.command}</td>
                </tr>         
    )});

    return(
        <div className="tab" style={{overflow:'auto', height: "51rem", width: "100%", maxWidth: '120rem'}}>
            <table>
                <tr>
                    <th>PID</th>
                    <th>Nome</th>
                    <th>inicio</th>
                    <th>memoria</th>
                    <th>Mem Vsz</th>
                    <th>Mem Rss</th>
                    <th>caminho</th>
                    <th>usuário</th>
                    <th>comando</th>
                    
                </tr>
                {tasks}
            </table>
        </div>
    )
}

export default TabTaf;