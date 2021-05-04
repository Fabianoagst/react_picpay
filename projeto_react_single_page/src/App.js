// import React from 'react';
// import axios from 'axios';
// // import './assets/css/App.css';

// export default class App extends React.Component {
//   state = {
//     users: []
//   }

//   componentDidMount() {
//     axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
//       .then(res => {
//         const users = res.data;
//         this.setState({ users });
//       })
//   }

//   render() {
//     return (
//       <>
//         { this.state.users.map(user => 
//             <div className="container" >
//                 <img src={user.img} alt="Perfil"/>
//                 <div className="data" >
//                     <p>{user.name}</p>
//                     <p>ID: {user.id} - Nome de Usuário: {user.username}</p>
//                 </div>
//                 <div className="container-btn">
//                   <button className="btn">Pagar</button>
//                 </div>
//             </div>     
//         )}
//       </>
//     )
//   }
// }



// // import React from "react";
// // import logo from './logo.svg';
// // import axios from "axios";
// // import './App.css';
// // import UsersList from "./components/usersList/usersList";


// // function App() {
// //   return (
// //     <div >
// //       Hello word
// //       <UsersList/>
// //     </div>
// //   );
// // }


// // export default App;
