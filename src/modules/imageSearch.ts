const ImageSearch = (() => {
  const getPictureUrl = async (word: string) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=h5PzZ3z9Kl0B9GeSp5YXOJZuFvSfvGiM&s=${word}`,
      { mode: "cors" }
    );
    const imageData = await response.json();
    return imageData.data.images.original.url;
  };

  return { getPictureUrl };
})();

export default ImageSearch;
