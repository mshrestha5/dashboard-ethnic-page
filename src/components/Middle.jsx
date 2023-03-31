import React from "react";
import SeOpt from "./SeOpt";
import Btnn from "./Btnn";
import Gender from "./Gender";

const styles = {
  app: {
    justifyItems: "center",
    alignItems: "center",
    display: "grid",
    fontFamily: "Arial",
    gridTemplateColumns: "1fr",
    fontSize: 15,
  },
  select: {
    width: "100%",
    maxWidth: 600,
  },
};

const options = [
  { name: "Select all that apply...", label: "Select all that apply..." },
  {
    name: "American Indian or Alaskan Native",
    label: "American Indian or Alaskan Native",
  },
  { name: "Asian", label: "Asian" },
  { name: "Black or African American", label: "Black or African American" },
  { name: "White", label: "White" },
  {
    name: "Native Hawaiian or Other Pacific Islander",
    label: "Native Hawaiian or Other Pacific Islander",
  },
  { name: "Other", label: "Other" },
  { name: "Decline to self identify", label: "Decline to self identify" },
];

function onChangeInput(value) {
  console.log(value);
}
const Middle = () => {
  return (
    <>
      {/* Navbar begins */}
      <div>
        <h1 className="text-2xl text-center bg-purple-500">Navbar</h1>
      </div>
      {/* navbar ends */}

      <div>
        <div className="outer div pt-24">
          <h1 className="flex justify-center text-center text-2xl font-semibold">
            Tell us about yourself
          </h1>
        </div>

        <div className="inner div pt-6">
          <h2 className="flex justify-center text-center px-52  font-normal">
            We don't share this data with anyone. This information is only used
            to autofill your job applications and will never hurt your chances
            of landing a job
          </h2>
        </div>

        <div className="s-inner pt-6">
          <h2 className="flex justify-center text-center font-semibold text-xl pb-4">
            What is your ethnicity?
          </h2>
        </div>

        {/* drop box */}
        <div style={styles.app}>
          <SeOpt
            style={styles.select}
            defaultValue={options[0]}
            onChange={onChangeInput}
            options={options}
          />
        </div>
        {/* drop ends */}

        {/* radio buttons */}
        {/* first div */}
        <div className=" px-44 mt-12 grid grid-auto-fit gap-8">
          <div className="grid2-item">
            <h3 className="text-center font-semibold">
              Do you have a disability?
              {/* <div className=" grid grid-cols-2"> */}
              <Btnn />
              {/* </div> */}
            </h3>
          </div>
          <div className="grid2-item">
            <h3 className="text-center font-semibold">Are you a veteran?</h3>
            <Btnn />
          </div>
        </div>

        {/* second div */}
        <div className=" px-44 mt-12 grid grid-auto-fit gap-8">
          <div className="grid2-item">
            <h3 className="text-center font-semibold">
              Do you identify as LGBTQ+?
              <Btnn />
            </h3>
          </div>
          <div className="grid2-item">
            <h3 className="text-center font-semibold">What is your gender?</h3>
            <Gender />
          </div>
        </div>
        {/* Radio button ends */}

        {/* footer starts*/}
        <div>
          <h1 className="text-center pt-14 pb-6">
            By continuing you agree to the definitions set by the{" "}
            <span className="text-cyan-400 ">U.S. EEOC</span>.
          </h1>
        </div>
        {/* footer ends*/}
      </div>
    </>
  );
};

export default Middle;

//how to use tailwindcss grid to put two buttons in it?
