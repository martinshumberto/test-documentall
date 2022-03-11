import { BsTelephone } from 'react-icons/bs';

function LoadingSpinner({ width = '100', height = '100' }) {
  return (
    <>
      <svg
        style={{
          margin: 'auto',
          display: 'block',
          shapeRendering: 'auto',
        }}
        width={width}
        height={height}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="rotate(0 50 50)">
          <rect
            x="47"
            y="24"
            rx="0"
            ry="0"
            width="6"
            height="12"
            fill="#d3d8dd"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.2048192771084336s"
              begin="-1.0542168674698795s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(45 50 50)">
          <rect
            x="47"
            y="24"
            rx="0"
            ry="0"
            width="6"
            height="12"
            fill="#d3d8dd"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.2048192771084336s"
              begin="-0.9036144578313252s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(90 50 50)">
          <rect
            x="47"
            y="24"
            rx="0"
            ry="0"
            width="6"
            height="12"
            fill="#d3d8dd"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.2048192771084336s"
              begin="-0.753012048192771s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(135 50 50)">
          <rect
            x="47"
            y="24"
            rx="0"
            ry="0"
            width="6"
            height="12"
            fill="#d3d8dd"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.2048192771084336s"
              begin="-0.6024096385542168s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect
            x="47"
            y="24"
            rx="0"
            ry="0"
            width="6"
            height="12"
            fill="#d3d8dd"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.2048192771084336s"
              begin="-0.4518072289156626s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(225 50 50)">
          <rect
            x="47"
            y="24"
            rx="0"
            ry="0"
            width="6"
            height="12"
            fill="#d3d8dd"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.2048192771084336s"
              begin="-0.3012048192771084s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(270 50 50)">
          <rect
            x="47"
            y="24"
            rx="0"
            ry="0"
            width="6"
            height="12"
            fill="#d3d8dd"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.2048192771084336s"
              begin="-0.1506024096385542s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(315 50 50)">
          <rect
            x="47"
            y="24"
            rx="0"
            ry="0"
            width="6"
            height="12"
            fill="#d3d8dd"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1.2048192771084336s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
      </svg>
    </>
  );
}

export default LoadingSpinner;
