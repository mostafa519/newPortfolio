  
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Main from './MainComponent/Main';  
 
 
function App() {
//   useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//         if (user) { 
//           const uid = user.uid; 
//           console.log("uid", uid)
//         } else { 
//           console.log("user is logged out")
//         }
//       });
     
// }, []);

  return ( 
    <HashRouter>
    <Main></Main>
    </HashRouter>
  )
}

export default App;
