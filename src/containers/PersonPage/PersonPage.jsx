// Styles
import styles from "./PersonPage.module.css";

import propTypes from "prop-types";

// Components
import PersonPhoto from "@components/PersonPage/PersonPhoto/PersonPhoto";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack/PersonLinkBack";

// Hooks
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getApiResource } from "@utils/network";
import { API_PERSON } from "@constants/api";
import { getPeopleImage } from "@services/getPeopleData";

// HOC
import { withErrorApi } from "@hoc-helpers/withErrorApi";

// UI components
import UiLoading from "@components/UI/UiLoading";

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null)
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      setPersonId(id)

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Hair color", data: res.hair_color },
          { title: "Skin color", data: res.skin_color },
          { title: "Eye color", data: res.eye_color },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);
        setPersonName(res.name);

        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  });

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto personPhoto={personPhoto} personName={personName} personId={personId} />
          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading theme="blue" isShadow/>}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  match: propTypes.object,
  setErrorApi: propTypes.func,
};

export default withErrorApi(PersonPage);
