const mongoose = require('mongoose')

const addBillPayment = mongoose.Schema({
    carts: [CartId = {
        ref : 'addToCart',
        type : String,
   }],
   quantity : Number,
   userId : String,
},{
    timestamps : true
})
const billPaymentModel = mongoose.model("addBillPayment",addBillPayment)

module.exports = billPaymentModel