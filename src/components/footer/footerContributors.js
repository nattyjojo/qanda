const FooterContributor = ({ repoHRef, imgHref, name, linkedinREf }) => {
  return (
    <div className="footerCard">
      <a href={repoHRef}>
        <img src={imgHref} alt={name} width="50px" height="50px"></img>
      </a>
      <br></br>
      <a href={repoHRef}>{name}</a>
      <br></br>

      <a href={repoHRef}>
        <i className="fa-brands fa-github"></i>
      </a>
      <a href={linkedinREf}>
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};
export default FooterContributor;
