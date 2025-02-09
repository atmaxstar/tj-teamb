import { Page } from "../App";

const IconButton = ({
    icon,
    name,
    page,
    setPage,
  }: {
    icon: string;
    name: Page;
    page: string;
    setPage: React.Dispatch<React.SetStateAction<Page>>;
  }) => {
    return (
      <button
        onClick={() => setPage(name)}
        className={`p-2 rounded transition-opacity duration-200 
          ${page === name ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
        aria-label={`Select ${name}`}
      >
        <img src={icon} alt={name} className="w-10 h-10 invert" />
      </button>
    );
  };

  export default IconButton