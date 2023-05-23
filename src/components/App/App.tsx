import { AccessDataForm } from '../AccessData/AccessData';
import {Header } from '../Header/Header';
import { PersonalDataForm } from '../PersonalDataForm/PersonalDataForm';
import './App.css'

export function App() {

  return (
    <>
      <Header></Header>
      <PersonalDataForm></PersonalDataForm>
      <AccessDataForm></AccessDataForm>
    </>
  );
}
