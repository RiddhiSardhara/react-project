import React from 'react';
import Navbar from './componets/Navbar';
import Card from './componets/Card';
import Button from './componets/Button';
import img from './componets/img/team_1.jpg.webp'
import img2 from './componets/img/team_2.jpg.webp'
import img3 from './componets/img/team_2.jpg.webp'
import img4 from './componets/img/team_1.jpg.webp'
// import Count from './componets/Count'
// import Revise from './componets/Revise'




function App() {

  const data =[
    {
      title : "mobile",
      Dese : 'this is mobile',
      img : img
    },
    {
      title : "Watch",
      Dese : 'this is watch',
      img : img2
    },
    {
      title : "Saree",
      Dese : 'this is SAree',
      img : img3
    },
    {
      title : "Phone",
      Dese : 'this is Phone',
      img : img4
    },
  ]
  return (
    <>

      <Navbar />

    
        <div className='row'>
          <Card data = {data} />
        </div>
        {/* <Count/> */}
        {/* <Revise/> */}
     
     

    





    </>

  )
}
export default App