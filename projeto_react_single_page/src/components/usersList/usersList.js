import React from 'react';
import axios from "axios";
import "./usersList.css";

export default class UsersList extends React.Component{
    state = {
        users: []
    }

    componentDidMount(){
        axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
            .then(res => {
            const users = res.data;
            this.setState({ users });
            }
        )
    }     

    render() {
        return (
            <>
                { this.state.users.map(user => 
                    <div className="container-user" >
                        <div className="perfil"> 
                            <img src={user.img} alt="Usuário"/>
                            <div className="identificacao" >
                                <div className="nome">{user.name}</div>
                                <div className="id-email">ID: {user.id} - Nome de Usuário: {user.username}</div>
                            </div>
                        </div>
                            <div className="containerButton">
                                <button className="btn">Pagar</button>
                            </div>
                    </div>     
                )}
            </>

        ) 
    }
}