import { ButtonContainer } from './FeedbackButtons.styles';

const FeedbackButtons = ({ options, increment }) => {
  return (
    <ButtonContainer>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => {
            increment(option);
          }}
        >
          {option}
        </button>
      ))}
    </ButtonContainer>
  );
};

export default FeedbackButtons;
