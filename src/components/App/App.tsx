import {Header } from '../Header/Header';
import { PersonalDataForm } from '../PersonalDataForm/PersonalDataForm';
import { AccessDataForm } from '../AccessData/AccessData';
import { Footer } from '../Footer/Footer';
import './App.css';

export function App() {

  return (
    <>
      <Header></Header>
      <PersonalDataForm></PersonalDataForm>
      <AccessDataForm></AccessDataForm>
      <Footer></Footer>
    </>
  );
}
