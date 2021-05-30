import React, {Component} from 'react';

import '../app/search-panel.css'

export default class SearchPanel extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            tern: ''
        }
        
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <div className="search-panel">
                <input
                    className="form-control search-input"
                    type="text"
                    placeholder="Поиск по записям"
                    onChange={this.onUpdateSearch}
                />
            </div>
            
        )
    }
    
}
