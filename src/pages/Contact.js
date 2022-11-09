import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className={classes.block}>
      <form
        method="POST"
        action="https://getform.io/f/70a7734a-55fd-4bb8-a0f6-54e393d648d8"
        className={classes.form}
      >
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            id="email"
            name="email"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="textarea">Your message</label>
          <textarea
            id="message"
            name="message"
            placeholder="I have an opportunity you might be interested in..."
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit" className={classes.submit}>
            Contact me!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
