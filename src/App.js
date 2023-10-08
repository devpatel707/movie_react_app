/*
import './App.css';
import Header from './component/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { TailSpin,Bars} from 'react-loader-spinner';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { Rectangle } from '@mui/icons-material';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data,setData]=useState([]);
  const addData =()=>{
    setData([...data,{name,email}]);  
    setName(""); 
    setEmail("");
    
    
  }
    useEffect( () => {
    toast.error("successfully fetch the data"); 
  },[])
  return (
    <div className='App'>
      <Header />
      <Stack direction="row" spacing={1}>
        <div className='form'>
          <TextField value={name} onChange={(event)=>setName(event.target.value)} id="outlined-basic" label="name" variant="outlined" />
          <TextField value={email} onChange={(event)=>setEmail(event.target.value)} id="outlined-basic" label="email" variant="outlined" />
          <Button onClick={addData} variant="contained" color="success">
         
          
            <AddIcon />
            
          </Button>
        </div>
      </Stack>
      <TailSpin /> 
      <Bars />
      
    </div>
  );
}

/*function App() {
  const [num,setNum]=useState(5);
  function inc(n){
    setNum(num+n);
  }
  function dec(n){
    setNum(num-n);
  }
  return (
    <div className="App">
    <Header /> 
    <div className='main'>
      <h1 className='heading'>{num}</h1>
      <div className='buttons'>
      <div className='btn' onClick={()=>inc(2)}>increment</div>
      <div className='btn' onClick={()=>dec(1)}>decrement</div>
      </div>
    </div> 
    </div>
  );
}

export default App;
*/
import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './component/Header';
import MovieList from './component/movieList/movieList';
import Movie from './pages/movieDetails/movie';
import Recommand from './component/recommand/recommand';


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="/*" element={<h1> Error Page  </h1>}></Route>
          <Route path="/movies/Recommanded" element={<Recommand />}></Route>
        </Routes>
     
      </BrowserRouter>
      
    </div>

  );
}

export default App