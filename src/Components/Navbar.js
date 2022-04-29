import { AppBar, Grid, Toolbar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import FontDownloadIcon from "@material-ui/icons/FontDownload";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import React from "react";

function Navbar() {

 const  styles={
    color: "#293fba",
    paddingRight:"10px",
     
  }
  const  MenuIcon ={
    fontSize: "34px",
    marginBottom: "3px",
    color: "#293fba",
  }
  const app={
    backgroundColor:"#9ddfec",
    width:"100%"
  }
  const tuneicon={
    marginLeft: "-5%", marginTop: "13px", color: "#293fba"
  }
  return (
    <div>
      <AppBar style={app}>
        <Toolbar>
          <Grid item xs={4}>
            <MenuRoundedIcon style={MenuIcon} />   
            <img src="assets/newww.png" alt="logo" />
          </Grid>

          <Grid item  xs={6}>
            <TextField
              label={<SearchRoundedIcon style={{ color: "#293fba" }} />}
              variant="outlined"
              style={{ width: "80%" }} />
            <TuneRoundedIcon style={tuneicon} />
          </Grid>
          <Grid item  xs={2} >
            <HelpOutlineRoundedIcon style={styles} />
            <SettingsRoundedIcon style={styles}/>
            <AppsIcon style={styles} />
            <NotificationsOutlinedIcon style={styles} />
            <FontDownloadIcon style={styles}/>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
