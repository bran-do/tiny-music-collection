const getTracklist = async (id) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const json = await request.json();
  return json.results;
};

export default getTracklist;