import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import React from "react";
import Header from "../header/Header";
function User({ user }) {
  return (
    <Grid>
      <Card>
        <CardContent> {user.login} </CardContent>
      </Card>
    </Grid>
  );
}

export default User;
