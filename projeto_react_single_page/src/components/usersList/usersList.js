import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./usersList.css";


export default function UsersList() {
    
    
    const cards = [
        // valid card
        {
            card_number: '1111111111111111',
            cvv: 789,
            expiry_date: '01/18',
        },
        // invalid card
        {
            card_number: '4111111111111234',
            cvv: 123,
            expiry_date: '01/20',
        }
    ];


    const [showModal, setShowModal] = useState ("none")
    const [users, setUsers] = useState ([])
    const [dest, setDest] = useState ({})
    const [recibo, setRecibo] = useState("none")
    const [valor, setValor] = useState ("")
    const [card, setCard] = useState ("")
    const [validacao, setValidacao] = useState ("")
    const [textoRecibo, setTextoRecibo] = useState ("oi")




  
    const abrir = (obj) => {
        setShowModal("block")
        setDest(obj)
    }
  
    const fechar = (event) => {
        setShowModal( "none")
        setRecibo("none")

    }

    const abrirRecibo = () => {
        setRecibo("block")
        setShowModal( "none")
    }

    const checar = (evt) => {
        evt.preventDefault();
        const jsonParam ={
            "card_number": cards[card].card_number,
            "cvv": cards[card].cvv,
            "expiry_date": cards[card].expiry_date,
            "value": valor,
            "destination_user_id": dest.id
        }

        axios.post(`https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989`, jsonParam)
            .then(res => {
                const validacao = res.data;
                setValidacao(validacao);
        }) 

        if(validacao.status == "Aprovada"){
            setTextoRecibo("Pagamento efetuado!")
            abrirRecibo()

        }else{
            setTextoRecibo("Pagamento NÃO efetuado!")
            abrirRecibo()

        }
         
    }

    useEffect(() => {
        axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
            .then(res => {
            const users = res.data;
            setUsers(users);
            })  
    })
    

    return (
        <>
            {users.map(user =>
                    <div className="container-user" >
                        <div className="perfil"> 
                            <img src={user.img} alt="Usuário"/>
                            <div className="identificacao" >
                                <div className="nome">{user.name}</div>
                                <div className="id-email">ID: {user.id} - Nome de Usuário: {user.username}</div>
                            </div>
                        </div>
                            <div className="containerButton">
                                <button className="btn" onClick={() => {abrir (user)}} >Pagar</button>
                            </div>
                    </div>
                          
            )}
            <div className="modal" style={{display:showModal}}>
                <div className="header">
                    <div className="destinatario">Pagamento para {dest.name}</div>
                    <div className="fechar" onClick={() => {fechar()}}>X</div>
                </div>
                <form className="pagamento" onSubmit={checar}>
                    <input className="valor" type="text" value={valor} onChange={e=>setValor(e.target.value)} placeholder="R$ 0,00" required></input>
                    <select className="cartao" value={card} onChange={e=>setCard(e.target.value)} required>
                        <option value= "" disabled selected hidden>Selecione o cartão</option>
                        {cards.map((card, i)=>
                            <option value={i}>Cartão com o final {card.card_number.substring(12)}</option>
                        )}
                    </select>
                    <input type="submit" value="Pagar" className="btnpagarmodal" ></input>
                </form>

            </div>

            <div className="recibo" style={{display:recibo}}>
                <div className="header">
                    <div className="destinatario">Recibo do pagamento</div>
                    <div className="fechar" onClick={() => {fechar()}}>X</div>
                </div>
                <div className="ok">{textoRecibo}</div>
            </div>

        </>

    ) 

}


