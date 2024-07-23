import "./NewTask.css";

const NewTask = () =>{
    return (
        <div className="newTask">
            <h3 className="newTaskTitle">New Task</h3>
            <form className="newTaskForm">
            <div className="newTaskItem">
                    <label htmlFor="status">Estado</label>
                    <select className="newTaskInputGroup">
                        <option className="newTaskItemInput" type="radio" name="status" value="dhar">Dhar Johnson</option>                        
                        <option className="newTaskItemInput" type="radio" name="status" value="susan">Sunsan Carol</option>                   
                        <option className="newTaskItemInput" type="radio" name="status" value="john">Jon Doe</option>                
                    </select>
                </div>
                <div className="newTaskItem">
                    <label htmlFor="date">Fecha</label>
                    <input className="newTaskItemInput" type="date" name="date" placeholder="Fecha" />
                </div>
                <div className="newTaskItem">
                    <label htmlFor="description">Descripción</label>
                    <input className="newTaskItemInput description" type="text" name="description" placeholder="Descripción" />
                </div>                
                <div className="newTaskItem">
                    <label htmlFor="status">Estado</label>
                    <div className="newTaskInputGroup">
                    <input className="newTaskItemInput" type="radio" name="status" value="approved" />
                    <label htmlFor="status">Aprobada</label>
                    <input className="newTaskItemInput" type="radio" name="status" value="declined" />
                    <label htmlFor="status">Rechazada</label>
                    <input className="newTaskItemInput" type="radio" name="status" value="pending" />
                    <label htmlFor="status">Pendiente</label>
                    </div>
                </div>
                <div className="newTaskItem">
                    <button className="newTaskItemBtn">Crear Tarea</button>
                </div>
                </form>
        </div>
    )
}

export default NewTask;