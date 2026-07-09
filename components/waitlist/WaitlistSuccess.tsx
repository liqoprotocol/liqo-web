"use client";

import { motion, type Variants } from "framer-motion";
import { PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

interface WaitlistSuccessProps {
  onReset?: () => void;
}

const WaitlistSuccess = ({ onReset }: WaitlistSuccessProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-4 py-6 text-center"
    >
      <motion.div
        variants={rise}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.05 }}
        className="flex size-14 items-center justify-center rounded-full bg-primary-soft text-primary-dark"
      >
        <PartyPopper size={26} />
      </motion.div>

      <motion.h3 variants={rise} className="text-2xl font-semibold text-white lg:text-3xl">
        You&apos;re on the list!
      </motion.h3>

      <motion.p variants={rise} className="max-w-md text-sm text-gray-400 lg:text-base">
        Thank you for joining the Liqo waitlist. We&apos;ll keep you updated as we get closer to
        launch — keep an eye on your inbox for product updates, early access invitations, and
        exclusive announcements.
      </motion.p>

      {onReset && (
        <motion.div variants={rise} className="mt-2">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <Button
              type="button"
              onClick={onReset}
              className="bg-[#4D4D4D] px-5 py-5 text-white hover:bg-[#333] hover:text-white transition-all duration-300"
            >
              Back to Website
            </Button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WaitlistSuccess;
