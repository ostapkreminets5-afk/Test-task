import { uk } from "../shared/locales/uk";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner-container">
        <div className="spinner-ring" />
        <div className="spinner-core" />
      </div>
      <p className="loading-text">{uk.states.loading}</p>
    </div>
  );
}
