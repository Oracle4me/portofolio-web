import { useActiveSectionContext } from "@/components/section-active-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "@/utils/type";

export default function useSectionContext(
  sectionName: SectionName,
  threshold: number
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeLastClick, sectionName]);
  return {
    ref,
  };
}
