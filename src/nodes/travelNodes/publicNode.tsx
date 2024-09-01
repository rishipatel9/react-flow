import React from 'react'
import { NodeProps, Handle, Position } from '@xyflow/react'
const publicNode = ({ data: { travelMode, price } }: NodeProps<{ travelMode: string; expense: number }>) => {
    return (
        <div className=" bg-green-400 rounded-md shadow-lg bg-transparent backdrop-blur-md h-[200px] w-[350px] flex justify-center items-center flex-col  border border-[#27272B] ">
            {travelMode}
            <Handle
               type="target"
                position={Position.Left}
            />
        </div>
    )
}

export default publicNode
