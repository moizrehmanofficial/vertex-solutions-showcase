import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type InViewOptions = Parameters<typeof useInView>[1];

export function useInViewOnce<T extends Element>(options?: InViewOptions) {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref, options);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView) setHasBeenInView(true);
  }, [isInView]);

  return { ref, hasBeenInView };
}
