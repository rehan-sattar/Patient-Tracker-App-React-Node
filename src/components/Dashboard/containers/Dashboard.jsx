import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css"

class Dashboard extends Component {
   
    render() {
        return (
            <div className="body">
                {/* header section */}
                <section className="py-2 bg-dark text-center text-white">
                    <div className="container">
                        <div>
                            <h2> <i className="fa fa-cogs"></i> Dashboard</h2>
                        </div>
                    </div>
                </section>


                <div className="wrapper">
                    <div id="sidebar">
                        <div className="sidebar-header">
                            <h3>welcome Admin!</h3>
                            <ul className="list-unstyled components">
                                <li className="active">
                                    <Link>All patients</Link>
                                </li>
                                <li>
                                    <Link>Search patients by date</Link>
                                </li>
                                <li>
                                    <Link>Search patients by name</Link>
                                </li>
                                <li>
                                    <Link>View Patient history</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="content">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <button type="button" id="sidebarCollapse" className="btn btn-info">
                                    <i className="fas fa-align-left"></i>
                                    <span>Menu</span>
                                </button>
                            </div>
                        </nav>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos soluta perferendis, a nemo eos quis esse beatae quidem ea non iste veniam laborum pariatur voluptatibus saepe vitae aperiam sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus tenetur? Iure, quas temporibus atque veritatis quidem nobis suscipit, nesciunt fugiat ea consequatur fuga adipisci nostrum quod quia perferendis inventore.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos soluta perferendis, a nemo eos quis esse beatae quidem ea non iste veniam laborum pariatur voluptatibus saepe vitae aperiam sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus tenetur? Iure, quas temporibus atque veritatis quidem nobis suscipit, nesciunt fugiat ea consequatur fuga adipisci nostrum quod quia perferendis inventore.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos soluta perferendis, a nemo eos quis esse beatae quidem ea non iste veniam laborum pariatur voluptatibus saepe vitae aperiam sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus tenetur? Iure, quas temporibus atque veritatis quidem nobis suscipit, nesciunt fugiat ea consequatur fuga adipisci nostrum quod quia perferendis inventore.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos soluta perferendis, a nemo eos quis esse beatae quidem ea non iste veniam laborum pariatur voluptatibus saepe vitae aperiam sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus tenetur? Iure, quas temporibus atque veritatis quidem nobis suscipit, nesciunt fugiat ea consequatur fuga adipisci nostrum quod quia perferendis inventore.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos soluta perferendis, a nemo eos quis esse beatae quidem ea non iste veniam laborum pariatur voluptatibus saepe vitae aperiam sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus tenetur? Iure, quas temporibus atque veritatis quidem nobis suscipit, nesciunt fugiat ea consequatur fuga adipisci nostrum quod quia perferendis inventore.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos soluta perferendis, a nemo eos quis esse beatae quidem ea non iste veniam laborum pariatur voluptatibus saepe vitae aperiam sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus tenetur? Iure, quas temporibus atque veritatis quidem nobis suscipit, nesciunt fugiat ea consequatur fuga adipisci nostrum quod quia perferendis inventore.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quos soluta perferendis, a nemo eos quis esse beatae quidem ea non iste veniam laborum pariatur voluptatibus saepe vitae aperiam sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, natus tenetur? Iure, quas temporibus atque veritatis quidem nobis suscipit, nesciunt fugiat ea consequatur fuga adipisci nostrum quod quia perferendis inventore.
                        </p>

                    </div>
                </div>

            </div>
        )
    }
}

export default Dashboard;