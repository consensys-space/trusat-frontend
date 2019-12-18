import React, { useState, useEffect, Fragment } from "react";
import { useTrusatGetApi } from "../app/app-helpers";
import axios from "axios";
import Spinner from "../app/components/Spinner";

export default function TestError() {
  // const [{ data, isLoading, errorMessage }, doFetch] = useTrusatGetApi();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(``);

  useEffect(() => {
    // doFetch(`/errorTest`);

    async function fetchErrorMessage() {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `https://api.consensys.space:8080/errorTest`
        );
        console.log(response);
      } catch (error) {
        console.log(error);
        setErrorMessage(error.toString());
      }
    }

    fetchErrorMessage();
    setIsLoading(false);
  }, []);

  return (
    <Fragment>
      <div>This is a component for testing cookies</div>
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="app__error-message">{errorMessage}</p>
      ) : (
        <p>API call was succesful</p>
      )}
    </Fragment>
  );
}