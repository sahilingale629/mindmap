import React, { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  addEdge,
  useEdgesState,
  MarkerType,
  useReactFlow,
} from "reactflow";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 120 },
    data: { label: "Research" },
    targetPosition: "left",
    sourcePosition: "right",
    label: "mydata",
    style: { backgroundColor: "#2A4494", color: "#FFFFFF" },
  },
  {
    id: "2",
    position: { x: 100, y: 220 },
    data: { label: "Planning" },
    targetPosition: "left",
    sourcePosition: "right",
    style: { backgroundColor: "#82B3E8" },
  },
  {
    id: "3",
    position: { x: 100, y: 320 },
    data: { label: "Designing" },
    targetPosition: "left",
    sourcePosition: "right",
    style: { backgroundColor: "#E96343" },
  },
  {
    id: "4",
    position: { x: 100, y: 420 },
    data: { label: "Manufacturing" },
    targetPosition: "left",
    sourcePosition: "right",
    style: { backgroundColor: "#E8919D" },
  },
  {
    id: "5",
    position: { x: 100, y: 520 },
    data: { label: "Sales/Marketing" },
    targetPosition: "left",
    sourcePosition: "right",
    style: { backgroundColor: "#A684EB" },
  },

  {
    id: "6",
    position: { x: 400, y: 100 },
    data: { label: "External" },
    targetPosition: "left",
    sourcePosition: "right",
    style: { backgroundColor: "#2A4494", color: "#FFFFFF" },
  },
  {
    id: "7",
    position: { x: 400, y: 150 },
    data: { label: "Internal" },
    targetPosition: "left",
    style: { backgroundColor: "#2A4494", color: "#FFFFFF" },
  },
  {
    id: "8",
    position: { x: 400, y: 200 },
    data: { label: "PRD" },
    targetPosition: "left",
    style: { backgroundColor: "#82B3E8" },
  },
  {
    id: "9",
    position: { x: 400, y: 250 },
    data: { label: "Specs" },
    targetPosition: "left",
    style: { backgroundColor: "#82B3E8" },
  },
  {
    id: "10",
    position: { x: 400, y: 300 },
    data: { label: "Hardware" },
    targetPosition: "left",
    style: { backgroundColor: "#E96343" },
  },
  {
    id: "11",
    position: { x: 400, y: 350 },
    data: { label: "Software" },
    targetPosition: "left",
    style: { backgroundColor: "#E96343" },
  },
  {
    id: "12",
    position: { x: 400, y: 400 },
    data: { label: "Material" },
    targetPosition: "left",
    style: { backgroundColor: "#E8919D" },
  },
  {
    id: "13",
    position: { x: 400, y: 450 },
    data: { label: "Production" },
    targetPosition: "left",
    style: { backgroundColor: "#E8919D" },
  },
  {
    id: "14",
    position: { x: 400, y: 500 },
    data: { label: "Online" },
    targetPosition: "left",
    style: { backgroundColor: "#A684EB" },
  },
  {
    id: "15",
    position: { x: 400, y: 550 },
    data: { label: "Dealearship" },
    targetPosition: "left",
    style: { backgroundColor: "#A684EB" },
  },

  {
    id: "16",
    position: { x: 650, y: 70 },
    data: { label: "B2C" },
    targetPosition: "left",
    sourcePosition: "right",
    style: { backgroundColor: "#2A4494", color: "#FFFFFF" },
  },
  {
    id: "17",
    position: { x: 650, y: 120 },
    data: { label: "B2C" },
    targetPosition: "left",
    style: { backgroundColor: "#2A4494", color: "#FFFFFF" },
  },

  {
    id: "18",
    position: { x: 900, y: 20 },
    data: { label: "Online" },
    targetPosition: "left",
    sourcePosition: "right",
    style: { backgroundColor: "#2A4494", color: "#FFFFFF" },
  },
  {
    id: "19",
    position: { x: 900, y: 60 },
    data: { label: "Interview" },
    targetPosition: "left",
    style: { backgroundColor: "#2A4494", color: "#FFFFFF" },
  },
  {
    id: "20",
    position: { x: 900, y: 100 },
    data: { label: "Public Data" },
    targetPosition: "left",
    style: { backgroundColor: "#2A4494", color: "#FFFFFF" },
  },
  {
    id: "21",
    position: { x: 900, y: 140 },
    data: { label: "Health" },
    targetPosition: "left",
    sourcePosition: "right",
    style: { backgroundColor: "#2A4494", color: "#FFFFFF" },
  },
];
const initialEdges = [
  {
    id: "e1-6",
    source: "1",
    target: "6",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },
  {
    id: "e1-7",
    source: "1",
    target: "7",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },

  {
    id: "e2-8",
    source: "2",
    target: "8",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },
  {
    id: "e2-9",
    source: "2",
    target: "9",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },

  {
    id: "e3-10",
    source: "3",
    target: "10",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },
  {
    id: "e3-11",
    source: "3",
    target: "11",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },

  {
    id: "e4-12",
    source: "4",
    target: "12",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },
  {
    id: "e4-13",
    source: "4",
    target: "13",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },

  {
    id: "e5-14",
    source: "5",
    target: "14",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },
  {
    id: "e5-15",
    source: "5",
    target: "15",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },

  {
    id: "e6-16",
    source: "6",
    target: "16",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },
  {
    id: "e6-17",
    source: "6",
    target: "17",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },

  {
    id: "e16-18",
    source: "16",
    target: "18",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },
  {
    id: "e16-19",
    source: "16",
    target: "19",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },
  {
    id: "e16-20",
    source: "16",
    target: "20",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },
  {
    id: "e16-21",
    source: "16",
    target: "21",
    markerEnd: {
      type: MarkerType.Arrow,
    },
    type: "step",
  },
];

