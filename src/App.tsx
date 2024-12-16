import { Toaster } from "sonner";
import Sonner from "./components/toasts/Sonner";
import { request } from "./lib/api";

function App() {
  return (
    <>
      <Sonner />
      <div
        className="cursor-pointer"
        onClick={() => {
          request();
          console.log(111);
        }}
      >
        show toast
      </div>
      <div className="flexcol">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
