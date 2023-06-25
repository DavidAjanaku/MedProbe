
export default function DropdownItem(props) {
    // Define the DropdownItem component

    return (
        <li className="dropdownItem ">
          
            <img className="" src={props.img}></img>
            <a href={props.path}> {props.text}{" "}
          </a>
        </li>
      );
}



