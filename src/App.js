import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

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
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value)
    }

    onButtonSubmit = () => {
        console.log('click')
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
                <FaceRecognition/>
            </div>
        )
    }
}

export default App
