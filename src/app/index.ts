import app from './app';

app.listen(process.env.PORT, () => {
  console.log(`Api listening on port ${process.env.PORT}`);
});
