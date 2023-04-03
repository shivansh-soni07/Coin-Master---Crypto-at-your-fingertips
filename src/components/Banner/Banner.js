import { Container, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  banner: {
   backgroundColor:"#140D4F"
  },
  bannerContent: {
    height: 200,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color:"#87F5FB"
            }}
          >
           Coin Master
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "#87F5FF",
              fontWeight:"bolder",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Crypto Currency at your fingertips
           
          </Typography>
        </div>
        
      </Container>
    </div>
  );
}

export default Banner;
