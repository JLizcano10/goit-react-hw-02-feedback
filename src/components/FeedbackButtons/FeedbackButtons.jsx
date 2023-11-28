import { ButtonContainer, ButtonOption } from './FeedbackButtons.styles';

const FeedbackButtons = ({ options, increment }) => {
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

export default FeedbackButtons;
