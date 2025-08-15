import { motion } from "framer-motion";

export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-aurora-primary/20 border-t-aurora-primary rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function PageLoader({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}