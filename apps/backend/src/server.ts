import app from './app';

const port = process.env.BACKEND_PORT || 3000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}  🚀`);
});