

 
 const fetchOptions = async () => {
    try {
      const response = await fetch(
        "https://medprobe-auth-default-rtdb.firebaseio.com/.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch options");
      }
      const data = await response.json();
      const options = Object.keys(data).map((key) => ({
        value: key,
        label: key,
        ...data[key],
      }));

      console.log(data);
      console.log(options);
      setOptions(options);
    } catch (error) {
      console.error(error);
    }
  };

  export default fetchOptions;