import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store/store'
import CakeContainer from './component/6.redux/CakeContainer';
import CakeContainerHooks from './component/6.redux/CakeContainerHooks';
import IceCreamContainer from './component/6.redux/IceCreamContainer';
import NewCakeContainer from './component/6.redux/NewCakeContainer';
// import ClickCounterTwo from './component/5.renderProps/ClickCounterTwo';
// import Counter from './component/5.renderProps/Counter';
// import HoverCounterTwo from './component/5.renderProps/HoverCounterTwo';
// import SimpleRenderPropsUser from './component/5.renderProps/SimpleRenderPropsUser';
// import ClickCounter from './component/4.hoc/ClickCounter';
// import HoverCounter from './component/4.hoc/HoverCounter';
// import Error from './component/3.errorBoundary/Error';
// import ParentComp from './component/1.pureComponent/ParentComp';
// import RefComp from './component/2.refs/RefComp';
// import RefComponent from './component/2.refs/RefComponent';



function App() {
  return (
    <div className="App">
        {/* <ParentComp/> */}

        {/* <RefComp/> */}
        {/* <RefComponent /> */}

        {/* <Error/> */}

        {/* <ClickCounter name="abhishek" incValue = {Number(2)} />
        <HoverCounter name="abhishek"/> */}

        {/* <ClickCounterTwo name="abhishek" incValue = {Number(2)} />
        <HoverCounterTwo name="abhishek"/> */}
        {/* <SimpleRenderPropsUser render={(userName) => userName === 'Abhi' ? 'Abhi' : 'Guest'} /> */}
        {/* <Counter render={(count,handleIncrement,...props)=>{
          return <ClickCounterTwo count={count} handleIncrement = {handleIncrement} name="abhishek" incValue = {Number(2)}/>
        }}/>
        <Counter render={(count,handleIncrement)=>{
          return <HoverCounterTwo count={count} handleIncrement = {handleIncrement} name="abhishek" />
        }}/> */}

        <Provider store={store}>
          <NewCakeContainer />
          <CakeContainer />
          <CakeContainerHooks/> 
          <IceCreamContainer/> 
        </Provider>
        
    </div>
  );
}

export default App;
