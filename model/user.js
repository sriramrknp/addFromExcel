// defines the schema and structure of the candidate data in the database

const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	mobileNo: { type: Number },
	DOB: { type: String },
	workEx: { type: String },
	resumeTitle: { type: String },
	currLocation: { type: String },
	postalAddress: { type: String },
	currentEmployer: { type: String },
	currentDesignation: { type: String }
});

module.exports = mongoose.model('Candidate', candidateSchema);
