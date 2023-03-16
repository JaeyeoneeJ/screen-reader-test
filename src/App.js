import "./style.css";

function App() {
    return (
        <div className='wrapper'>
            <header className='header'>
                <p>Title</p>
                <span tabIndex={0} onClick={() => alert("you clicked menu button!!")}>
                    <i role='button' aria-label='Menu Button, If you click this button an alert will pop up.'>
                        icon
                    </i>
                </span>
            </header>
            <div className='container'>
                <div className='box'>
                    <i tabIndex={-1} aria-hidden='true'>
                        icon 1
                    </i>
                    <p role='button' aria-label='This div is first box and description of the box 1.'>
                        A description of the box 1.
                    </p>
                </div>
                <div className='box'>
                    <i tabIndex={-1} aria-hidden='true'>
                        icon 2
                    </i>
                    <p role='button' aria-label='This div is second box and description of the box 2.'>
                        A description of the box 2.
                    </p>
                </div>
                <div className='box'>
                    <i tabIndex={-1} aria-hidden='true'>
                        icon 3
                    </i>
                    <p role='button' aria-label='This div is third box and description of the box 3.'>
                        A description of the box 3.
                    </p>
                </div>
                <div className='box'>
                    <i tabIndex={-1} aria-hidden='true'>
                        icon 4
                    </i>
                    <p role='button' aria-label='This div is fourth box and description of the box 4.'>
                        A description of the box 4.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
