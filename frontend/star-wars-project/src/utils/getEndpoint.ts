export const getEndpoint = (url: string) => {
  const [baseUrl, endpoint] = url.split("/api");
  return endpoint;
};
