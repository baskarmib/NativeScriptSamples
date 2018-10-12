const observableModule = require("data/observable");
const camera = require("nativescript-camera");
const geolocation = require("nativescript-geolocation");
const Accuracy = require("ui/enums"); // used to describe at what accuracy the location should be get
const imageSourceModule = require("tns-core-modules/image-source");

function HomeViewModel() {
  var viewModel = observableModule.fromObject({
    onButtonTap: function () {
      console.log("Button was pressed");
    },

    result: 'Please take a picture',
    takePicture(result) {
      
      var base64image =null;
      //Can use options flag to improve performance of camera reducing picture size
      camera.takePicture()
        .then((imageAsset) => {
          this.pictureFromCamera = imageAsset;
          console.log(JSON.stringify(imageAsset));
          this.picture = imageAsset._android
          //Code snippet for converting Image to Base64
          let source = new imageSourceModule.ImageSource();
          source.fromAsset(imageAsset).then((source) => 
          { 
            base64image = source.toBase64String("jpg",60); 
            console.log(base64image);
          });
          
          //Generating Unique Image Name Using Time.
          var d = new Date();
          var t= d.getTime();
          this.picName = "Upload"+t.toString()+".jpg";
          alert(this.picName);

          const bghttp = require("nativescript-background-http");
          const session = bghttp.session("file-upload");
          //url should have the blob url with container name and blob name along with image name.
          //Query string should have the key generated from SAS from Azure Blob Storage Url
          const request = 
          {
            url: 'https://testbasfileupload.blob.core.windows.net/testcontainers/myblob/'+this.picName+"?sv=2017-11-09&ss=bfqt&srt=sco&sp=rwdlacup&se=2018-10-11T03:21:12Z&st=2018-10-10T19:21:12Z&spr=https&sig=EJpm3xlSqmIQy%2BT%2Bx3t5ZIKI18A7%2Fde3Kb9EXuxQDg8%3D",            
            method: "PUT",
            headers: 
            { 
              'cache-control': 'no-cache',
              'x-ms-blob-content-disposition': 'attachment;',
              'x-ms-meta-m2': 'v2',
              'x-ms-meta-m1': 'v1',
              'x-ms-blob-type': 'BlockBlob',
              'Content-Type': 'application/octet-stream',
              'File-Name' :this.picName,
              'x-ms-date': '2018-10-10', //Provide date
              'x-ms-version': '2018-03-28' 
            },
            description: "{ 'uploading': '" + this.picName + "' }"
          };

          const task = session.uploadFile(this.picture, request);
          task.on("complete", (event) => {
            console.log("Uploaded `" + this.picture + "`");
          });
          task.on("error", event => {
            console.log(event);
            console.log("Could not upload `" + this.picture + "`. " + event.eventName);
          });

          return; 

          
        }).catch((err) => {
          console.log("Error -> " + err.message);
        });
    }
  });

  return viewModel;
}

module.exports = HomeViewModel;
