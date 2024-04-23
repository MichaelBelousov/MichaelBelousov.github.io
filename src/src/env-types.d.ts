declare module '*.svg' {
  // FIXME:
  const path: any
  export default path
}

declare module '*.inline.svg' {
  //const ReactComponent: import("react").Svg
  const ReactComponent: any
  export default ReactComponent
}


declare module '*.module.scss' {
  const classes: Record<string, string>
  export = classes
}

declare module '*.css'
declare module '*.scss'
