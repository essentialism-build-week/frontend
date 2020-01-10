import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80vw;
  max-width: 370px;
  font-size: 1.2rem;
`;

const SubmitButton = styled.input`
  font-size: 1rem;
  margin: 20px;
  color: white;
  width: 250px;
  height: 50px;
  background: #ce98d9;
  border: 1px solid #dab1e2;
  border-radius: 10px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2),
    -4px -4px 3px rgba(255, 255, 255, 1), inset 1px 1px rgba(255, 255, 255, 0.2);
  outline: none;
`;

const StyledError = styled.p`
  font-size: 1rem;
  color: #F24141;
`

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

// This component allows the user to reinforce why her top 3 values are the most important to her.
// This is important because it allows the user to tell a story in her mind and connect the values she deems important, thus strengthening her own narrative, making it easier to decide where she wants to focus her time and energy in life.

const ValuesExplanation = () => {
  // This code is for the material UI forms
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };
  // ======================= //

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>Explain your choices.</p>
        <p>
          Focus on your thoughts and feelings. Don’t worry about spelling,
          grammar, or how well-written it is.
        </p>
      </div>
      <input
        name="explanation"
        ref={register({ required: true, minLength: 50 })}
        placeholder="These values are important to me because..."
      />
      {errors.explanation && errors.explanation.type === "required" && <StyledError>This is required</StyledError>}
      {errors.explanation && errors.explanation.type === "minLength" && <StyledError>50 character minimum</StyledError>}
      <SubmitButton type="submit" value="MY WORDS ARE ADEQUATE" />
    </ContainerForm>
  );
};

const mapStateToProps = state => {
  return {
    explanation: state.explanation
  };
};

// export default connect(mapStateToProps, {  }(ValuesExplanation))
export default ValuesExplanation;

// <Link to="/projects-intro">
// <SubmitButton>MY WORDS ARE DONE!</SubmitButton>
// </Link>
