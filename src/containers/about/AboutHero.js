import React, { Component } from "react";
import injectSheet from "react-jss";
import ChevronDoubleDownIcon from "mdi-react/ChevronDoubleDownIcon";

const styles = theme => ({
  hero: {
    color: "rgba(255, 255, 255, 0.95)",
    padding: "0 1.25rem",
    paddingTop: theme.navHeight,
    paddingBottom: "3.5rem",
    fontFamily: "'Open Sans', sans-serif",
    background: "linear-gradient(45deg, hsl(205, 87%, 29%), hsl(203, 84%, 35%))",
  },
  heroTitle: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  heroProfile: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "center",
    },
    maxWidth: "60rem",
    margin: "0 auto",
  },
  heroProfileTitle: {
    fontWeight: 600,
    marginTop: 0,
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "inherit",
    },
  },
  heroProfileDetails: {
    flex: 1,
    marginTop: "1.5rem",
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
  },
  avatarContainer: {
    textAlign: "center",
    marginRight: 0,
    [theme.breakpoints.up("md")]: {
      marginRight: "2.5rem",
    },
  },
  avatar: {
    width: "12rem",
    height: "12rem",
    borderRadius: "100%",
    border: "5px solid rgba(250, 250, 250, 0.8)"
  },
  heroBlurb: {
    lineHeight: "1.5",
  },
  heroBlurbPrimary: {
    composes: "$heroBlurb",
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "2.5rem",
  },
  "@keyframes hero-scroll-icon": {
    "0%": {
      opacity: 0,
      transform: "translateY(-0.5rem)",
    },
    "25%": {
      opacity: 0.8,
    },
    "50%": {
      opacity: 0,
      transform: "translateY(1rem)",
    },
    "100%": {
      opacity: 0,
      transform: "translateY(-1rem)",
    }
  },
  heroScrollIcon: {
    textAlign: "center",
    marginTop: "2rem",
    transform: "translateY(-0.5rem)",
    opacity: 0,
    animation: "hero-scroll-icon 2.5s ease 2s infinite",
  },
  highlightWhite: {
    color: "#fbff57",
    transition: "color 0.2s, background-color 0.2s",
    "&:focus": {
      color: "#000",
      backgroundColor: "#fbff57",
      outline: "none",
      textDecoration: "none",
    },
  },
});

class AboutHero extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.hero}>
        <div className="container">
          <h1 className={classes.heroTitle}>About Me</h1>
          <p className={classes.heroBlurbPrimary}>
            I&apos;m a self-taught <span className={classes.highlightWhite}>programmer</span> that loves
            building <span className={classes.highlightWhite}>websites</span>, competitive programming, and math.
          </p>
          <div className={classes.heroProfile}>
            <div className={classes.avatarContainer}>
              <img src="/assets/avatar.jpg" className={classes.avatar} alt="Avatar" />
            </div>
            <div className={classes.heroProfileDetails}>
              <h2 className={classes.heroProfileTitle}>Nathan Wang (thecodingwizard)</h2>
              <p className={classes.heroBlurb}>
                I&apos;ve been coding in various languages for six years. Recently, I have worked extensively with
                React and Angular, building complex <span
                className={classes.highlightWhite}>Single Page Applications</span>. I am currently contracted by <a
                href="https://www.randommath.com/" rel="noopener noreferrer" className={classes.highlightWhite}
                target="_blank">Random Math</a> as a full-stack developer.
              </p>
              <p className={classes.heroBlurb}>
                Outside of programming and math, I also participate in a variety of <span
                className={classes.highlightWhite}>clubs</span>, including Model UN, FBLA, Speech, and Debate.
              </p>
            </div>
          </div>
          <div className={classes.heroScrollIcon}>
            <ChevronDoubleDownIcon color="#fff" />
          </div>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(AboutHero);