import { useEffect, useRef } from 'react'

export default function Controls({ forward, backward }) {

  const eventListenerRef = useRef(null);

  useEffect(() => {
    function handleKey(event) {
      switch (event.key) {
        case "ArrowLeft":
          backward()
          break;
        case "ArrowRight":
          forward()
          break
      }
    }

    eventListenerRef.current = handleKey

    document.addEventListener('keydown', eventListenerRef.current)
    return () => {
      document.removeEventListener('keydown', eventListenerRef.current);
    }
  }, [])

  return (
    <div></div>
  )
}
