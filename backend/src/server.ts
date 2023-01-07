import { app } from '.';

const port = 3333

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});