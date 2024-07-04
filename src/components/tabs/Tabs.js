import React, {useState} from 'react'

const Tabs = () => {
    const [ toggleState, setToggleState ] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <div className="toggledTabs">
        <div className="container">
            <div className="block-tabs">
                <div
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)} 
                >Tab 1</div>
                <div
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >Tab 2</div>
                <div 
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >Tab 3</div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <h2>Content 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel condimentum ligula, non     placerat velit. Donec vel velit vel.
                    </p>
                </div>

                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <h2>Content 2</h2>
                    <p>Sed vel condimentum ligula, non placerat velit. Donec vel velit vel enim tristique faucibus. Sed auctor, arcu vel bibendum vestibulum, ipsum nisi dictum tellus, non bibendum enim diam vel turpis.</p>
                </div>

                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <h2>Content 3</h2>
                    <p>Lonsectetur adipiscing elit. Sed vel condimentum ligula, non placerat velit. Donec vel velit vel enim tristique faucibus. Sed auctor, arcu vel bibendum vestibulum, ipsum nisi dictum tellus, non bibendum enim diam vel turpis.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Tabs