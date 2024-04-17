import { motion } from "framer-motion";

export default function Links() {
  const options = ["Home", "Timeline", "Portfolios", "Contact", "About"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <>
      <motion.div
        id = "links"
        className="links absolute w-full h-full flex flex-col items-center justify-center gap-8"
        variants={variants}
      >
        {options.map((item, ind) => (
          <motion.a
            href={`#${item}`}
            key={item}
            className="text-4xl"
            variants={itemVariants}
            whileHover={{ scale: 1.1, transition: { duration: 0.01 }, opacity: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
