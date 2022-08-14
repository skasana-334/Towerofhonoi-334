import React from 'react'

const Algo = () => {
  return (
    <div>
      <h1 className='text-warning my-4 px-4'>Algorithm To Solve </h1>
<div className='px-4'>
<p className='text-secondary fw-semibold'>
  START
  <br></br>
TOH(disk, source, dest, aux)
<br></br>
if disk == 1, then
<br></br>
    move disk from source to dest 
    <br></br>            
 else
 <br></br>
 TOH(disk - 1, source, aux, dest)     // Step 1
 <br></br>
    move disk from source to dest          // Step 2
    <br></br>
    TOH(disk - 1, aux, dest, source)     // Step 3
    <br></br>
end if
<br></br>
END Procedure
<br></br>
STOP</p>
    </div>
    </div>
  )
}

export default Algo
