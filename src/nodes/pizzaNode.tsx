
import { Handle, Position, NodeProps } from '@xyflow/react'

const pizzaNode = ({data:{name,price,distanceToTravel}}:NodeProps<{name:string;price:number;distanceToTravel:number}>) => {
  return (
    <div className="bg-blue-400 rounded-md shadow-lg bg-transparent backdrop-blur-md h-[200px] w-[350px] flex justify-center items-center flex-col  border border-[#27272B] bg-blue-400 ">
         <div className="m-2 font-bold text-2xl ">
                {name}
            </div>
            <div className="m-2 "> 
                {price}$
            </div>
            <div className="m-2 ">
                Distance :{distanceToTravel} miles
            </div>
            <Handle
                type="target"
                position={Position.Left}
            />
            <Handle
                type="source"
                position={Position.Right}
            />
    </div>
  )
}

export default pizzaNode
