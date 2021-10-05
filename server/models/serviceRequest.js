const mongoose = require("mongoose");

const ServiceRequestSchema = new mongoose.Schema({
  requestCode: {
    type: String,
    required: true,
    unique: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
  // isApproved: {
  //   type: Number,
  //   required: true,
  //   default: 0,
  //   // 0 -> Unapproved, 1 -> Pending, 2 -> Approved.
  // },
  superUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "superUser",
  },
  isRecurring: {
    type: Boolean,
    default: false,
  },
  frequency: {
    type: Number,
    default: 0,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "manager",
  },
  vehicles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vehicle",
    }
  ],
  drivers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "driver",
    }
  ],
  deliveryBoys: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "deliveryBoy",
    }
  ],
  status: {
    type: Number,
    default: 0,
    // 0 -> Unapproved
    // 1 -> Pending
    // 2 -> Approved
    // 3 -> Assigned Manager
    // 4 -> Assigned Driver and Delivery Boy
    // 5 -> Dispatched with Driver
    // 6 -> Delivered by Driver
  },

  // The below code won't be required as we will search in order database for service request.
  //   order: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "order",
  //     },
  //   ],

  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  remarks: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("serviceRequest", ServiceRequestSchema);
