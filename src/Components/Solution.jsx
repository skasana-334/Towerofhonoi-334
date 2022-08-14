import React, { useState } from 'react'
import { Solve} from './Toh'
import Algo from './Algo'

import 'bootstrap/dist/css/bootstrap.min.css'

const Solution = () => {
    const[tower,settower]=useState({A:[4,3,2],B:[],C:[]})
    const[moves,setmov]=useState([])
    const handlemov=()=>{
        let temp=[];//initialise an array to store the moves using the recursion func
        Solve(3,temp);//n,mov
        setmov([...temp]);//spread operator to update the prev values of moves
        settower({A:[4,3,2],B:[],C:[]})
    }
    const nextmove=()=>{
      if(moves.length>0){
      let tempmoves=[...moves];//it is for storing the values of moves so that it can be poped out
      let next=tempmoves.shift();//remove the first element and return it
      let temptower={...tower};//since it uses an object so {...} not[...] 
      let disk=temptower[next.from].pop();// ot is for remove disk from one tower
      temptower[next.to].push(disk);//push the removed disk in another tower
settower(temptower);
setmov(tempmoves);
      }
    }

    //SINCE the disks are moving from the lowest point so to reverse the order of moving use a function with an arg of  no. of disks in each tower -(nd)
    //th is tower height if disks are less than tower height it will shows something in place of disks
    const revdisk=(col,nd,th)=>{
let newdisks=[];
while(nd.length>0){
  newdisks.push(nd.pop());
}
while(newdisks.length<th){//this is for showing the bars otherwise that bar will be shown on which disks are moving
  newdisks.unshift(-1)//it will add elements at the begining of the array
}
const clr=['bg-danger','bg-primary','bg-info','bg-warning']
return(
      newdisks.map((x,idx)=>{
        const cr  = x!==-1 ? clr[x%4]:'bg-secondary'
        const size=x!==-1 ? x*2:2
        const off=x!==-1?(12-(x*2))/2:5
        return(
        <div class='row' key={`${col}-disk-${idx}`}  >
        <div class={`col-${size} ${cr} offset-${off}`}><span>&nbsp;</span></div>
        </div>
        )
      }
      )
    
)
}
  return (
    <>
    <div>
      
      <div className='d-flex flex-column align-items-center'>
        <h2 className='text-primary'>Visualisation Demo of Tower Of Honoi</h2>
        <p>Get the better understanding of toh</p>
      </div>

<div class="container my-5">
  <div class="row">
    <div class="col">
    {revdisk('A',[...tower.A],5)}
    </div>
    <div class="col">
    {revdisk('B',[...tower.B],5)}
    </div>
    <div class="col">
    {revdisk('C',[...tower.C],5)}
    </div>
  </div>
</div>

<div class="d-flex justify-content-center  ">
<button type="button" className=" btn btn-success px-4 mx-5 my-2" onClick={handlemov}>SOLVE</button>
<ul className='text-center' >
{moves.map( move => {
          return(
            <>
            
          <li>
             {`${move.from} => ${move.to}`}
          </li>
          {/* //it will list the valid moves  */}
          </>)
            })
         }
         </ul>
<button type="button" className="btn btn-primary px-4 mx-5 my-2" onClick={nextmove}  >NEXT</button>

</div>
<div>
<Algo/>
</div>
</div>


    
         </>
  )
}

export default Solution