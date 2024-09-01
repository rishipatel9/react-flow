
import { Node } from "@xyflow/react";
import { Edge } from "@xyflow/react";

export const initialEdges:Edge=[]
export const initialNodes:Node=[
    {
        id:'1',
        position:{x:200,y:200},
        data:{amount:2},
        type:"eatInit"
    },
    {
        id:'2',
        position:{x:700,y:100},
        data:{name:"burger",price:5,distanceToTravel:20},
        type:"burgerNode"
    },
    {
        id:'3',
        position:{x:700,y:400},
        data:{name:"pizza",price:11,distanceToTravel:4},
        type:"pizzaNode"
    },
    {
        id:'4',
        position:{x:1200,y:0},
        data:{travelMode:"Bike",expense:2},
        type:"bikeNode"
    },
    {
        id:'5',
        position:{x:1200,y:300},
        data:{travelMode:"Car",price:5},
        type:"carNode"
    },
    {
        id:'6',
        position:{x:1200,y:600},
        data:{travelMode:"Bus",expense:1},
        type:"publicNode"
    }
]