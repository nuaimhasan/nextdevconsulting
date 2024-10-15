const mongoose = require("mongoose");

const WhatWeDoSchema = new mongoose.Schema({
  description: {
    type: String,
    allowNull: false,
  },
});

const WhatWeDo = mongoose.model("WhatWeDo", WhatWeDoSchema);

module.exports = WhatWeDo;
