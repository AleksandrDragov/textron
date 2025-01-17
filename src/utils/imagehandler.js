const importAll = (r) => {
  let images = {};

  r.keys().forEach((item) => {
   
    const fileName = item.split('/').pop();
 
    const folderName = item.includes('/') ? item.split('/')[1] : null;

  
    images[fileName] = folderName ? [r(item), folderName] : [r(item)];
  });

  return images;
};

const images = importAll(require.context('../images', true, /\.(png|jpe?g|svg)$/));

export default images; 
  
