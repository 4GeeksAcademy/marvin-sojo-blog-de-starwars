const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      vehicles: [],
      planets: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getCharacters: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/people");
          if (response.ok) {
            const data = await response.json();
            setStore({ characters: data.results });
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
      },
      



      getVehicles: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/vehicles");
          if (response.ok) {
            const data = await response.json();
            setStore({ vehicles: data.results });
            console.log(data.results);
          }
        } catch (error) {
          console.log(error);
        }
      },
      getPlanets: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/planets");
          if (response.ok) {
            const data = await response.json();
            setStore({ planets: data.results });
            console.log(data.results);
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