const graphData = {
  1: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
  2: {
    Positive: 200,
    Negative: 100,
    Comments: 300,
  },
  // Add other nodes if needed
  3: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
  4: {
    Positive: 200,
    Negative: 100,
    Comments: 300,
  },
  5: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
  6: {
    Positive: 200,
    Negative: 100,
    Comments: 300,
  },
  7: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
  8: {
    Positive: 200,
    Negative: 100,
    Comments: 300,
  },
  9: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
  10: {
    Positive: 200,
    Negative: 100,
    Comments: 300,
  },
  11: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
  12: {
    Positive: 200,
    Negative: 100,
    Comments: 300,
  },
  13: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
  14: {
    Positive: 200,
    Negative: 100,
    Comments: 300,
  },
  15: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
  16: {
    Positive: 200,
    Negative: 100,
    Comments: 300,
  },
  17: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
  18: {
    Positive: 200,
    Negative: 100,
    Comments: 300,
  },
  19: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
  20: {
    Positive: 200,
    Negative: 100,
    Comments: 300,
  },
  21: {
    Positive: 400,
    Negative: 300,
    Comments: 500,
  },
};

const CustomControls = () => {
  const { fitView } = useReactFlow();

  const handleFitView = useCallback(() => {
    if (fitView) {
      fitView();
    }
  }, [fitView]);

  return (
    <Controls>
      <button id="mybut" onClick={handleFitView}>
        Fit View
      </button>
    </Controls>
  );
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const [hoveredNodePosition, setHoveredNodePosition] = useState({
    x: 0,
    y: 0,
  });

  // State variables to track dimensions of the parent container
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight);

  const reactFlowWrapper = useRef(null);
  const reactFlowInstance = useRef(null);

  const [elements, setElements] = useState({
    nodes: initialNodes,
    edges: initialEdges,
  });

  useEffect(() => {
    const autoClick = () => {
      if (document.getElementById("mybut")) {
        document.getElementById("mybut").click();
        console.log("button clicked");
      }
    };
    autoClick();

    const timeoutId = setTimeout(autoClick, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
      setContainerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  //
  const handleNodeHover = (event, node) => {
    setHoveredNodeId(node.id);
    setHoveredNodePosition({ x: event.clientX, y: event.clientY });
  };

  const zoomLevel = Math.min(containerWidth / 1000, containerHeight / 500);

  return (
    <div
      className="myContainer"
      style={{
        position: "relative",
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        transform: `scale(${zoomLevel})`,
        transformOrigin: "top left",
      }}
    >
      <ReactFlow
        elements={elements}
        onLoad={(rf) => (reactFlowInstance.current = rf)}
        ref={reactFlowWrapper}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeMouseEnter={handleNodeHover}
      >
        <Controls onFitView={() => {}} />
        <CustomControls />

        <Background variant="plain" gap={12} size={1} />
      </ReactFlow>
      {hoveredNodeId && (
        <div
          style={{
            position: "absolute",
            top: hoveredNodePosition.y + 20,
            left: hoveredNodePosition.x + 20,
            background: "#CCCCCC",
          }}
        >
          <div style={{ width: 300, height: 200 }}>
            <BarChart
              width={300}
              height={200}
              data={Object.entries(graphData[hoveredNodeId]).map(
                ([key, value]) => ({ name: key, value })
              )}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" type="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#00CADC" />
            </BarChart>
          </div>
        </div>
      )}
    </div>
  );
}
