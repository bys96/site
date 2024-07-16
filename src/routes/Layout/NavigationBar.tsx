//import {Link} from 'react-router-dom'
export default function NavigationBar() {
  return (
    <div className="flex justify-between bg-base-100">
      <div className="flex p-2 navBar">
        <button className="btn w-10 h-10">Home</button>
        <button className="btn w-10 h-10">Board</button>
      </div>
      <div className="flex items-center p-2">여기에 로그인같은거</div>
    </div>
  );
}
