import { useEffect, useState, React } from "react";

const Load = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fullUrl = window.location.href;
    setUrl(fullUrl);

    //  Ou se você quiser apenas a parte de consulta da URL
    //  const query = window.location.search;
    //  setUrl(query);
   }, []);

//   console.log(url);
  return (
    <div>
      <h1>Carregando...</h1>
    </div>
  );
};

export default Load;
