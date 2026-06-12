import "./FlowSteps.css";

const defaultSteps = [
  "Choose department",
  "Choose doctor",
  "Book appointment",
  "Track status",
];

const FlowSteps = ({ currentStep = 1, steps = defaultSteps, className = "" }) => {
  return (
    <div className={`flow-steps ${className}`.trim()} aria-label="Appointment booking flow">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const statusClass = stepNumber < currentStep ? "is-done" : stepNumber === currentStep ? "is-active" : "";

        return (
          <span className={`flow-step ${statusClass}`.trim()} key={step}>
            {stepNumber}. {step}
          </span>
        );
      })}
    </div>
  );
};

export default FlowSteps;
