var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
	rollNo: {type:Number, required:true},
	name: {type:String, required:true},
	marks:[{
		examType:{type:String, required:true},
		marksObtained:{type:Number, required:true},
		calculatedMarks:{type:Number, required:true}
	}],
	finalMarks:{type:Number, required:true},
	grade:{type:String, required:true},
	pointer:{type:Number, required:true},
});



module.exports = mongoose.model('Student',studentSchema)
