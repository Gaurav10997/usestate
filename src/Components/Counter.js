import React ,{useState} from "react";
import './Counter.css'

// export default function Counter(){
//     const [count , SetCount ]=useState(0);
//     console.log("component renderes")
//     function decrement(){
//         SetCount(prev=>prev-1)
        
//     }
//     function Increment(){
//         SetCount(prev=>prev+1)
//     }
    
//     return(
//         <div className="box-container">
//             <div className="box" onClick={decrement}>-</div>
//             <p>{count}</p>
//             <div className="box" onClick={Increment}>+</div>
//         </div>
//     )
// }

// export default function Counter(){
//     const [count , SetCount ]=useState(()=>{
//         return 0;
//         console.log("component renderes")
//     });
//     function decrement(){
//         SetCount(prev=>prev-1)
        
//     }
//     function Increment(){
//         SetCount(prev=>prev+1)
//     }
    
//     return(
//         <div className="box-container">
//             <div className="box" onClick={decrement}>-</div>
//             <p>{count}</p>
//             <div className="box" onClick={Increment}>+</div>
//         </div>
//     )
// }




// export default function Counter(){
//     const [state , setState ]=useState({count:0 , color:"yellow"});
//     const count = state.count;
//     const color = state.color;
//     function decrement(){
//        setState(prev=>{
//         return { ...prev ,count:prev.count-1}
//        })
        
//     }
//     function Increment(){
//         setState(prev=>{
//             return {...prev ,count:prev.count+1}
//            })
//     }
    
//     return(
//         <>
//          <div className="box-container">
//             <div className="box" onClick={decrement}>-</div>
//             <p>{count}</p>
//             <div className="box" onClick={Increment}>+</div>
//         </div>
//         <h1>{color}</h1>
//         </>
       
//     )
// }



export default function Counter(){
    const [count , setCount ]=useState(0);
    const [color , setColor ]=useState("blue");


    function decrement(){
        setCount(prev=>prev-1)
        setColor(prev=>{
            if(prev="yellow"){
                return "blue"
            }
        })
        
    }
    function Increment(){
        setCount(prev=>prev+1)
        setColor(prev=>{
            if(prev="blue"){
                return "yellow"
            }
        })
    }
    
    return(
        <>
         <div className="box-container">
            <div className="box" onClick={decrement}>-</div>
            <p>{count}</p>
            <div className="box" onClick={Increment}>+</div>
        </div>
        <h1>{color}</h1>
        </>
       
    )
}
