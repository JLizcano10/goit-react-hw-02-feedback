import { ButtonContainer, ButtonOption } from './FeedbackOptions.styles';

const FeedbackOptions = ({ options, increment }) => {
  return (
    <ButtonContainer>
      {options.map(option => (
        <ButtonOption
          key={option}
          type="button"
          onClick={() => {
            increment(option);
          }}
        >
          {option}
        </ButtonOption>
      ))}
    </ButtonContainer>
  );
};

export default FeedbackOptions;
