export type PersonalData = {
  name: string;
  lastName: string;
  birthDate: string;
  gender: "male" | "female" | "other" | "preferNotToMention";
  email: string;
  newsletter: boolean;
};
