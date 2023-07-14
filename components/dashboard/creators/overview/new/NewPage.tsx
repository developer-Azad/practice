'use client';
import { useState } from 'react';
import { NewCreatorForm } from './form';
import { Welcome } from 'components';

export const NewPage = () => {
  const [showForm, setShowForm] = useState(false);

  const changeShowHandler = () => {
    setShowForm((p) => !p);
  };

  return (
    <>
      {showForm ? (
        <NewCreatorForm />
      ) : (
        <Welcome
          desc='“You are just a few steps away from automating your brand deals,payments and banking – all in one place.”'
          onClick={changeShowHandler}
          btnText='Get Started'
        />
      )}
    </>
  );
};
