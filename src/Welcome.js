// import {useState} from 'react';
// import {produce} from 'immer';
import {useImmer} from 'use-immer';

const Welcome = ({firstName = '', lastName = ''}) => {

  // IMMER Classic
  // const [values, setValues] = useState({
  //   firstName: props.firstName,
  //   lastName: props.lastName,
  // });

  // const handleChange = (event) => {
  //   setValues(produce(values, draft => {draft[event.target.name] = event.target.value; }));
  // };


  //useImmer
  const [values, setValues] = useImmer({
    firstName: firstName,
    lastName: lastName,
  });

  const handleChange = (event) => {
    setValues(draft => {draft[event.target.name] = event.target.value; });
  };


  return (
    <div>
      <h1>
        Welcome, {values.firstName} {values.lastName}
      </h1>

      <form name="userName">
        <label>
          First Name
          <input
            value={values.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </label>

        <label>
          Last Name
          <input
            value={values.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default Welcome;