import { motion } from 'framer-motion';
import './imageCard.scss';
import ImageTeacher from '../../assets/mentors/team-1.jpeg';
import ImageTeacher2 from '../../assets/mentors/team-2.jpeg';
import ImageTeacher3 from '../../assets/mentors/3-960_o.png';
import ImageTeacher4 from '../../assets/mentors/team-4.jpeg';
import ImageTeacher5 from '../../assets/mentors/team-5.jpg';

const buttonAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

export default function ImageCard() {
  return (
    <div className="image-card-wrapper">
      <motion.div
        custom={1}
        variants={buttonAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="image-card"
        style={{ left: 30 }}
      >
        <div className="image-card-avatar" style={{ backgroundImage: `url(${ImageTeacher3})` }} />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, -5] }}
        transition={{ duration: 2 }}
        custom={2}
        variants={buttonAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="image-card image-card-rotate-354"
        style={{ left: 230, top: -10 }}
      >
        <div className="image-card-avatar" style={{ backgroundImage: `url(${ImageTeacher4})` }} />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 5] }}
        transition={{ duration: 2 }}
        custom={3}
        variants={buttonAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="image-card image-card-rotate"
        style={{ top: 250, left: 30 }}
      >
        <div className="image-card-avatar" style={{ backgroundImage: `url(${ImageTeacher2})` }} />
      </motion.div>
      <motion.div
        custom={4}
        variants={buttonAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="image-card"
        style={{ top: 250, left: 230 }}
      >
        <div className="image-card-avatar" style={{ backgroundImage: `url(${ImageTeacher5})` }} />
      </motion.div>
      <motion.div
        custom={5}
        variants={buttonAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="image-card-circle"
        style={{ top: 130, left: 150 }}
      >
        <div
          className="image-card-circle-avatar"
          style={{ backgroundImage: `url(${ImageTeacher})` }}
        />
      </motion.div>
    </div>
  );
}
