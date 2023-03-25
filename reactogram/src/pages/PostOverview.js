import React from 'react';
import '../App.css';
import './postoverview.css';
import Card from '../components/Card';

function PostOverview() {
    return (
        <div className='app-bg d-flex justify-content-center'>
            <div className='container d-flex justify-content-center flex-md-row flex-column'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default PostOverview;