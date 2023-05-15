// controller handling the requests and res

const xlsx = require('xlsx');
const Candidate = require('../model/user');
const async = require('async');


const addCandidates = (req, res) => {

	// reading buffer to the xlsr format
	const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
	const sheet = workbook.Sheets[workbook.SheetNames[0]];
	const candidateData = xlsx.utils.sheet_to_json(sheet);

	async.eachSeries(candidateData, async (data, callback = () => { }) => {

		// checks for the duplicate email
		const existingCandidate = await Candidate.findOne({ email: data.Email });
		if (existingCandidate) {
		console.log(`Skipping duplicate candidate ${data.Email}`);
		return callback();
		}

		const newCandidate = new Candidate({
			name: data["Name of the Candidate"],
			email: data.Email,
			mobileNo: data["Mobile No."],
			DOB: data["Date of Birth"],
			workEx: data["Work Experience"],
			resumeTitle: data["Resume Title"],
			currLocation: data["Current Location"],
			postalAddress: data["Postal Address"],
			currentEmployer: data["Current Employer"],
			currentDesignation: data["Current Designation"]
		});

		// else it saves the record to the database
		await newCandidate.save();
			console.log(`Added new candidate ${data.Email}`);
		return callback();
	},

	(err) => {
		if (err) {
			console.error(err);
			return res.status(500).send('Error processing candidates');
		}
		console.log('All candidates added successfully');
		return res.status(200);
	});
};

module.exports = { addCandidates };