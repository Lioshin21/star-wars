// Styles
import styles from "./PeoplePage.module.css";

// API
import { getApiResource } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";

// Hooks
import { useState, useEffect } from "react";

// Components
import PeopleList from "@components/PeoplePage/PeopleList/PeopleList";

// HOC
import { withErrorApi } from "@hoc-helpers/withErrorApi";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const response = await getApiResource(url);

    if (response) {
      const peopleList = response.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return <>{people && <PeopleList people={people} />}</>;
};

export default withErrorApi(PeoplePage);
