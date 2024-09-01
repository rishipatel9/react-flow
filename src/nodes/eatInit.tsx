import { NodeProps , Handle ,Position } from '@xyflow/react'



const eatInit = ({data:{amount}}:NodeProps<{amount:number}>) => {
  return (
    <div className='bg-blue-300 rounded-md shadow-lg bg-transparent backdrop-blur-md h-[200px] w-[350px] flex justify-center items-center flex-col  border border-[#27272B] '>
        <p className="text-3xl font-bold m-2">eatInit</p>
        <div className="m-2">{amount}</div>
        <Handle 
        type="source" 
        position={Position.Right}
        />
    </div>
  )
}

export default eatInit
