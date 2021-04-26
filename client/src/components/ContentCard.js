import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
} from "@material-ui/core";
import React from "react";
import "./ContentCard.css";
function ContentCard() {
  return (
    <>
      <Card elevation={10}>
        <CardHeader
          avatar={<Avatar aria-label="counsellor avatar">R</Avatar>}
          title="Lorem Ipsum Dolor"
          subheader="Academic Advisor"
        />
        <CardContent color="primary">
          <h2 className="contentcard-h2">
            2:00 PM <br />
            Friday 13<sup>th</sup>, 2021
          </h2>
          <p>
            Counsellor Email: <br />
            vhdttdhv@student.douglascollege.ca
          </p>
          <p>
            Your note:
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab incidunt
            aut repudiandae
          </p>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="large">
            Cancel appointment
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ContentCard;
