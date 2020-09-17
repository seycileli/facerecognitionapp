import React, {Component} from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
    apiKey: '23037553394245a2bbf8a1cfb88deaca'
})

const particlesOptions = {
    particles: {
        number: {
            value: 75,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            imageUrl: ''
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value)
        this.setState({input: event.target.value})
    }

    onButtonSubmit = () => {
        console.log('click')
        this.setState({imageUrl: this.state.input});
        app.models
            .predict(
            Clarifai.FACE_DETECT_MODEL,
                this.state.input)
            .then(
                function (response) {
                    //do something
                },
                function (err) {
                    //there was an error for example
                }
            )
    }

    render() {
        return (
            <div className="App">
                <Particles className='particles'
                           params={particlesOptions}/>
                <Navigation/>
                <Logo/>
                <Rank/>
                <ImageLinkForm onInputChange={this.onInputChange}
                               onButtonSubmit={this.onButtonSubmit}/>
                <FaceRecognition imageUrl={this.state.imageUrl}/>
            </div>
        )
    }
}

export default App
