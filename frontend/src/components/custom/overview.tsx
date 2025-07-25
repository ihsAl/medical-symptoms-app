import { motion } from 'framer-motion';
import {MedicIcon} from '@/components/custom/icons';

// This component displays an overview of the application with a welcome message and an icon.
// It is used to introduce the app to users and provide a brief description.
export const Overview = () => {
  return (
    <>
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.75 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-2 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <span className="text-[96px] leading-none">
            <MedicIcon />
          </span>
        </p>
        <p className="text black">
          Welcome to our <strong>Medical Symptoms App</strong><br />
          Get your accurate Diagnosis Now!<br />
        </p>
      </div>
    </motion.div>
    </>
  );
};
