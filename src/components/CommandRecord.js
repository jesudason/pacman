export default function CommandRecord(props) {
  const { input, verified } = props.command;
  const text = verified ? input : `!error ${input}`;
  const className = verified
    ? "command-history"
    : "command-history command-error";

  return (
    <p data-testid={`command-${props.id}`} className={className}>
      {text}
    </p>
  );
}
