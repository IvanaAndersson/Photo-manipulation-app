
type Props = {
  optionName: string,
  active: boolean,
  handleClick: () => void
}

const SidebarItem: React.FC<Props> = ({ optionName, active, handleClick }) =>  (
  <button className={`sidebar-item ${active ? "active" : ""}`} onClick={handleClick}>{ optionName }</button>
)     

export default SidebarItem
