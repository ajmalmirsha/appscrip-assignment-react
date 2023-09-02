export default function Cards({
  className,
  src,
  heading,
  para,
}: {
  className: string;
  src: string;
  heading: string;
  para: string;
}) {
  return (
    <div className={className}>
      <div className="cards-img-wrapper">
        <img width={100} height={100} src={src} alt="card-img" />
      </div>
      <h4 className="card-heading">{heading}</h4>
      <p className="card-content">{para}</p>
    </div>
  );
}
