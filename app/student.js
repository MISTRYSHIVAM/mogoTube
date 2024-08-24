// const mongoose = require("mongoose");
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StudentSchema  = new Schema({
    stdName : String
});

// mongoose.model("collection_name",schema_for_the_collection)
const Student = mongoose.model('student',StudentSchema);

// module.exports = Student;
export default Student;