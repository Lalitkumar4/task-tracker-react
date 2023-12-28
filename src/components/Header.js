import { useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd, taskEdit }) => {
  const location = useLocation()

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd || taskEdit.edit ? "red" : "green"}
          text={showAdd || taskEdit.edit ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

Header.propTypes = {
  title: PropTypes.string,
}

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header
