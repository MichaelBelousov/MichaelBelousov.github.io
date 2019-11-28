
declare module '*.scss' {
  const classes: {[className: string]: string};
  export default classes;
}

declare module '*.svg' {
  export const ReactComponent: React.ComponentType<React.HTMLAttributes<SVGSVGElement>>;
  const url: string;
  export default url;
}

