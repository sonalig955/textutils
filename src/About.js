import React from 'react'

export default function About(props) {
    return (
        <div className='container'>
            <h1 className='mt-5 ' style={{color: props.mode==='light'?'black':'white'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='light'?'white':'#1c252d', color:props.mode==='light'?'black':'white'}}>
                            <strong>About Text Utility App</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white': '#1c252d', color: props.mode==='light'?'black':'white'}}>
                            <p>Text Utility App is a text to audio converter and can be used to manipulate the text in different ways. In addition, it counts words, characters and also shows average reading time for your text.</p> 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='light'?'white':'#1c252d', color:props.mode==='light'?'black':'white'}}>
                            <strong>Features</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white': '#1c252d', color: props.mode==='light'?'black':'white'}}>
                            <ul>
                                <li>Reading Texts, PDFs or Ebooks boring? Listen your text with just a click</li>
                                <li>Convert text to Uppercase</li>
                                <li>Convert text to lowercase</li>
                                <li>Capitalize the text</li>
                                <li>Copy text to clipboard</li>
                                <li>Remove extra spaces</li>
                                <li>Get count of words, characters of entered text</li>
                                
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={{backgroundColor: props.mode==='light'?'white':'#1c252d', color:props.mode==='light'?'black':'white'}}>
                            <strong>Compatibility</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white': '#1c252d', color: props.mode==='light'?'black':'white'}}>
                        <p>This Text Utility software works in any web browsers such as Google Chrome, Firefox, Internet Explorer, Safari, Opera, Brave,etc.
                            It suits to count characters in texts, webpages, ebooks, excel document, pdf document, essays, blogs, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
