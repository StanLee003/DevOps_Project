const express = require('express');
const bodyParser = require('body-parser');
const wishRoutes = require('./routes/wishes');
const sequelize = require('./db/db');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/wishes', wishRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database synced successfully');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
