// const express = require('express');
// // const connectDB = require('./config/database');
// // const empRoutes = require('./routes/empRoutes');
// require('dotenv').config();

// const app = express();
// app.use(express.json());

// // connectDB();
// // app.use('/api', empRoutes);

// app.get("/",(req,res)=>{
//     res.send('API is running.......');
// });

// app.get('/orders',(req,res)=>{
//     res.send('this orders routes');
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require('express');
const connectDB = require('./config/database.js');
const empRoutes = require('./routes/empRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();
app.get('/',(req,res)=>{
    res.send('API is running 🚀 ');
})
app.use('/api', empRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
