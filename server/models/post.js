var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	title: { type: String, reqiured: true },
	slug: { type: String, required: true, unique: true },
	author: { type: String, required: true },
	body: { type: String, required: true },
	date: { type: Date, default: Date.now },
	public: { type: Boolean, required: true },

	comments: [{
		author: {
			name: { type: String, reqiured: true },
			email: { type: String, reqiured: true },
			website: String
		},
		body: { type: String, reqiured: true },
		date: { type: Date, default: Date.now }
	}]
});

var Post = mongoose.model('Post', postSchema);
