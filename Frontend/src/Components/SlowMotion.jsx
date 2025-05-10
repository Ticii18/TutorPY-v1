import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SlowMotion({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animar solo una vez

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white dark:bg-gray-900"
    >
      {children}
    </motion.div>
  );
}
export default SlowMotion