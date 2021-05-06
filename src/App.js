import react from 'react';
import img from "./img/25.jpg";

import { HelloWorld, HaloDunia } from './HelloWorld';
function App() {
  //deklarasi variable hanya bisa dilakukan disebelum retrun
  let name = "nisa";
  let widthImage ="500px";
  const handleClick = ()=>{
    alert("button sudah di klik");
  }
  const hoverImage = ()=>{
    console.log("gambar me");
  }

  let traficLight = 'green'
  let message;
  if(traficLight === 'red'){
    message = <h1>dilarang jalan</h1>
  }else if (traficLight === 'yellow'){
    message = <h1>hati - hati</h1>
  }else {
    message = <h1>jalan aja</h1>
  }

  let absensi = ['nisa', 'syaroh', 'sita']

  return (
    //di dalam JSX tidak bisa menggunakan class, harus menggunakan ClassName
  <div className="App">
    <h1>Hello World</h1>
    <HelloWorld/>
    <HaloDunia /> 
    <h1>{3 + 7}</h1> 
    <h1>{name.toUpperCase()}</h1>
    {/* //tidak bisa deklarasi variable dala JSX */}
    {/* <h1>{let name = "nisa";}</h1> */}
    
    <img 
      src={img} 
      alt="me"
      width={widthImage}
      onMouseEnter={hoverImage}
    />

    {/* //event button */}
    <button onClick={handleClick}>ini button</button>

    {message}

    {absensi.map((name, key)=>{
      return <h1 key={key}>{name}</h1>;
    })}
    </div>
  );
};

export default App;
