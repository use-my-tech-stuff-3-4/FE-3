import React from 'react'
import axios from 'axios'
import '../../App.css'

class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          profileImage: {},
          productImage: {},
          imagePreview: '',
          cloudinary: {
              URL: 'https://api.cloudinary.com/v1_1/dvqf5g3mb/image/upload',
              UPLOAD_PRESET: 'hjnp637u'
          },
          formData: new FormData()
        }
        this.uploadFile = this.uploadFile.bind(this)
    }

    uploadFile(event) {
        let file = event.target.files[0]
            this.state.formData.append('file', file)
            this.state.formData.append('upload_preset', this.state.cloudinary.UPLOAD_PRESET)
            axios({
                url: this.state.cloudinary.URL,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/X-WWW-form-urlencoded'
                },
                data: this.state.formData
            })
            .then(res => {
                this.setState({
                    ...this.state,
                    imagePreview: res.data.url
                })
                console.log(res)
                localStorage.setItem('imageURL', res.data.url)
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.profileImage = document.getElementById('profile-image')
        this.productImage = document.getElementById('product-image')
        if (this.profileImage !== null) {
            this.profileImage.addEventListener('change', this.uploadFile.bind(this))
        }
        if (this.productImage !== null) {
            this.productImage.addEventListener('change', this.uploadFile.bind(this))
        }    }

    render() {
        return (
            <div className="center">
                {window.location.pathname.includes('dashboard') &&
                    <div>
                        <p>Upload Profile Image</p>
                        <input id='profile-image' type='file' />
                        <br/>
                        <br/>
                        <br/>
                        <img src={this.state.imagePreview} alt='' width="80%" height="80%"/>
                    </div>
                }
                {window.location.pathname.includes('productform') &&
                    <div>
                        <p>Upload Product Image</p>
                        <input id='product-image' type='file' />
                        <br/>
                        <br/>
                        <br/>
                        <img src={this.state.imagePreview} alt='' width="40%" height="40%"/>
                    </div>
                }
            </div>
        )
    }
}

export default UploadImage