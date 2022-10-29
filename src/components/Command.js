export default function Command({ command }) {
  const { id, input, verified } = command;

  const text = verified ? input : `!error ${input}`;
  const className = verified
    ? "command-history"
    : "command-history command-error";
  console.log("text", text);
  console.log("verified", verified);

  return (
    <p data-testid={`command-${id}`} className={className}>
      {text}
    </p>
  );
}
