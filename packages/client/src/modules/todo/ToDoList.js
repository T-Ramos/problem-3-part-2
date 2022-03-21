import { useQuery } from "@apollo/client";
import React from "react";
import { GET_TODOS } from "./queries";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/Loading";
import { Grid, Card, CardContent } from "@mui/material";

export const ToDoList = () => {
  const { data, error, loading } = useQuery(GET_TODOS);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  return data.map((t, i) => (
    <Card key={i}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>{t.description}</Grid>
        </Grid>
      </CardContent>
    </Card>
  ));
};
