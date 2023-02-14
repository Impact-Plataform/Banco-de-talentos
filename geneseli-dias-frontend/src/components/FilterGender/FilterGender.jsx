const { useState, useEffect } = React;

const App = () => {
  const [data, setData] = useState([]);
  const [gender, setGender] = useState();

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
      });
  }, []);

  const filtered = gender ? data.filter((d) => d.gender === gender) : data;

  return (
    <div>
      <select onChange={(e) => setGender(e.target.value)}>
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <hr></hr>
      { (data && data.length) > 0 ? filtered.map((d) => (
        <p key={d.name}>
          {d.name} - {d.gender}
        </p>
      )) : "loading...."}
    </div>
  );
};

//ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export default App;