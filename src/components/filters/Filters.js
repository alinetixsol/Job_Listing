import removeIcon from "../../assets/images/icon-remove.svg";
import useDataStore from "../../store/store";

export default function Filters() {
  const languages = useDataStore((store) => store.languageFilters);
  const removeLanguages = useDataStore((store) => store.removeLanguages);
  const clearLanguages = useDataStore((store) => store.clearLanguages);

  return (
    <div className="filters-container">
      <div className="filters">
        {languages?.map((language, ind) => {
          return (
            <div className="names" key={ind}>
              <p className="filter-name">{language}</p>
              <span className="filter-icon" onClick={()=> removeLanguages(language)}>
                <img src={removeIcon} alt="remove icon" />
              </span>
            </div>
          );
        })}
      </div>
      <button className="clear" onClick={clearLanguages}>Clear</button>
    </div>
  );
}
