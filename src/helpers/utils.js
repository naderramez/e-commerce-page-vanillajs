export const getFileURL = (url) => {
  const fileURL = `${window.origin}${url}`;
  return fileURL;
};

export const encodePropsObj = (obj) => {
  const encodedProps = encodeURIComponent(JSON.stringify(obj));
  return encodedProps;
};

export const decodePropsObj = (encodedObj) => {
  const decodedProps = JSON.parse(decodeURIComponent(encodedObj));
  return decodedProps;
};
