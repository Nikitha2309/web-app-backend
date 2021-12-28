const fs = require("fs");
const path = require('path');
const uploadFile = require("../utils/gCloud").uploadFile;

const gCloudUrl = async (localPath, folderName) => {
	const filePath = localPath.replace('\\', '/');
	const localDestFilePath = path.join(__dirname, '..', '..', 'public', 'profile') + '/' + filePath.substring(filePath.lastIndexOf('\\') + 1);
	console.log("local: ", localDestFilePath);
	console.log("filePath: ", filePath);
	console.log("path: ", path.join(__dirname, '..', '..', 'public', 'profile'))
	console.log("sub: ", filePath.substring(filePath.lastIndexOf('\\') + 1));
	const filedestPath = folderName + filePath.substring(filePath.lastIndexOf('\\') + 1);
	let fileUrl = uploadFile(localDestFilePath, filedestPath);
	fileUrl = await Promise.all([fileUrl]);
	fs.unlinkSync(localDestFilePath);
	return fileUrl[0];
}

module.exports = {
    gCloudUrl
}