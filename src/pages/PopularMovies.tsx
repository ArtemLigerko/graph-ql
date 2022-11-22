import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import { GET_POPULAR_MOVIES } from "../queries";

const PopularMovies = () => {
  const { loading, error, data } = useQuery(GET_POPULAR_MOVIES);

  // console.log(data.upcomingMovies.movies);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {data.popularMovies.movies.map((el: any) => {
        return (
          <Card key={el.id} style={{ width: "24rem", margin: "1rem" }}>
            <Card.Body>
              <Card.Img variant="top" src="/wwwBQK45qSedBdgQGuJXdwJOQE2.jpg" />
              <Card.Title>
                <span>{el.original_title}</span>
              </Card.Title>
              <Card.Text className="d-flex flex-column">
                <span>{el.release_date}</span>
                <span>{el.poster_path}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default PopularMovies;
