/* eslint-disable @typescript-eslint/no-explicit-any */

/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next/images" />

declare module 'googlemaps'

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}
