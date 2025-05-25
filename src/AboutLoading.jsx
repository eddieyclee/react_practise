import { useState } from "react";
import ReactLoading from 'react-loading';
import { ClipLoader } from "react-spinners";

const promiseSetTimeout = (status) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(status) {
                resolve('promiseSetTimeout 成功');
            } else {
                reject('promiseSetTimeout 失敗');
            }
        }, 2000)
    })
}

function AboutLoading() {
    const array = ['小明', '小王', '小李'];
    const [loadingState, setLoadingState] = useState(false);
    const [loadingListState, setLoadingListState] = useState([]);

    const fullScreenLoading = async () => {
        console.log('fullScreenLoading');
        // 1. 進入非同步前
        setLoadingState(true);
        try {
            await promiseSetTimeout(true);
        } catch (error) {
   
        } finally {
            // 2. 結束讀取後
            setLoadingState(false);
        }
    }

    const changeLoadingState = async (person) => {
        console.log('changeLoadingState');
        // 1. 進入非同步前
        setLoadingListState((prevState) => {return [...prevState, person]});
        try {
            await promiseSetTimeout(true);
        } catch (error) {
   
        } finally {
            // 2. 結束讀取後
            setLoadingListState((prevState) => {return prevState.filter((item) => item !== person)})
        }
    }

    return(<>
    <h1>讀取效果</h1>
    <button type="button" onClick={fullScreenLoading} className="btn btn-primary" disabled={loadingState}>
        讀取按鈕 {loadingState && <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>}
    </button>
    <hr />
    {JSON.stringify(loadingListState)}
    {
        array.map((person) => {
            return(<div key={person}>
                <button className="btn btn-primary" onClick={() => changeLoadingState(person)} disabled={loadingListState.includes(person)}>
                    {person}
                    {loadingListState.includes(person) && <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>}
                </button>
            </div>)
        })
    }
    </>)
}

// <div>
//     {
//         loadingState && (<div style={{
//             position: 'fixed',
//             top: 0,
//             right: 0,
//             bottom: 0, 
//             left: 0,
//             backgroundColor: 'rgba(255, 255, 255, 0.5)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             zIndex: 1000,
//             backdropFilter: 'blur(3px)'
//         }}>
//         {/*1.react-loading*/}
//         {/* <ReactLoading type={'spin'} color={'#000000'} height={50} width={50} /> */}
//         {/*2.React Spinners*/}
//         <ClipLoader
//             color={'#000000'}
//             size={50}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//         />
//         </div>)
//     }
// </div>

export default AboutLoading