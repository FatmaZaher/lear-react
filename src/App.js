import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
// import ClickCounter from './components/ClickCounter';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import CounterTwo from './components/CounterTwo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import PortalDemo from './components/PortalDemo';
// import FRParentInput from './components/FRParentInput';
// import FocusInput from './components/FocusInput';
// import Input from './components/Input';
// import RefsDemo from './components/RefsDemo';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css';
// import styles from './appStyles.module.css'
// import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <UserProvider value='fatma'>
        <ComponentC />
      </UserProvider>














      {/* <CounterTwo render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )}/>
      <CounterTwo render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )}/> */}
      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? 'fatma': 'mema'}/>
      <ClickCounter name="fafaf"/>
      <HoverCounter />
      <ErrorBoundary>
      <Hero heroName="joker" />
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="super man" />
      </ErrorBoundary> 
      <PortalDemo />
      <FRParentInput />
      <FocusInput />
      <Input />
      <RefsDemo />
      <ParentComp />
      <Table />
      <FragmentDemo />
      <LifecycleA />
      <Form />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <Stylesheet primary={false}/>
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Greet name="aya" heroName="superman"></Greet>
      <Welcome name="aya" heroName="superman"/>
      <Counter />
        <p>This is childern props</p>
      </Greet>
      <Greet name="aya" heroName="superman">
        <button>Action</button>
      </Greet>
      <Greet name="aya" heroName="superman"/>
      <Welcome name="aya" heroName="superman"/>
      <Welcome name="aya" heroName="superman"/>
      <Hello />
      <Message />*/}
    </div>
  );
}

export default App;
