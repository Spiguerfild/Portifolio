import "./TopSections.css";

function TopSections({ title }) {
  return (
    <div id="top-sections">
      <div className="line">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default TopSections;
