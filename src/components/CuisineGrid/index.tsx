import React from "react";
import { Link } from "react-router-dom";
import { Card, Grid } from "./styles";

interface ICuisineGridProps {
  listItems: any[];
}

const CuisineGrid = (props: ICuisineGridProps) => {
  const { listItems } = props;
  return (
    <Grid
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {listItems.map((data) => (
        <Link to={`/recipe/${data.id}`} key={data.id}>
          <Card>
            <img src={data.image} alt={data.title} />
            <h4>{data.title}</h4>
          </Card>
        </Link>
      ))}
    </Grid>
  );
};

export default CuisineGrid;
