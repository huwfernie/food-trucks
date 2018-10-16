import React from 'react';

class AppIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
  }

  sendRequest(encodedString) {

    const data = {
      'name': this.fileName.value,
      'base64': encodedString
    };

    fetch('http://localhost:3000/api/foodTrucks/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `${body.imageSRC}` });
      });
    });
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    let fileBase64 = '';
    this.getBase64(this.uploadInput.files[0], (result) => {
         fileBase64 = result;
         this.sendRequest(fileBase64);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div>
          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.imageURL} alt="img" />
      </form>
    );
  }
}

export default AppIndex;
