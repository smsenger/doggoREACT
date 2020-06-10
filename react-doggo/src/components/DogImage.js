import React, { Component } from 'react'

export default class DogImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: ''
        }
    }

    getNewDog = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => {
                this.setState({ imageUrl: data.message });
                console.log("fetched image and update state.")
            })
    }

    componentDidMount() {
        console.log('Mounted the DogImage.');
        this.getNewDog();
    }

    handleClick = () => {
        this.getNewDog();
    }

    render() {
        let imageUrl = 'https://images.dog.ceo/breeds/dalmatian/cooper2.jpg';
        console.log('Rendering dog image.')
        return (
            <div onClick={this.handleClick}>
                <img width="300" src={this.state.imageUrl} alt="Dog image" />
            </div>
        )
    }
}