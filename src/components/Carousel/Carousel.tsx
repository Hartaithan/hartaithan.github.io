import { FC, Fragment, useState } from "react";
import { motion, AnimatePresence, DragHandlers } from "framer-motion";
import { sliderAnimation } from "../../animations";
import data from "../../data/projects.json";
import { IProjectItem } from "../../models/ProjectsModel";
import IconArrow from "../../icons/Arrow";
import { socialIcons } from "../../constants/socials";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
const transition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.5 },
};

const Carousel: FC = (): JSX.Element => {
  const projects = data as IProjectItem[];
  const [[page, dir], setPage] = useState([0, 0]);
  const [pos, setPos] = useState(true);

  const handlePrevPage = () => {
    changePage(-1);
  };

  const handleNextPage = () => {
    changePage(+1);
  };

  const handleDragEnd: DragHandlers["onDragEnd"] = (
    e,
    { offset, velocity }
  ) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      handleNextPage();
    } else if (swipe > swipeConfidenceThreshold) {
      handlePrevPage();
    }
  };

  const changePage = (newDir: number) => {
    const numOfPages = projects.length - 1;
    switch (newDir) {
      case -1:
        if (page > 0) {
          setPage([page + newDir, newDir]);
          setPos(!pos);
        } else {
          setPage([numOfPages, newDir]);
          setPos(!pos);
        }
        break;
      case +1:
        if (page < numOfPages) {
          setPage([page + newDir, newDir]);
          setPos(!pos);
        } else {
          setPage([0, newDir]);
          setPos(!pos);
        }
        break;
      default:
        setPage([0, newDir]);
        setPos(!pos);
        break;
    }
  };

  const changePageBullet = (index: number) => {
    if (index !== page) {
      if (index < page) {
        setPage([index, -1]);
        setPos(!pos);
      } else {
        setPage([index, +1]);
        setPos(!pos);
      }
    }
  };

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter initial={false} custom={dir}>
        <motion.div
          className="projects__main"
          key={projects[page].name}
          custom={dir}
          variants={sliderAnimation}
          initial="sliderEnter"
          animate="sliderCenter"
          exit="sliderExit"
          transition={transition}
          onDragEnd={handleDragEnd}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
        >
          <div
            className="projects__main__container"
            style={{ alignSelf: pos === false ? "flex-start" : "flex-end" }}
          >
            <div
              className="projects__main__container__title"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {`${projects[page].id}. ${projects[page].name}`}
            </div>
            <div
              className="projects__main__container__category"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {projects[page].categ}
            </div>
            <div
              className="projects__main__container__descr"
              style={{ textAlign: pos === false ? "start" : "end" }}
            >
              {projects[page].descr}
            </div>
            <div className="projects__main__container__tags">
              <ul
                style={{
                  justifyContent: pos === false ? "flex-start" : "flex-end",
                }}
              >
                {projects[page].tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div
              className="projects__main__container__links"
              style={{
                justifyContent: pos === false ? "flex-start" : "flex-end",
              }}
            >
              {projects[page].links.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    href={link.src}
                    key={link.icon}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon width={20} height={20} />
                  </a>
                );
              })}
            </div>
          </div>
          <div
            className="projects__main__img"
            style={{ alignSelf: pos === false ? "flex-end" : "flex-start" }}
          >
            <img
              src={projects[page].img}
              draggable="false"
              alt="projects main img"
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="projects__arrows">
        <IconArrow
          direction="left"
          className="projects__arrows__left"
          onClick={handlePrevPage}
        />
        <IconArrow
          direction="right"
          className="projects__arrows__right"
          onClick={handleNextPage}
        />
      </div>
      <div className="projects__pages">
        {projects.map((item, index) => {
          return (
            <div
              className="projects__pages__item"
              id={`page${index}`}
              key={item.name}
              style={{ background: page === index ? "white" : "#1b1b1b" }}
              onClick={() => changePageBullet(index)}
            ></div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Carousel;
