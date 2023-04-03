import {
  AppBar,
  Container,
  MenuItem,
  Select,
 
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

 

function Header() {
  // const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const history = useHistory();

  return (
   <>
           <span style={{ fontSize:"large" , fontWeight:"bolder" , marginLeft:"2%"}}> Choose prices in INR or USD :</span>
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 , color:"black" , fontWeight:"bold" , border:"0.5px solid grey" }}
              onChange={(e) => setCurrency(e.target.value)}
              >

         
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
         
     
              </>
  );
}

export default Header;
