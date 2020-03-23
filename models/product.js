var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')
var Schema = mongoose.Schema
var schema = new Schema({
  imagePath: { type: String, required: true },
  title: { type: String, require: true },
  to: { type: String, require: true },
  description: { type: String },
  tripGroup: { type: String, required: true },
  price: { type: Number, required: true },
  departDate: { type: Date, require: true, default: Date.now() },
  departTime: {type: String, require: true},
  codeBus: {type: String, require: true},
  seats: { type: Number, default: 24 },
  seatIsBooked: [],
  reviews: [],
  orderList: [],
  productRate: { type: Number },
  totalProfit: { type: Number }
})
schema.plugin(mongoosePaginate)
module.exports = mongoose.model('Product', schema)
