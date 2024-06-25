import { useAppDispatch, useAppSelector } from "./hooks/hook";
import { decrement, decrementValue, increment } from "./redux/features/counterSlice";

const App = () => {
  //const count = useSelector((state) => state.counter.count)
  const {count} = useAppSelector((state) => state.counter)
  console.log(count)
  const dispatch = useAppDispatch ()
  return (
    <div className="flex justify-center items-center my-20 ">
      <div className="border border-purple-800 px-20 rounded-md py-20 bg-slate-50">
      <div className="flex justify-start items-center">
        <button onClick={() => dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white">
          Increment
        </button>
        <h1 className="mx-4 text-3xl">{count}</h1>
        <button onClick={() => dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">
          Decrement
        </button>

        {/* <button onClick={() => dispatch(decrementValue(5))} className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">
          Decrement -5
        </button> */}
      </div>
      </div>
    </div>
  );
};

export default App;
