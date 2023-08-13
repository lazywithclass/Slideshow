import { useState } from 'react'

import Controls from './Controls'
import Image from './Image'

export default function Slideshow({sources}) {

  const [index, setIndex] = useState(0)

  function backward() {
    setIndex(prev => prev > 0 ? prev - 1 : prev)
  }
  function forward() {
    setIndex(prev => prev >= sources.length - 1 ? prev : prev + 1)
  }

  return (
    <>
      <Controls backward={backward} forward={forward} />
      <span>{index}</span>
      <Image src={sources[index]} />
    </>
  )
}
