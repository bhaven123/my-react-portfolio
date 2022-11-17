import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div class={classes.loader}>
      <div class={classes["loader-inner"]}>
        <div class={classes["loader-line-wrap"]}>
          <div class={classes["loader-line"]}></div>
        </div>
        <div class={classes["loader-line-wrap"]}>
          <div class={classes["loader-line"]}></div>
        </div>
        <div class={classes["loader-line-wrap"]}>
          <div class={classes["loader-line"]}></div>
        </div>
        <div class={classes["loader-line-wrap"]}>
          <div class={classes["loader-line"]}></div>
        </div>
        <div class={classes["loader-line-wrap"]}>
          <div class={classes["loader-line"]}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
