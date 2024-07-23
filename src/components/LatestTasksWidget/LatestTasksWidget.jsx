import "./LatestTasksWidget.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const LatestTasksWidget = () => {
    return (
        <div className="LatestTasksWidget">
            <div className="LatestTasksWidgetHeader">
                <h3 className="LatestTasksWidgetTitle">Últimas Tareas</h3>
                <Link to="/newTask">
                    <button className="LatestTasksWidgetCreateBtn">Crear Tarea</button>
                </Link>
            </div>
            <div className="LatestTasksWidgetList">

                <table className="LatestTasksWidgetTable">
                    <thead>
                        <tr>
                            <th className="LatestTasksWidgetTh">Usuario</th>
                            <th className="LatestTasksWidgetTh">Fecha</th>
                            <th className="LatestTasksWidgetTh">Descripción</th>
                            <th className="LatestTasksWidgetTh">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetUser">
                                <span className="LatestTasksWidgetTdTitle">John Doe</span>
                            </td>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetTdGray">
                                2 mayo 2024
                            </td>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetTdGray">
                                Descripción Tarea 1
                            </td>
                            <td className="LatestTasksWidgetTd">
                                <Button type="Approved" />
                            </td>
                        </tr>
                        <tr>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetUser">                            
                                <span className="LatestTasksWidgetTdTitle">John Doe</span>
                            </td>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetTdGray">
                                11 mayo 2024
                            </td>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetTdGray">
                                Descripción Tarea 2
                            </td>
                            <td className="LatestTasksWidgetTd">
                                <Button type="Declined" />
                            </td>
                        </tr>
                        <tr>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetUser">                            
                                <span className="LatestTasksWidgetTdTitle">Dhar Johnson</span>
                            </td>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetTdGray">
                                27 julio 2024
                            </td>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetTdGray">
                                Descripción Tarea 3
                            </td>
                            <td className="LatestTasksWidgetTd">
                                <Button type="Pending" />
                            </td>
                        </tr>
                        <tr>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetUser">                            
                                <span className="LatestTasksWidgetTdTitle">Dhar Johnson</span>
                            </td>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetTdGray">
                                2 agosto 2024
                            </td>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetTdGray">
                                Descripción Tarea 4
                            </td>
                            <td className="LatestTasksWidgetTd">
                                <Button type="Pending" />
                            </td>
                        </tr>
                        <tr>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetUser">                            
                                <span className="LatestTasksWidgetTdTitle">Sunsan Carol</span>
                            </td>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetTdGray">
                                8 septiembre 2024
                            </td>
                            <td className="LatestTasksWidgetTd LatestTasksWidgetTdGray">
                                Descripción Tarea 5
                            </td>
                            <td className="LatestTasksWidgetTd">
                                <Button type="Pending" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default LatestTasksWidget;