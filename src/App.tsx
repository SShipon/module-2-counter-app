import { decrement, increment } from "./redux/features/counterSlice";
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  //const count = useSelector((state) => state.counter.count)
  const {count} = useSelector((state) => state.counter)
  console.log(count)
  const dispatch = useDispatch ()
  return (
    <div className="flex justify-center items-center my-20 ">
      <div className="border border-purple-800 px-20 rounded-md py-20 bg-slate-50">
      <div className="flex justify-start items-center">
        <button onClick={() => dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white">
          Increment
        </button>
        <h1 className="mx-4 text-3xl">{count}0</h1>
        <button onClick={() => dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">
          Decrement
        </button>
      </div>
      </div>
    </div>
  );
};

export default App;
