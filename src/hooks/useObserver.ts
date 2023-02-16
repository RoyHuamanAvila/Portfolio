import { useEffect, useState, useRef } from "react"

export const useObserver = (options: IntersectionObserverInit) => {
  const [elements, setElements] = useState<Element[]>([])
  const [entries, setEntries] = useState([]);
  
  const observer = useRef(new IntersectionObserver((observedEntries)=>{
    
  }, options ))
  
  const currentObserver = observer.current;
  
  useEffect(() => {
    currentObserver.disconnect();

    if(elements.length > 0) {
      elements.forEach(element => currentObserver.observe(element))
    }

    return () => {
      if(currentObserver) {
        currentObserver.disconnect();
      }
    }
  }, [elements])
  


  return {currentObserver}
}
