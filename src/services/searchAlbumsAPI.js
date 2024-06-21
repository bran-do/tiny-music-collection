async function searchAlbumsAPI(term) {
  const artistNameURL = encodeURI(term).replaceAll('%20', '+');

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;
  const APIResponse = await fetch(getAlbumsAPI);
  const { results } = await APIResponse.json();

  const response = results.map((albumData) => ({ ...albumData }));
  return response;
}

export default searchAlbumsAPI;