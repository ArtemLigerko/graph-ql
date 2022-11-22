import { Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { SEARCH_MOVIES } from "../queries";

const HomeContainer = ({ text }: any) => {
  const { loading, error, data } = useQuery(SEARCH_MOVIES, {
    variables: {
      query: text,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {text &&
        data.searchMovie.movies.map((el: any) => {
          return (
            <Card key={el.id} style={{ width: "24rem", margin: "0.5rem" }}>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="/wwwBQK45qSedBdgQGuJXdwJOQE2.jpg"
                />
                <Card.Title>
                  <span>{el.original_title}</span>
                </Card.Title>
                <Card.Text>
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

export default HomeContainer;
