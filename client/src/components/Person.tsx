import React from "react";
import { useQuery, gql } from "@apollo/client";

const SAMPLE_QUERY = gql`
  query GetExchangeRates {
    quickExample(id: "1") {
      name
      films
    }
  }
`;

const Person = () => {
  const { loading, error, data } = useQuery(SAMPLE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>

  return (
    <div>
      <header>
        <p>
          {`The main character of the original Star Wars trilogy is ${data.quickExample.name}`}
        </p>
      </header>
    </div>
  );
};

export default Person;
