import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    let posts = '강남 고기 맛집';
    let cssStyle = {color : 'yellow', fontSize : '20px'}
    function aa() {
        return posts;
    }

    return (
        <div className = "App">
            <div className="black-nav">
                <div style = { cssStyle }>개발 blog</div>
            </div>
            <h4>{ aa() }</h4>
            <h1>{ myData }</h1>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
