var log = require('winston');
var s3 = require('s3');
var AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-central-1'
});
var awsS3 = new AWS.S3();

var options = {
  s3Client: awsS3
};

var client = s3.createClient(options);

var params = {
  localDir: './www',
  deleteRemoved: true,
  s3Params: {
      Bucket: "www.flipbase.com",
      ACL: "public-read"
  }
};

var uploader = client.uploadDir(params);
uploader.on('error', function(err) {
  log.error("unable to sync:", err.stack);
});
// uploader.on('progress', function() {
//   log.info("progress " + Math.round((uploader.progressAmount / uploader.progressTotal) * 100)) + '%';
// });
uploader.on('end', function() {
  log.info("done uploading");
  process.exit();
});