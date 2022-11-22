import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";
import { GET_UPCOMING_MOVIES } from "../queries";

const UpcomingMovies = () => {
  const { loading, error, data } = useQuery(GET_UPCOMING_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {data.upcomingMovies.movies
        // .sort(
        //   (a: any, b: any) =>
        //     +Date.parse(a.release_date) - +Date.parse(b.release_date)
        // )
        .map((el: any) => {
          return (
            <Card key={el.id} style={{ width: "24rem", margin: "1rem" }}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="/wwwBQK45qSedBdgQGuJXdwJOQE2.jpg"
                />
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

export default UpcomingMovies;
