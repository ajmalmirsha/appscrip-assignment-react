export default function Button({
  className,
  content,
}: {
  className: string;
  content: string;
}) {
  return <button className={className}>{content}</button>;
}
