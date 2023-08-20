import React from "react"


const TabTaf = ({data})=>{

    const profts = data.listProcesses
    
    const tasks = []

    profts.forEach(e => {
        tasks.push(
                <tr >
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
        <div className="tab" style={{overflow:'auto', height: "48.7rem" }}>
            <table>
                <thead>
                    <tr className="grid">
                        <th>PID</th>
                        <th>Nome</th>
                        <th>inicio</th>
                        <th>Mem</th>
                        <th>MVsz</th>
                        <th>MRss</th>
                        <th>caminho</th>
                        <th>usuário</th>
                        <th>comando</th>                
                    </tr>
                </thead>
                <tbody>
                    {tasks}
                </tbody>  
            </table>
            
        </div>
    )
}

export default TabTaf;