import {useState, useEffect, useRef} from 'react';



const testMockData = (dataItemsCount: number) => {

  let dataArray: string[] = [];

  for (let i = 0; i < dataItemsCount; i++) {

    dataArray.push(`Test item ${i + 1}`);
        
  }

  return dataArray;    
}




const ListControl = () => {
    
  
  return (
    <div className='Infinite scrolling'>
      
    </div>
  )
};

  
export default ListControl;