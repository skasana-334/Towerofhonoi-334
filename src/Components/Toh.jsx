import React from 'react'

export const Toh = ( n,  from_rod,
    to_rod, aux_rod,moves) => {
if (n ===0) 
{
return; 
} 
Toh(n - 1, from_rod, aux_rod, to_rod,moves); 
console.log( `Move disk ${n} from rod ${from_rod}  to rod ${to_rod }`)
moves.push({from: from_rod,to:to_rod})
Toh(n - 1, aux_rod, to_rod, from_rod,moves); 
} 

export const Solve=(n,moves)=>{
Toh(n,'A','C','B',moves)
}
