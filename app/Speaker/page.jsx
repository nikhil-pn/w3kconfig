"use client";
import Button from "../../components/Button/button";
import Speaker from "../../components/Speaker/Speaker";
const Speakers = () => {
  console.log(
    "%c Wallet Address : 0xb78f711838EFEd4351a8F144057AC27023bE636C",
    "font-weight: bold; font-size: 12px; color: green;"
  );
  console.log(
    "%c Follow this Steps : https://www.youtube.com/watch?v=xvFZjo5PgG0",
    "font-weight: bold; font-size: 12px; color: green;"
  );

  return (
    <>
      <Speaker />
      <Button></Button>
    </>
  );
};

export default Speakers;
