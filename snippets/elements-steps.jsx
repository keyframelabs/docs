export function ElementsSteps = ({ verb = "Generate" }) => {
  return (
    <Steps>
      <Step title="Install the Elements SDK">
        ```shellscript
        pnpm add @keyframelabs/elements
        ```
      </Step>

      <Step title="Create the HTML" />

      <Step title="Add the JavaScript" />

      <Step title={`${verb} ephemeral Keyframe credentials`} />

      <Step title={`${verb} ephemeral agent or LLM credentials`} />

      <Step title="Start a local server" />

      <Step title="Open and test" />
    </Steps>
  );
}
