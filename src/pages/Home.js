import classes from "./Home.module.css";

const Home = () => {
  return (
    <div id="home" className={classes.block}>
      <div className={classes.outer}>
        <p className={classes.intro}> Hi, my name is</p>
        <h1 className={classes.name}> Bhaven Naik.</h1>
        <h2 className={classes.sdev}>I'm a Software Developer.</h2>
        <p className={classes.summary}>
          I'm currently looking for any available opporunites as a developer.
        </p>
      </div>
    </div>
  );
};

export default Home;
