import React from 'react';
import { Inertia } from '@inertiajs/inertia';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            image: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleImageChange(event) {
        this.setState({ image: event.target.files[0] });
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('image', this.state.image);

        Inertia.post(route('movies.store'), formData);
    }

    render() {
        return (
            <div>
                <h2>Add Movie</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <div>
                        <label>Image:</label>
                        <input type="file" name="image" onChange={this.handleImageChange} />
                    </div>
                    <input type="hidden" name="_token" value={csrfToken} />
                    <button type="submit">Add Movie</button>
                </form>
            </div>
        );
    }
}

export default Create;
