import { motion } from 'framer-motion';
import './mentors.scss';
import ImageTeacher from '../../assets/mentors/team-1.jpeg';
import ImageTeacher2 from '../../assets/mentors/team-2.jpeg';
import ImageTeacher3 from '../../assets/mentors/team-3.jpeg';
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
const blockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
};

export default function Mentors() {
  return (
    <section className="mentors-wrapper">
      <div className="teachers">
        <div className="teachers-header">
          <motion.h3
            custom={1}
            variants={buttonAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            Обучение Проводят
          </motion.h3>
        </div>
        <div className="teachers-cards">
          <motion.div
            custom={1}
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="teachers-card"
          >
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher})` }}
            />
            <h4>
              Lena
              <br /> Adams
            </h4>
            <p>Enrolled Agent</p>
          </motion.div>
          <motion.div
            custom={2}
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="teachers-card"
          >
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher3})` }}
            />
            <h4>
              Leo
              <br /> Gordon
            </h4>
            <p>Enrolled Agent</p>
          </motion.div>
          <motion.div
            custom={3}
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="teachers-card"
          >
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher4})` }}
            />
            <h4>Dmytro Arshynov</h4>
            <p>Enrolled Agent</p>
            <p>Tax Resolution Specialist</p>
            <p>Certified Tax Coach</p>
          </motion.div>
          <motion.div
            custom={4}
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="teachers-card"
          >
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher2})` }}
            />
            <h4>Alexander Kandelaki</h4>
            <p>Financial Advisor</p>
          </motion.div>
          <motion.div
            custom={5}
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="teachers-card"
          >
            <div
              className="teachers-card-avatar"
              style={{ backgroundImage: `url(${ImageTeacher5})` }}
            />
            <h4>Oleksandra Palmer</h4>
            <p>Mortgage Broker</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
