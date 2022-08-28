import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import React from "react";
import Header from "../header/Header";
function User({ user }) {
  return (
    <Grid>
      <Card>
        <CardContent>
          <Avatar sx={{ bgcolor: "#000" }} aria-label="recipe">
            {user.login.slice(0, 1).toUpperCase()}
          </Avatar>
          {user.login}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default User;
