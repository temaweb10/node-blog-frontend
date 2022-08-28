import Grid from "@mui/material/Grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Loading from "../loading/Loading";
import User from "./User";
function Users() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(null);
  const getUsers = async () => {
    await axios
      .get("/api/users")
      .then((result) => {
        setUsers(result);
        setLoading("true");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      <Header />
      <div className="page">
        {loading ? (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {users.data.map((elem, index) => (
              <Grid item xs={2} sm={4} md={4} key={`user_block_${index}`}>
                <Link
                  to={`/user/${elem.login}`}
                  style={{ textDecoration: "none" }}
                >
                  <User user={elem} />
                </Link>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Users;
