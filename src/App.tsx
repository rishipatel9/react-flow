
import { ReactFlow } from '@xyflow/react'
import {Background} from '@xyflow/react'
import {Controls} from '@xyflow/react'
import {MiniMap} from '@xyflow/react'
import '@xyflow/react/dist/style.css';
import {useNodesState ,useEdgesState ,Connection,addEdge} from '@xyflow/react'
import { useCallback } from 'react';
import { initialEdges, initialNodes } from './constants';
import eatInit from './nodes/eatInit';
import burgerNode from './nodes/burgerNode';
import pizzaNode from './nodes/pizzaNode';
import bikeNode from './nodes/travelNodes/bikeNode';
import carNode from './nodes/travelNodes/carNode';
import publicNode from './nodes/travelNodes/publicNode';


 
// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
//   { id: '3', position: { x: 0, y: 200 }, data: { label: '3' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes={
  'eatInit':eatInit,
  'burgerNode':burgerNode,
  'pizzaNode':pizzaNode,
  'bikeNode':bikeNode,
  'carNode':carNode,
  'publicNode':publicNode
}
export default function App() {
   const [nodes,setNode,onNodesChange]=useNodesState(initialNodes);
   const [edges,setEdge,onEdgesChange]=useEdgesState(initialEdges);

   const onConnect=useCallback((connection:Connection )=>{
    const edge={...connection,animated:true,id:`${edges.length} +1`};
    setEdge((prevEdges: any)=>addEdge(edge,prevEdges)) 
   },[])
  return (
    <div className="h-[100vh] w-[100vw] border border-[#27272B]">
      <ReactFlow 
      nodes={nodes}
       edges={edges}
       onNodesChange={onNodesChange}
       onEdgesChange={onEdgesChange}
       onConnect={onConnect}
       nodeTypes={nodeTypes}
       >
        <Background/>
        <Controls/>
        <MiniMap/>
      </ReactFlow>
    </div>
  );
}