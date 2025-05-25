import useTimer from "./hooks/useTimer";
import { useMouse, useDropArea, useDebounce } from 'react-use';
import { useRef, useState } from "react";

function CustHookPractise() {
    const time = useTimer();

    // useMouse
    const ref = useRef(null);
    const {docX, docY, posX, posY, elX, elY, elW, elH} = useMouse(ref);

    // useDropArea
    // const [bond, state] = useDropArea({
    //     onFiles: files => console.log('files', files),
    //     onUri: uri => console.log('uri', uri),
    //     onText: text => console.log('text', text),
    // });

    // useDebounce
    const [state, setState] = useState('Typing stopped');
    const [val, setVal] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');

    const [, cancel] = useDebounce(
        () => {
            setState('Typing stopped');
            setDebouncedValue(val);
        },
        2000,
        [val]
    );

    return(
        <>
            <input
                type="text"
                value={val}
                placeholder="Debounced input"
                onChange={({ currentTarget }) => {
                    setState('Waiting for typing to stop...');
                    setVal(currentTarget.value);
                }}
            />
            <div>{state}</div>
            <div>
                Debounced value: {debouncedValue}
                <button onClick={cancel}>Cancel debounce</button>
            </div>
            <hr />
            <h1>計時器: {time}</h1>
            <hr />
            <div ref={ref}>
                <div>Mouse position in document - x:{docX} y:{docY}</div>
                <div>Mouse position in element - x:{elX} y:{elY}</div>
                <div>Element position- x:{posX} y:{posY}</div>
                <div>Element dimensions - {elW}x{elH}</div>
            </div>
            <hr />
            {/* <div {...bond}>
                Drop something here.
            </div> */}
        </>
    )

}

export default CustHookPractise