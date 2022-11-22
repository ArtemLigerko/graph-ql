import { gql } from "@apollo/client";

export const SEARCH_MOVIES = gql`
  query SearchMovies($query: String!) {
    searchMovie(query: $query) {
      movies {
        id
        original_title
        release_date
        poster_path
      }
    }
  }
`;

export const GET_UPCOMING_MOVIES = gql`
  query upcomingMovies {
    upcomingMovies {
      movies {
        id
        original_title
        release_date
        poster_path
      }
    }
  }
`;

export const GET_POPULAR_MOVIES = gql`
  query popularMovies {
    popularMovies {
      movies {
        id
        original_title
        release_date
        poster_path
      }
    }
  }
`;
