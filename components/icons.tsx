import React from "react";

/* ========================= REACT ICON ========================= */
interface ReactIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ReactIcon: React.FC<ReactIconProps> = ({
  size = 24,
  color = "#61DAFB",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      width={size}
      height={size}
      className={className}
    >
      <circle cx="0" cy="0" r="2.05" fill={color} />
      <g stroke={color} strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
};

/* ========================= VERCEL ICON ========================= */
interface VercelIconProps {
  size?: number;
  className?: string;
}

export const VercelIcon: React.FC<VercelIconProps> = ({
  size = 24,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 76 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M38 0L75.3013 65H0.69873L38 0Z" fill="black" />
    </svg>
  );
};

/* ========================= GITHUB ICON ========================= */
interface GithubIconProps {
  size?: number;
  className?: string;
}

export const GithubIcon: React.FC<GithubIconProps> = ({
  size = 24,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.27-.01-1.15-.02-2.09-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.3-1.69-1.3-1.69-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.57-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99 0 2 .13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.46-2.69 5.43-5.25 5.72.43.37.81 1.1.81 2.22 0 1.6-.02 2.88-.02 3.27 0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
};

/* ========================= FIREBASE ICON ========================= */
interface FirebaseIconProps {
  size?: number;
  className?: string;
}

export const FirebaseIcon: React.FC<FirebaseIconProps> = ({
  size = 24,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 256 351"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#FFC24A" d="M0 280 42 0l84 63z" />
      <path fill="#FFA712" d="M0 280l42-280 62 206z" />
      <path fill="#F6820C" d="m128 94-42-31 62 206 55-35z" />
      <path fill="#FFCB2E" d="m256 280-128 71L0 280l128-186z" />
    </svg>
  );
};

/* ========================= NODE.JS ICON ========================= */
interface NodeIconProps {
  size?: number;
  className?: string;
}

export const NodeIcon: React.FC<NodeIconProps> = ({
  size = 24,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 256 272"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#83CD29"
        d="m128 0 110 63v126l-110 63-110-63V63z"
      />
      <path
        fill="#fff"
        d="M176 145c0-26-15-33-46-38-32-5-39-9-39-20 0-17 20-20 33-20 12 0 28 4 39 11l6 4 12-25c-15-9-33-15-55-15-40 0-67 21-67 55 0 26 16 40 51 46 30 4 34 10 34 19 0 14-18 23-37 23-17 0-33-4-49-14l-7-5-12 25c16 11 39 18 68 18 43 0 71-21 71-56Z"
      />
    </svg>
  );
};

/* ========================= JAVASCRIPT ICON ========================= */
interface JavaScriptIconProps {
  size?: number;
  className?: string;
}

export const JavaScriptIcon: React.FC<JavaScriptIconProps> = ({
  size = 24,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 630 630"
    >
      <rect width="630" height="630" fill="#f7df1e" />
      <path d="m423.2 492.19c12.69 20.72..." />
    </svg>
  );
};
