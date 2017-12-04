var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subjectSchema = new Schema({
	subjectCode: {type:Number, required:true,default:'it825'},
	subjectName: {type:String, required:true,default:'networks'},
	pattern:[{
		type:{type:String, required:true},
		weight:{type:Number, required:true},
		totalMarks:{type:Number, required:true}
	}],
	studentList:[
		rollNo:{type:String}
	]
});



module.exports = mongoose.model('Subject',subjectSchema)
