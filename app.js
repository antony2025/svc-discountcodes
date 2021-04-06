const express = require("express");
const discountCodeRoutes = require("./routes/discount-codes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(
    `Got ${req.method} for ${req.originalUrl} with payload ${JSON.stringify(
      req.body
    )}`
  );
  next();
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(discountCodeRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message || "Something went wrong.";
  const errors = error.errors || [];
  res.status(status).json({ message, errors });
});

app.listen(8080, () => console.log("Listening on port 8080"));
