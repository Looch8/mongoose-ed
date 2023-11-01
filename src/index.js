const Developer = mongoose.model("Developer", {
	name: String,
	skills: [String],
});

let newDev = new Developer({
	name: "Alex",
	skills: ["HTML, JavaScript, CSS"],
});

await.newDev.save().then(() => {
    console.log("Save successful");
}).catch(error => {
    console.log("Some error occurred saving data:\n" + error);
})

const mongoose = require("mongoose");

// Async is used to make sure that the connection is established before the server starts
async function dbConnect() {
	try {
		await mongoose.connect("mongodb://localhost:27017/CoderIsAwesome");
		console.log("Database connected");
	} catch (error) {
		console.log(`dbConnect failed! Error:\n${JSON.stringify(error)}`);
	}
}

async function dbClose() {
	await mongoose.connection.close();
	console.log("Database disconnected");
}

async function someAppFunction() {
	await dbConnect();
	console.log("Closingf the DB now so the app doesn't hang open for ages...");
	await dbClose();
}

someAppFunction();
dbConnect()